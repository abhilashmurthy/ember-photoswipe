/* global PhotoSwipe */
/* global PhotoSwipeUI_Default */

import Ember from 'ember';
import layout from '../templates/components/photo-swipe';

const {
  A,
  assign,
  getProperties,
  computed,
  isPresent,
  String: { classify },
  typeOf
} = Ember;

export default Ember.Component.extend({
  layout,

  concatenatedProperties: ['pswpOptions', 'pswpEvents', 'itemProperties'],

  pswpOptions: [
    'index',
    'getThumbBoundsFn',
    'showHideOpacity',
    'showAnimationDuration',
    'hideAnimationDuration',
    'bgOpacity',
    'spacing',
    'allowPanToNext',
    'maxSpreadZoom',
    'getDoubleTapZoom',
    'loop',
    'pinchToClose',
    'closeOnScroll',
    'closeOnVerticalDrag',
    'mouseUsed',
    'escKey',
    'arrowKeys',
    'history',
    'galleryUID',
    'galleryPIDs',
    'errorMsg',
    'preload',
    'mainClass',
    'getNumItemsFn',
    'focus',
    'isClickableElement',
    'modal',
  ],

  pswpEvents: [
    'beforeChange',
    'afterChange',
    'imageLoadComplete',
    'resize',
    'gettingData',
    'mouseUsed',
    'initialZoomIn',
    'initialZoomInEnd',
    'initialZoomOut',
    'initialZoomOutEnd',
    'parseVerticalMargin',
    'close',
    'unbindEvents',
    'destroy',
    'updateScrollOffset',
    'preventDragEvent',
    'shareLinkClick',
  ],

  pswp: null,
  items: null,
  itemProperties: ['src', 'h', 'w'],

  init() {
    this._super(...arguments);

    if (!this.get('items')) {
      this.set('items', A([]));
    }

    this.set('actions', {
      open: this.open.bind(this)
    });
  },

  options: computed(function () {
    const pswpOptions = this.get('pswpOptions');
    const options = {};

    pswpOptions.forEach((optionName) => {
      if (this.get(optionName) !== undefined) {
        options[optionName] = this.get(optionName);
      }
    });

    return options;
  }),

  usedPswpEvents: computed('pswpEvents', function () {
    return this.get('pswpEvents').filter((eventName) => {
      let actionName = 'on' + classify(eventName);

      return this.get(actionName) !== undefined;
    });
  }),

  _addEventListeners(pswp) {
    this.get('usedPswpEvents').forEach(eventName => {
      let actionName = 'on' + classify(eventName);

      pswp.listen(eventName, () => {
        this.sendAction(actionName, ...arguments);
      });
    });
  },

  willDestroyElement() {
    let pswp = this.get('pswp');

    if (isPresent(pswp)) {
      pswp.close();
      pswp = null;
      this.set('pswp', null);
    }

    this._super(...arguments);
  },

  open(arg1, arg2) {
    let items = this.get('items');
    let actionOptions;
    let pswp;
    let assignedOptions;
    const itemProperties = this.get('itemProperties');
    const pswpElement = this.$('.pswp')[0];
    const options = this.get('options');

    if (typeOf(arg1) === 'array') {
      items = arg1;
    } else if (typeOf(arg1) === 'object' && !(arg1 instanceof Event)) {
      actionOptions = arg1;
    }

    if (typeOf(arg2) === 'object' && !(arg2 instanceof Event)) {
      actionOptions = arg2;
    }

    items = items.map(function(item) {
      return getProperties(item, itemProperties);
    });

    assignedOptions = assign({}, options, actionOptions);
    pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, assignedOptions);

    pswp.init();

    this.set('pswp', pswp);

    this._addEventListeners(pswp);
  }
});

"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i,a){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,i.default)(l,a.default.modulePrefix),e.default=l}),define("dummy/components/photo-swipe",["exports","ember-photoswipe/components/photo-swipe"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){var n=t.default.A,i=t.default.computed,a=t.default.Object.extend({src:i("id","w","h",function(){return"https://unsplash.it/"+this.get("w")+"/"+this.get("h")+"/?random&image"+this.get("id")})});e.default=t.default.Controller.extend({items:n([a.create({id:1,w:1024,h:768}),a.create({id:2,w:1024,h:768}),a.create({id:3,w:1024,h:768}),a.create({id:4,w:1024,h:768}),a.create({id:5,w:1024,h:768})])})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){return a}e.appVersion=i;var a=n.default.APP.version;e.default=t.default.Helper.helper(i)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var i=n.default.APP,a=i.name,l=i.version;e.default={name:"App Version",initialize:(0,t.default)(a,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var a,l=n.default.exportApplicationGlobal;a="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});i.map(function(){}),e.default=i}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"N0l01mj8",block:'{"statements":[["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","row align-items-center"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","col"],["flush-element"],["text","\\n      "],["open-element","h1",[]],["flush-element"],["text","Ember PhotoSwipe"],["close-element"],["text","\\n\\n      "],["open-element","p",[]],["flush-element"],["text","An "],["open-element","a",[]],["static-attr","href","http://emberjs.com/"],["flush-element"],["text","Ember"],["close-element"],["text"," addon for using "],["open-element","a",[]],["static-attr","href","http://photoswipe.com/"],["flush-element"],["text","Photoswipe"],["close-element"],["text"," in Ember applications."],["close-element"],["text","\\n\\n"],["block",["photo-swipe"],null,[["items","history"],[["get",["items"]],false]],2],["text","\\n      "],["open-element","p",[]],["flush-element"],["text","Fork me on "],["open-element","a",[]],["static-attr","href","https://github.com/kaermorchen/ember-photoswipe"],["static-attr","title","Ember PhotoSwipe"],["flush-element"],["text","github"],["close-element"],["text","."],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","                  "],["open-element","div",[]],["static-attr","class","col-12 col-md-6 mb-4"],["flush-element"],["text","\\n                    "],["open-element","img",[]],["static-attr","class","img-fluid"],["dynamic-attr","src",["unknown",["item","src"]],null],["modifier",["action"],[["get",[null]],"open",["get",["items"]],["helper",["hash"],null,[["index"],[["get",["index"]]]]]],[["target"],[["get",["photoswipe"]]]]],["flush-element"],["close-element"],["text","\\n                  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["get",["index"]]],null,0]],"locals":["item","index"]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","row"],["flush-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","col-12 col-md-6 mb-4"],["flush-element"],["text","\\n            "],["open-element","img",[]],["static-attr","class","img-fluid"],["dynamic-attr","src",["unknown",["items","firstObject","src"]],null],["modifier",["action"],[["get",[null]],"open",["helper",["hash"],null,[["index"],[["get",["index"]]]]]],[["target"],[["get",["photoswipe"]]]]],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n          "],["open-element","div",[]],["static-attr","class","col-12 col-md-6"],["flush-element"],["text","\\n            "],["open-element","div",[]],["static-attr","class","row"],["flush-element"],["text","\\n"],["block",["each"],[["get",["items"]]],null,1],["text","            "],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["photoswipe"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",i=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(i)),l={default:a};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-photoswipe",version:"0.2.2+7181aefd"});
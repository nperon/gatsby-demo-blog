webpackJsonp([0xd2a57dc1d883],{66:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var r=[{plugin:o(186),options:{plugins:[]}}]},179:function(n,e,o){"use strict";var t;e.components={"component---src-templates-all-tags-js":o(287),"component---src-templates-tags-js":o(289),"component---src-templates-blog-post-js":o(288),"component---src-pages-404-js":o(284),"component---src-pages-index-js":o(285),"component---src-pages-page-2-js":o(286)},e.json=(t={"layout-index.json":o(6),"tags.json":o(300)},t["layout-index.json"]=o(6),t["tags-blog.json"]=o(301),t["layout-index.json"]=o(6),t["tags-bookmarks.json"]=o(302),t["layout-index.json"]=o(6),t["tags-bootstrap.json"]=o(303),t["layout-index.json"]=o(6),t["tags-css.json"]=o(304),t["layout-index.json"]=o(6),t["tags-cv.json"]=o(305),t["layout-index.json"]=o(6),t["tags-es-6.json"]=o(306),t["layout-index.json"]=o(6),t["tags-functional-programming.json"]=o(307),t["layout-index.json"]=o(6),t["tags-javascript.json"]=o(308),t["layout-index.json"]=o(6),t["tags-markdown.json"]=o(309),t["layout-index.json"]=o(6),t["tags-memoization.json"]=o(310),t["layout-index.json"]=o(6),t["tags-mobile-app.json"]=o(311),t["layout-index.json"]=o(6),t["tags-react-native.json"]=o(312),t["layout-index.json"]=o(6),t["tags-style.json"]=o(313),t["layout-index.json"]=o(6),t["tags-work.json"]=o(314),t["layout-index.json"]=o(6),t["bookmarks.json"]=o(292),t["layout-index.json"]=o(6),t["memoization.json"]=o(296),t["layout-index.json"]=o(6),t["markdown.json"]=o(295),t["layout-index.json"]=o(6),t["cv.json"]=o(293),t["layout-index.json"]=o(6),t["react-native.json"]=o(298),t["layout-index.json"]=o(6),t["style.json"]=o(299),t["layout-index.json"]=o(6),t["404.json"]=o(290),t["layout-index.json"]=o(6),t["index.json"]=o(294),t["layout-index.json"]=o(6),t["404-html.json"]=o(291),t["layout-index.json"]=o(6),t["page-2.json"]=o(297),t),e.layouts={"layout---index":o(283)}},180:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(3),c=t(i),l=o(9),p=t(l),f=o(118),d=t(f),m=o(49),g=t(m),h=o(66),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){a(this,e);var t=r(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},49:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(349),r=t(a),u=(0,r.default)();n.exports=u},181:function(n,e,o){"use strict";var t=o(65),a={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var r=decodeURIComponent(o),u=r.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),a[u])return a[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,t.matchPath)(u,{path:n.path})||(0,t.matchPath)(u,{path:n.matchPath}))return s=n,a[u]=n,!0}else{if((0,t.matchPath)(u,{path:n.path,exact:!0}))return s=n,a[u]=n,!0;if((0,t.matchPath)(u,{path:n.path+"index.html"}))return s=n,a[u]=n,!0}return!1}),s}}},182:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(91),r=t(a),u=o(66),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},291:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(322)})})}},290:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(323)})})}},292:function(n,e,o){o(2),n.exports=function(n){return o.e(44495949915592,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(324)})})}},293:function(n,e,o){o(2),n.exports=function(n){return o.e(52306936332150,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(325)})})}},294:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(326)})})}},6:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(93)})})}},295:function(n,e,o){o(2),n.exports=function(n){return o.e(65242092113241,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(327)})})}},296:function(n,e,o){o(2),n.exports=function(n){return o.e(1543267897192,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(328)})})}},297:function(n,e,o){o(2),n.exports=function(n){return o.e(0x7b71d9db271c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(329)})})}},298:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf6125fe57ed9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(330)})})}},299:function(n,e,o){o(2),n.exports=function(n){return o.e(75971844984152,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(331)})})}},301:function(n,e,o){o(2),n.exports=function(n){return o.e(17976388717192,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(332)})})}},302:function(n,e,o){o(2),n.exports=function(n){return o.e(0x97c069485179,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(333)})})}},303:function(n,e,o){o(2),n.exports=function(n){return o.e(51584254800688,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(334)})})}},304:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbe2449c8444b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(335)})})}},305:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc600633d21ae,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(336)})})}},306:function(n,e,o){o(2),n.exports=function(n){return o.e(20342444442079,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(337)})})}},307:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe93be1ca5c12,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(338)})})}},308:function(n,e,o){o(2),n.exports=function(n){return o.e(67335324583948,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(339)})})}},309:function(n,e,o){o(2),n.exports=function(n){return o.e(45758362528925,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(340)})})}},310:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe82ab60e1735,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(341)})})}},311:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa3e2353b9e78,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(342)})})}},312:function(n,e,o){o(2),n.exports=function(n){return o.e(0x95744131eb8d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(343)})})}},313:function(n,e,o){o(2),n.exports=function(n){return o.e(31611659233640,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(344)})})}},314:function(n,e,o){o(2),n.exports=function(n){return o.e(44217810673707,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(345)})})}},300:function(n,e,o){o(2),n.exports=function(n){return o.e(55702396619907,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(346)})})}},283:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(183)})})}},118:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(3),r=(t(a),o(181)),u=t(r),s=o(49),i=t(s),c=void 0,l={},p={},f={},d={},m={},g=[],h=[],y={},j=[],x={},v=function(n){return n&&n.default||n},b=void 0,C=!0;b=o(184)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){k(n,function(){j=j.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var N=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},R=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},k=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){o(null,d[e])});else{var t=void 0;t="component---"===e.slice(0,12)?p.components[e]:"layout---"===e.slice(0,9)?p.layouts[e]:p.json[e],t(function(n,t){d[e]=t,o(n,t)})}},w=function(e,o){m[e]?n.nextTick(function(){o(null,m[e])}):k(e,function(n,t){if(n)o(n);else{var a=v(t());m[e]=a,o(n,a)}})},P=1,_={empty:function(){h=[],y={},x={},j=[],g=[]},addPagesArray:function(n){g=n;var e="";e="/blog",c=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(e){return e.path===n}))return!1;var e=1/P;P+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||h.unshift(n),h.sort(R);var o=c(n);return o.jsonName&&(x[o.jsonName]?x[o.jsonName]+=1+e:x[o.jsonName]=1+e,j.indexOf(o.jsonName)!==-1||d[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(x[o.componentChunkName]?x[o.componentChunkName]+=1+e:x[o.componentChunkName]=1+e,j.indexOf(o.componentChunkName)!==-1||d[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(N),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return h.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),C=!1;var t=c(e);if(!t)return console.log("A page wasn't found for \""+e+'"'),o();if(e=t.path,f[e])return n.nextTick(function(){o(f[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){f[e]={component:a,json:r,layout:u,page:t};var n={component:a,json:r,layout:u,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return w(t.componentChunkName,function(n,e){n&&console.log("Loading the component for "+t.path+" failed"),a=e,s()}),w(t.jsonName,function(n,e){n&&console.log("Loading the JSON for "+t.path+" failed"),r=e,s()}),void(t.layoutComponentChunkName&&w(t.layout,function(n,e){n&&console.log("Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:_.getResourcesForPathname};e.default=_}).call(e,o(94))},347:function(n,e){n.exports=[{componentChunkName:"component---src-templates-all-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-blog.json",path:"/tags/blog"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-bookmarks.json",path:"/tags/bookmarks"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-bootstrap.json",path:"/tags/bootstrap"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-css.json",path:"/tags/css"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-cv.json",path:"/tags/cv"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-es-6.json",path:"/tags/es6"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-functional-programming.json",path:"/tags/functional programming"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-javascript.json",path:"/tags/javascript"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-markdown.json",path:"/tags/markdown"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-memoization.json",path:"/tags/memoization"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-mobile-app.json",path:"/tags/mobile app"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-react-native.json",path:"/tags/react native"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-style.json",path:"/tags/style"},{componentChunkName:"component---src-templates-tags-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-work.json",path:"/tags/work"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bookmarks.json",path:"/bookmarks"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"memoization.json",path:"/memoization"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"markdown.json",path:"/markdown"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cv.json",path:"/cv"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"react-native.json",path:"/react-native"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"style.json",path:"/style"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"}]},184:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],r=function(){var n=e();n&&(a.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(66),u=o(3),s=t(u),i=o(149),c=t(i),l=o(65),p=o(318),f=o(269),d=t(f),m=o(182),g=t(m),h=o(49),y=t(h),j=o(347),x=t(j),v=o(348),b=t(v),C=o(180),N=t(C),R=o(179),k=t(R),w=o(118),P=t(w);o(262),window.___emitter=y.default,P.default.addPagesArray(x.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(g.default.replace(e.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(185);var t=function(n){function e(o){o.page.path===P.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=_[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},m=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(i?i:f,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(m,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(N.default,a({page:!0},t)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},348:function(n,e){n.exports=[]},185:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(49),r=t(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},186:function(n,e){"use strict"},269:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(o,n),u=null)};return!r&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},349:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).map(function(n){n(o)}),(n["*"]||[]).map(function(n){n(e,o)})}}}n.exports=o},94:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=a(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];m.push(new i(n,e)),1!==m.length||g||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},284:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(188)})})}},285:function(n,e,o){o(2),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(189)})})}},286:function(n,e,o){o(2),n.exports=function(n){return o.e(0xc6c285f8fd10,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(190)})})}},287:function(n,e,o){o(2),n.exports=function(n){return o.e(0xba8db111768b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(191)})})}},288:function(n,e,o){o(2),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(192)})})}},289:function(n,e,o){o(2),n.exports=function(n){return o.e(50739212244294,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(193)})})}}});
//# sourceMappingURL=app-2612f3df4f4fd8c6cc28.js.map
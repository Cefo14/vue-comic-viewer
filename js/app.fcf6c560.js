(function(e){function t(t){for(var n,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"1a11":function(e,t,r){"use strict";var n=r("54dd"),a=r.n(n);a.a},2:function(e,t){},3:function(e,t){},4:function(e,t){},"40cb":function(e,t,r){"use strict";var n=r("e650"),a=r.n(n);a.a},5:function(e,t){},"54dd":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("v-container",{staticClass:"py-0"},[r("ComicViewer")],1)],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.noFile?r("UploadComic",{on:{onExtractPages:e.onExtractPages}}):r("Viewer",{attrs:{pages:e.pages}})],1)},i=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload-comic__container"},[r("h1",{staticClass:"upload-comic__title"},[e._v(" Comic Reader ")]),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"upload-comic__alert-error",attrs:{dense:"",title:"",color:"red"}},[e._v(" "+e._s(e.error)+" ")]),r("v-card",{staticClass:"upload-comic__card",attrs:{loading:e.isLoading,disabled:e.isLoading}},[r("DropZone",{attrs:{accept:e.accept},on:{onDrop:e.extractPages}},[r("h2",{staticClass:"upload-comic__drop-zone_message"},[e._v(" "+e._s(e.dropZoneMessage)+" ")])])],1)],1)},s=[],p=(r("a15b"),r("b0c0"),r("3835")),l=(r("96cf"),r("1da1")),f=r("2909"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"drop-zone__container",on:{click:function(t){return t.stopPropagation(),e.openInputFile(t)}}},[r("drop",{staticClass:"drop-zone__drop",on:{drop:e.handleDrop}},[e._t("default",[r("div",{staticClass:"drop-zone__message"},[e._v(" "+e._s(this.message)+" ")])])],2),r("input",{ref:"inputFile",staticClass:"drop-zone__input-file",attrs:{type:"file",multiple:e.multiple,accept:e.acceptToString},on:{change:function(t){return t.stopPropagation(),e.handleChange(t)}}})],1)},h=[],v=(r("a623"),r("45fc"),r("4d63"),r("ac1f"),r("25f0"),r("1276"),r("df76")),m=function(e,t){var r=e.name.split(".").pop()||"",n=".".concat(r),a=t.some((function(e){var t=new RegExp(e,"ig");return t.test(n)}));return a},b=function(e,t){return e.every((function(e){return m(e,t)}))},g={name:"DropZone",components:{Drop:v["Drop"]},props:{accept:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},onDrop:{type:Function,default:function(){}},message:{type:String,default:"Upload File"}},methods:{emitOnDrop:function(e){var t=this.multiple?Object(f["a"])(e):[e[0]],r=b(t,this.accept);r&&this.$emit("onDrop",t)},handleDrop:function(e,t){var r=t.dataTransfer.files;this.emitOnDrop(r)},handleChange:function(e){var t=e.target.files;this.emitOnDrop(t)},openInputFile:function(){this.$refs.inputFile.click()}},computed:{acceptToString:function(){return this.accept.join(",")}}},w=g,y=(r("8f01"),r("2877")),j=Object(y["a"])(w,d,h,!1,null,"08136fb3",null),O=j.exports,_=r("d4ec"),x=r("bee2"),k=r("ebb2"),R=r.n(k),P=function(){function e(t){Object(_["a"])(this,e),this.file=t}return Object(x["a"])(e,[{key:"extract",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("method to be defined");case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),C=P,F=(r("4160"),r("b64b"),r("d3b7"),r("159b"),r("262e")),E=r("2caf"),D=r("9072"),T=function(e){Object(F["a"])(r,e);var t=Object(E["a"])(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"The file is invalid or contains errors";return Object(_["a"])(this,r),e=t.call(this,n),e.name="UncompressError",e}return r}(Object(D["a"])(Error)),A=T,S=function(e){Object(F["a"])(r,e);var t=Object(E["a"])(r);function r(){return Object(_["a"])(this,r),t.apply(this,arguments)}return Object(x["a"])(r,[{key:"_fileToArrayBuffer",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FileReader,e.abrupt("return",new Promise((function(e,n){r.onload=function(t){return e(t.target.result)},r.onerror=n,r.readAsArrayBuffer(t)})));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_processFile",value:function(e,t,r){var n=this;if("dir"===t.type)Object.keys(t.ls).forEach((function(e){n._processFile(e,t.ls[e],r)}));else{if("file"!==t.type)throw new Error("unknown type");var a=new File([t.fileContent],e);r.push(a)}}},{key:"_processFiles",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],Object.keys(t.ls).forEach((function(e){n._processFile(e,t.ls[e],r)})),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"extract",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=window.RPC.rpc,e.next=4,this._fileToArrayBuffer(this.file);case 4:return r=e.sent,n=[{name:this.file.name,content:r}],e.next=8,t.unrar(n);case 8:return a=e.sent,e.next=11,this._processFiles(a);case 11:return o=e.sent,e.abrupt("return",o);case 15:throw e.prev=15,e.t0=e["catch"](0),new A;case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(C),B=S,U=(r("4de4"),r("d81d"),r("3ca3"),r("ddb0"),r("c4e3")),V=r.n(U),$=function(e){Object(F["a"])(r,e);var t=Object(E["a"])(r);function r(){return Object(_["a"])(this,r),t.apply(this,arguments)}return Object(x["a"])(r,[{key:"_isDir",value:function(e,t){var r=t.files[e];return Boolean(r.dir)}},{key:"_processFiles",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Object.keys(t.files).map(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a._isDir(r,t)){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,t.file(r).async("blob");case 4:return n=e.sent,e.abrupt("return",new File([n],r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,n=r.filter((function(e){return Boolean(e)})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"extract",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new V.a,e.next=4,t.loadAsync(this.file);case 4:return r=e.sent,e.next=7,this._processFiles(r);case 7:return n=e.sent,e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e["catch"](0),new A;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(C),z=$,L=(r("99af"),r("cb29"),r("257e")),Z=r("ade3"),M=r("9511"),I=r.n(M);I.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(I.a.version,"/pdf.worker.js");var N=function(e){Object(F["a"])(r,e);var t=Object(E["a"])(r);function r(){var e;Object(_["a"])(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(Z["a"])(Object(L["a"])(e),"_pageToCanvas",function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n=t.getViewport({scale:r}),a=document.createElement("canvas"),a.width=n.width,a.height=n.height,e.next=7,t.render({canvasContext:a.getContext("2d"),viewport:n}).promise;case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(Z["a"])(Object(L["a"])(e),"_canvasToBlob",(function(e){return new Promise((function(t){e.toBlob(t)}))})),Object(Z["a"])(Object(L["a"])(e),"_processPages",function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(new Array(r.numPages).fill(null).map(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(n,a){var o,c,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=a+1,t.next=3,r.getPage(o);case 3:return c=t.sent,t.next=6,e._pageToCanvas(c);case 6:return i=t.sent,t.next=9,e._canvasToBlob(i);case 9:return u=t.sent,t.abrupt("return",new File([u],"page_".concat(o,".png")));case 11:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(Z["a"])(Object(L["a"])(e),"extract",Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.file.arrayBuffer();case 3:return r=t.sent,t.next=6,I.a.getDocument(r).promise;case 6:return n=t.sent,t.next=9,e._processPages(n);case 9:return a=t.sent,t.abrupt("return",a);case 13:throw t.prev=13,t.t0=t["catch"](0),new A;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))),e}return r}(C),Y=N,J=function(){function e(){Object(_["a"])(this,e),this.TYPES={RAR:"application/x-rar-compressed",ZIP:"application/zip",PDF:"application/pdf"}}return Object(x["a"])(e,[{key:"create",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.a.fromBlob(t);case 2:r=e.sent,e.t0=r.mime,e.next=e.t0===this.TYPES.RAR?6:e.t0===this.TYPES.ZIP?7:e.t0===this.TYPES.PDF?8:9;break;case 6:return e.abrupt("return",new B(t));case 7:return e.abrupt("return",new z(t));case 8:return e.abrupt("return",new Y(t));case 9:throw new Error("Invalid Uncompress Type");case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),q=J,G=function(e){var t=Object(f["a"])(e);return t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))},W={name:"UploadComic",components:{DropZone:O},data:function(){return{isLoading:!1,accept:[".cbz",".cbr",".pdf"],error:""}},methods:{extractPages:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,i,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.isLoading=!0,n=Object(p["a"])(e,1),a=n[0],r.prev=2,o=new q,r.next=6,o.create(a);case 6:return c=r.sent,r.next=9,c.extract();case 9:i=r.sent,u=G(i),t.$emit("onExtractPages",u),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](2),t.error=r.t0.message;case 17:return r.prev=17,t.isLoading=!1,r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[2,14,17,20]])})))()}},computed:{dropZoneMessage:function(){return"Drop or Click To Upload File ( ".concat(this.accept.join(", ")," )")}}},H=W,K=(r("1a11"),Object(y["a"])(H,u,s,!1,null,"7f500a3a",null)),Q=K.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Photoswipe",{staticClass:"viewer__image-container"},[r("v-row",e._l(e.urls,(function(e){return r("v-col",{key:e,attrs:{cols:"6"}},[r("img",{directives:[{name:"pswp",rawName:"v-pswp",value:e,expression:"url"}],attrs:{src:e}})])})),1)],1)],1)},ee=[],te=(r("2b3d"),{name:"Viewer",props:{pages:{type:Array,default:function(){return[]},validator:function(e){return e.every((function(e){return e instanceof File}))}}},computed:{urls:function(){return this.pages.map((function(e){return URL.createObjectURL(e)}))}}}),re=te,ne=(r("40cb"),Object(y["a"])(re,X,ee,!1,null,"aa895d56",null)),ae=ne.exports,oe={name:"ComicViewer",components:{UploadComic:Q,Viewer:ae},data:function(){return{pages:[]}},computed:{noFile:function(){return this.pages.length<=0}},methods:{onExtractPages:function(e){this.pages=e}}},ce=oe,ie=Object(y["a"])(ce,c,i,!1,null,null,null),ue=ie.exports,se={name:"App",components:{ComicViewer:ue}},pe=se,le=Object(y["a"])(pe,a,o,!1,null,null,null),fe=le.exports,de=r("9483");Object(de["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var he=r("ce5b"),ve=r.n(he);r("bf40");n["default"].use(ve.a);var me={theme:{dark:!0}},be=new ve.a(me),ge=r("71a5"),we=r.n(ge),ye={};n["default"].use(we.a,ye);var je={Vuetify:be};n["default"].config.productionTip=!1,new n["default"]({vuetify:je.Vuetify,render:function(e){return e(fe)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"8f01":function(e,t,r){"use strict";var n=r("a4bc"),a=r.n(n);a.a},a4bc:function(e,t,r){},e650:function(e,t,r){}});
//# sourceMappingURL=app.fcf6c560.js.map
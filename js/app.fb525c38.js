(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/work-panel/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"33c3":function(t,e,n){"use strict";var o=n("f419"),r=n.n(o);r.a},"3e3e":function(t,e,n){},"3e48":function(t,e,n){"use strict";var o=n("3e3e"),r=n.n(o);r.a},4678:function(t,e,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=s,t.exports=r,r.id="4678"},5217:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("a026"),r=n("f23d"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{attrs:{id:"components-layout-demo-top-side"}},[n("a-layout-header",{staticClass:"header"},[n("div",{staticClass:"logo"}),n("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"dark",mode:"horizontal","selected-keys":[]}},[n("a-menu-item",{key:"1"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("a-menu-item",{key:"2"},[n("router-link",{attrs:{to:"/project"}},[t._v("Project")])],1)],1)],1),n("a-layout-content",[n("div",{staticStyle:{height:"100%",overflow:"auto"}},[n("router-view")],1)]),n("a-layout-footer",{staticStyle:{"text-align":"center"}},[t._v("Copyright © 2000 - 2020 DAMENG. All Rights Reserved.")])],1)},a=[],i=(n("034f"),n("2877")),c={},l=Object(i["a"])(c,s,a,!1,null,null,null),u=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.type.indexOf("icon")<0?"AIcon":"CustomIcon",{tag:"component",attrs:{type:t.type}})},f=[],p=n("0c63"),h=p["a"].createFromIconfontCN({scriptUrl:"/icon.js"}),m={props:["type"],components:{AntIcon:p["a"],CustomIcon:h}},b=m,j=Object(i["a"])(b,d,f,!1,null,null,null),w=j.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-button",{attrs:{disabled:t.disabled,ghost:t.ghost,htmlType:t.htmlType,icon:t.icon,loading:t.loading,shape:t.shape,size:t.size,block:t.block,type:t.type},on:{click:function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];return t.click.apply(void 0,e)}}},[t._t("default")],2)},v=[],g=(n("99af"),n("d3b7"),{props:["disabled","ghost","htmlType","icon","shape","size","type","block"],data:function(){return{loading:!1}},methods:{click:function(){var t=this;this.loading=!0;for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];this.$emit.apply(this,["click",function(e){e&&e instanceof Promise?e.finally((function(){t.loading=!1})):t.loading=!1}].concat(n))}}}),x=g,I=Object(i["a"])(x,y,v,!1,null,null,null),k=I.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["flex-col"].concat(t.fill?["flex-col_fill"]:[])},[t._t("default")],2)},O=[],z={props:["fill"]},C=z,$=(n("33c3"),Object(i["a"])(C,_,O,!1,null,"251d927e",null)),S=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-row"},[t._t("default")],2)},D=[],M={},E=M,A=(n("3e48"),Object(i["a"])(E,T,D,!1,null,"f8ca8d48",null)),P=A.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-fill"},[t._t("default")],2)},G=[],U={},B=U,R=(n("6f81"),Object(i["a"])(B,F,G,!1,null,"32f0d474",null)),W=R.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-fixed"},[t._t("default")],2)},L=[],N={},q=N,J=(n("b541"),Object(i["a"])(q,H,L,!1,null,"6777f268",null)),K=J.exports,Q={install:function(t){t.component("FlexCol",S),t.component("FlexRow",P),t.component("FlexFill",W),t.component("FlexFixed",K)}},V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cntr",staticClass:"fl",style:{gridTemplateColumns:"repeat("+t.n+",1fr)",gridGap:(t.rowGap||"0")+"px "+(t.colGap||"0")+"px",margin:(t.rowGap||"0")+"px "+(t.colGap||"0")+"px"}},[t._t("default")],2)},X=[],Y={props:["min","max","rowGap","colGap"],data:function(){return{cnWidth:0}},computed:{_min:function(){return this.min||200},_max:function(){return this.max||1e8},n:function(){if(this.cnWidth<this._min)return 1;var t=Math.floor(this.cnWidth/this._min),e=Math.ceil(this.cnWidth/this._max);return e>=t?e:t}},mounted:function(){var t=this;this.$nextTick().then((function(){var e=new ResizeObserver((function(){t.cnWidth=t.$refs.cntr.clientWidth}));e.observe(t.$refs.cntr)}))}},Z=Y,tt=(n("875b"),Object(i["a"])(Z,V,X,!1,null,"d6cd01ec",null)),et=tt.exports,nt={install:function(t){t.component("IconFont",w),t.component("AsyncButton",k),t.component("ItemsFlow",et),t.use(Q)}},ot=(n("202f"),n("8c4f")),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",padding:"50px 50px 0 50px"}},[n("a-layout",{staticStyle:{height:"100%",padding:"24px 0",background:"#fff"}},[n("a-layout-sider",{staticStyle:{background:"#fff",overflow:"auto"},attrs:{width:"200"}},[n("a-menu",{staticStyle:{height:"100%"},attrs:{mode:"inline","default-selected-keys":["1"],"default-open-keys":["sub1"]}},[n("a-sub-menu",{key:"sub1"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"user"}}),t._v("项目 ")],1),n("a-menu-item",{key:"1"},[t._v("option1")]),n("a-menu-item",{key:"2"},[t._v("option2")]),n("a-menu-item",{key:"3"},[t._v("option3")]),n("a-menu-item",{key:"4"},[t._v("option4")])],1),n("a-sub-menu",{key:"sub2"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"laptop"}}),t._v("模板 ")],1),n("a-menu-item",{key:"5"},[t._v("option5")]),n("a-menu-item",{key:"6"},[t._v("option6")]),n("a-menu-item",{key:"7"},[t._v("option7")]),n("a-menu-item",{key:"8"},[t._v("option8")])],1),n("a-sub-menu",{key:"sub3"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"notification"}}),t._v("已归档 ")],1),n("a-menu-item",{key:"9"},[t._v("option9")]),n("a-menu-item",{key:"10"},[t._v("option10")]),n("a-menu-item",{key:"11"},[t._v("option11")]),n("a-menu-item",{key:"12"},[t._v("option12")])],1)],1)],1),n("a-layout-content",{style:{padding:"0 24px",minHeight:"280px"}},[t._v("Content")])],1)],1)},st=[],at=(n("cccb"),{}),it=Object(i["a"])(at,rt,st,!1,null,null,null),ct=it.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flex-col",{staticStyle:{height:"100%"}},[n("flex-fixed"),n("h1",{staticStyle:{margin:"24px 0 0 24px"}},[t._v(" "+t._s(t.name)+" "),n("a-button",{staticStyle:{margin:"0 12px"},attrs:{type:"primary"},on:{click:t.addRow}},[t._v("add row")]),n("a-button",{attrs:{type:"primary"},on:{click:t.addCol}},[t._v("add col")])],1),n("flex-fill",[n("div",{style:{display:"grid",gridGap:"20px",padding:"20px",overflow:"auto",height:"100%",width:300*(t.cols.length+1)+20+"px",positon:"relative",gridTemplateColumns:"repeat("+(t.cols.length+1)+",280px)"}},[t._l(t.cells,(function(e){return["panel"===e.type?n("cell-panel",{key:e.rowId+"-"+e.colId,attrs:{rowId:e.rowId,colId:e.colId,items:e.items},on:{add:function(e){var n=e.rowId,o=e.colId,r=e.sort;return t.addItem({rowId:n,colId:o,sort:r})},update:function(e){var n=e.rowId,o=e.colId,r=e.items;return t.updateItems({rowId:n,colId:o,items:r})}}}):t._e(),"operate"===e.type?n("row-opreater",{key:e.rowId+"-"+e.colId,attrs:{rowId:e.rowId},on:{rowUp:function(e){var n=e.rowId;return t.rowUp(n)},rowDown:function(e){var n=e.rowId;return t.rowDown(n)},rowTop:function(e){var n=e.rowId;return t.rowTop(n)},rowBottom:function(e){var n=e.rowId;return t.rowBottom(n)},rowDelete:function(e){var n=e.rowId;return t.rowDelete(n)},rowCopy:function(e){var n=e.rowId;return t.rowCopy(n)}}}):t._e()]}))],2)])],1)},ut=[],dt=(n("cb29"),n("4de4"),n("7db0"),n("5db7"),n("d81d"),n("73d9"),n("c975"),n("a15b"),n("ac1f"),n("1276"),"\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n\n谢邀，发动机转速上限这个事情，跟几个因素相关。第一个就是运转件的质量，\n运转件就是曲轴连杆活塞气门，气门驱动机构，这些运转件自身惯量越小，越容\n易的达到高转速。很显然一个问题，大众的TDI是轻量化柴油机，而货车重载车\n辆都是重载柴油机。第二个就是柴油的燃烧速率，你可以认为柴油燃烧速度是有\n上限的，它属于重质燃油，它燃烧速度比不上航煤，也比不上汽油，所以火焰传\n播速度是有上限的，所以燃烧室越大，火焰能在做工冲程传播完毕的可能性就越\n小，所以大缸体柴油机必然不适合高速运转。货车发动机一般都是12L起步，单\n缸大约2L容积，而乘用车单缸一般就是0.5L。第三个转速高的意义，转速高意\n味着可以有更大的功率，实际上单纯的提高扭矩不提高转速也能提高功率，只\n是殊途同归罢了，相对于用高转速柴油机拉转速获得充沛的起步动力，直接提高低\n转速最大扭矩更为简单。第四个，更高的转速意味着机油劣化速度更快，对于货车这种\n5万公里一次保养的车来说，追求高转速发动机是不合适的第5个，活塞的线速度，\n摩托车引擎轻松破万，而乘用车就是6-7k，柴油更低4-5k，重载柴油机更低2k上\n下，其中有一点是变化不大的就是活塞相对于气缸的线速度，冲程长转速低活塞线\n速度并不定就低于短冲转速高的发动机".split("").filter((function(t){return["，","。","\n"].indexOf(t)<0})).join("")),ft=function(t,e){return Math.floor(Math.random()*(e-t))+t},pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return new Array(ft(t,e)).fill(0).map((function(){return dt[ft(0,dt.length)]})).join("")},ht=function(t,e){return Math.floor(Math.random()*(e-t))+t},mt=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],bt=function(){return"xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxx".split("").map((function(t){return"-"===t?t:mt[ht(0,mt.length)]})).join("")},jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row-operate"},[n("p",[n("a-button",{staticStyle:{"margin-right":"12px"},attrs:{ghost:!0,type:"primary",shape:"circle",icon:"arrow-up"},on:{click:t.rowUp}}),n("a-button",{attrs:{ghost:!0,type:"primary",shape:"round"},on:{click:t.rowTop}},[t._v("置顶")])],1),n("p",[n("a-button",{staticStyle:{"margin-right":"12px"},attrs:{ghost:!0,type:"primary",shape:"circle",icon:"arrow-down"},on:{click:t.rowDown}}),n("a-button",{attrs:{ghost:!0,type:"primary",shape:"round"},on:{click:t.rowBottom}},[t._v("底部")])],1),n("p",[n("a-button",{staticStyle:{"margin-right":"12px"},attrs:{ghost:!0,type:"primary",shape:"circle",icon:"delete"},on:{click:t.rowDelete}}),n("a-button",{attrs:{ghost:!0,type:"primary",shape:"round"},on:{click:t.rowCopy}},[t._v("复制")])],1)])},wt=[],yt={props:["rowId"],methods:{rowUp:function(){this.$emit("rowUp",{rowId:this.rowId})},rowDown:function(){this.$emit("rowDown",{rowId:this.rowId})},rowTop:function(){this.$emit("rowTop",{rowId:this.rowId})},rowBottom:function(){this.$emit("rowBottom",{rowId:this.rowId})},rowDelete:function(){this.$emit("rowDelete",{rowId:this.rowId})},rowCopy:function(){this.$emit("rowCopy",{rowId:this.rowId})}}},vt=yt,gt=(n("b321"),Object(i["a"])(vt,jt,wt,!1,null,"55ec1e27",null)),xt=gt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"panel card"},[n("draggable",{attrs:{element:"div",ghostClass:"work-card-ghost",group:{name:"card"}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},t._l(t.items,(function(e,o){return n("div",{key:o,staticClass:"item border-card"},[t._v(t._s(e.content))])})),0),n("a-button",{attrs:{type:"link",icon:"plus"},on:{click:t.add}},[t._v("添加新的卡片")])],1)])},kt=[],_t=n("310e"),Ot=n.n(_t),zt={components:{draggable:Ot.a},props:["rowId","colId","items"],computed:{list:{get:function(){return this.items.map((function(t){return t})).sort((function(t,e){return t.sort-e.sort}))},set:function(t){this.$emit("update",{rowId:this.rowId,colId:this.colId,items:t})}}},methods:{add:function(){this.$emit("add",{rowId:this.rowId,colId:this.colId,sort:0===this.list.length?0:this.list[this.list.length-1].sort+1})}}},Ct=zt,$t=(n("d159"),Object(i["a"])(Ct,It,kt,!1,null,"4ecc4a0f",null)),St=$t.exports,Tt={components:{RowOpreater:xt,CellPanel:St},data:function(){return{name:pt(),rows:new Array(5).fill(0).map((function(){return{rowId:bt()}})),cols:new Array(4).fill(0).map((function(){return{colId:bt()}})),list:[]}},computed:{cells:function(){var t=this;return this.rows.flatMap((function(e){var n=e.rowId;return t.cols.map((function(e){var o=e.colId;return{rowId:n,colId:o,type:"panel",items:t.list.filter((function(t){return t.rowId===n&&t.colId===o}))}})).concat([{rowId:n,colId:null,type:"operate"}])}))}},methods:{addItem:function(t){var e=t.rowId,n=t.colId,o=t.sort;this.list.push({rowId:e,colId:n,sort:o,content:pt(20,100)})},updateItems:function(t){var e=t.rowId,n=t.colId,o=t.items;this.list=this.list.filter((function(t){return t.rowId!==e||t.colId!==n})).concat(o.map((function(t,o){return Object.assign({},t,{colId:n,rowId:e,sort:o})})))},addRow:function(){this.rows.push({rowId:bt()})},addCol:function(){this.cols.push({colId:bt()})},rowUp:function(t){this.rows=this.rows.flatMap((function(e,n,o){return e.rowId===t&&o[n-1]?[e,o[n-1]]:o[n+1]&&o[n+1].rowId===t?[]:[e]}))},rowDown:function(t){this.rows=this.rows.flatMap((function(e,n,o){return e.rowId===t&&o[n+1]?[o[n+1],e]:o[n-1]&&o[n-1].rowId===t?[]:[e]}))},rowTop:function(t){this.rows=this.rows.filter((function(e){return e.rowId===t})).concat(this.rows.filter((function(e){return e.rowId!==t})))},rowBottom:function(t){this.rows=this.rows.filter((function(e){return e.rowId!==t})).concat(this.rows.filter((function(e){return e.rowId===t})))},rowDelete:function(t){this.rows=this.rows.filter((function(e){return e.rowId!==t})),this.list=this.list.filter((function(e){return e.rowId!==t}))},rowCopy:function(t){var e=bt(),n=this.rows.find((function(e){return e.rowId===t}));if(n){var o=Object.assign({},n,{rowId:e});this.rows=this.rows.flatMap((function(e){return e.rowId===t?[e,o]:[e]})),this.list=this.list.concat(this.list.filter((function(e){return e.rowId==t})).map((function(t){return Object.assign({},t,{rowId:e})})))}}}},Dt=Tt,Mt=(n("c7d2"),Object(i["a"])(Dt,lt,ut,!1,null,"e74b6ad0",null)),Et=Mt.exports;o["a"].use(ot["a"]);var At=[{path:"/",name:"Home",component:ct},{path:"/project",name:"Project",component:Et}],Pt=new ot["a"]({mode:"history",base:"/work-panel/",routes:At}),Ft=Pt;o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].use(nt),new o["a"]({el:"#app",components:{App:u},router:Ft,template:"<App/>"})},"5ced":function(t,e,n){},"6f81":function(t,e,n){"use strict";var o=n("cf09"),r=n.n(o);r.a},8555:function(t,e,n){},"85ec":function(t,e,n){},"875b":function(t,e,n){"use strict";var o=n("a775"),r=n.n(o);r.a},"8b4a":function(t,e,n){},"8eaa":function(t,e,n){},a775:function(t,e,n){},b321:function(t,e,n){"use strict";var o=n("8eaa"),r=n.n(o);r.a},b541:function(t,e,n){"use strict";var o=n("5217"),r=n.n(o);r.a},c7d2:function(t,e,n){"use strict";var o=n("8555"),r=n.n(o);r.a},cccb:function(t,e,n){"use strict";var o=n("5ced"),r=n.n(o);r.a},cf09:function(t,e,n){},d159:function(t,e,n){"use strict";var o=n("8b4a"),r=n.n(o);r.a},f419:function(t,e,n){}});
//# sourceMappingURL=app.fb525c38.js.map
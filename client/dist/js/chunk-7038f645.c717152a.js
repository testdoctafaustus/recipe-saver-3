(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7038f645"],{"02f4":function(e,t,n){var a=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var i,s,o=String(r(t)),c=a(n),l=o.length;return c<0||c>=l?e?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?e?o.charAt(c):i:e?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var a=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"0471":function(e,t,n){e.exports=n.p+"img/icon-ruby.b0672c6d.png"},"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"156b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"plans"}},[n("div",{staticClass:"plans-container wrapper"},[n("HeaderNonApp"),e._m(0),n("div",{staticClass:"plan-blocks"},[n("div",{staticClass:"plan-container"},[n("div",{staticClass:"plan lite"},[e._m(1),e._m(2),n("a",{staticClass:"plan-cta",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.showLitePlan()}}},[e._v("Select")])])]),e._m(3)])],1),n("Footer"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],staticClass:"charge-modal"},[n("div",{staticClass:"charge-modal-inner",class:{error:e.error,processing:!0===e.processing,"charge-modal-inner":!0}},[e._m(4),n("div",{staticClass:"charge-processing"},[e._v("Processing...")]),n("div",{staticClass:"charge-modal-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"charge-message"},[e._v(e._s(e.message))]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:"login"===e.btnToShow,expression:"btnToShow === 'login'"}],staticClass:"charge-modal-btn",attrs:{to:{path:"/login"}}},[e._v("Login / Register")]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:"recipes"===e.btnToShow,expression:"btnToShow === 'recipes'"}],staticClass:"charge-modal-btn",attrs:{to:{path:"/recipes/all"}}},[e._v("My Recipes")]),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.title,expression:"title !== ''"}],staticClass:"charge-modal-cancel-container"},[n("div",{staticClass:"charge-modal-cancel",on:{click:function(t){e.showModal=!1}}},[e._v("Cancel")])])],1),n("div",{staticClass:"charge-overlay"})])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plans-container-title"},[n("h1",[e._v("Plans built for home cooks of all types.")]),n("h2",[e._v("Sign up for the full service or upgrade later.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan-title-and-icon"},[a("img",{staticClass:"plan-title-icon",attrs:{src:n("1b2d")}}),a("div",{staticClass:"plan-title"},[e._v("Lite")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"plan-info"},[n("div",{staticClass:"plan-subtitle"},[e._v("\n              Save and organize online recipes\n            ")]),n("div",{staticClass:"plan-price"},[e._v("Free")]),n("div",{staticClass:"plan-price-info"},[e._v("upgrade later")]),n("ul",{staticClass:"plan-benefits"},[n("li",[e._v("Save up to 50 recipes")]),n("li",[e._v("Recipe Saver Chrome extension")]),n("li",[e._v("Add custom notes, images, and tags")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan-container"},[a("div",{staticClass:"plan full"},[a("div",{staticClass:"plan-title-and-icon"},[a("img",{staticClass:"plan-title-icon",attrs:{src:n("0471")}}),a("div",{staticClass:"plan-title"},[e._v("Full")])]),a("div",{staticClass:"plan-info"},[a("div",{staticClass:"plan-subtitle"},[e._v("\n              The ultimate recipe "),a("br"),e._v("organization tool and more\n            ")]),a("div",{staticClass:"plan-price"},[e._v("$9")]),a("div",{staticClass:"plan-price-info"},[e._v("per month")]),a("ul",{staticClass:"plan-benefits"},[a("li",[e._v("All the benefits of the Lite plan")]),a("li",[e._v("Save unlimited recipes")]),a("li",[e._v("Share recipes with friends and family")]),a("li",[e._v("Create grocery lists (coming soon!)")])])]),a("a",{staticClass:"plan-cta",attrs:{href:"#"}},[e._v("Select")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rs-logo"},[a("img",{staticClass:"rs-logo-image",attrs:{src:n("af3a")}})])}],i=(n("96cf"),n("3b8d")),s=n("ea9e"),o=n("c5a6"),c=n("414a"),l=n("fd2d"),u=n("d47f"),v={components:{HeaderNonApp:s["a"],Icon:o["a"],Footer:l["a"]},mixins:[c["a"]],data:function(){return{processing:!1,title:"",message:"",error:!1,showModal:!1,btnToShow:""}},methods:{resetModal:function(){this.title="",this.message="",this.error=!1,this.btnToShow=""},showLitePlan:function(){var e=this;this.resetModal(),this.showModal=!0,this.processing=!0,setTimeout(function(){e.processing=!1,e.title="Welcome to Recipe Saver!",e.message='Your account is all set up! Click "My Recipes" below to access your personal recipe collection.',e.btnToShow="recipes"},2e3),this.$ga.event({eventCategory:"Plans",eventAction:"free plan clicked"})},handleResponse:function(e){this.processing=!1;var t="Your card has not been charged.";switch(this.title="Unsuccessful Purchase",this.error=!0,this.btnToShow="login",e.data.message){case"not logged in":this.message="Please login or register first. ".concat(t),this.$ga.event({eventCategory:"Plans",eventAction:"full plan error",eventLabel:this.message});break;case"no user found":this.message="User not found. Please login first. ".concat(t),this.$ga.event({eventCategory:"Plans",eventAction:"full plan error",eventLabel:this.message});break;case"has full plan":this.message="This account already has a Full Plan. ".concat(t),this.btnToShow="recipes",this.$ga.event({eventCategory:"Plans",eventAction:"full plan error",eventLabel:this.message});break;case"new subscription":this.title="You're In!",this.message="Congratulations! You have successfully signed up for the Full plan and now have unlimited access",this.btnToShow="recipes",this.error=!1,this.$ga.event({eventCategory:"Plans",eventAction:"full plan signup"});break}this.showModal=!0}},mounted:function(){var e=this,t=this,n=StripeCheckout.configure({key:"pk_test_KmQZh5RXWtu0bnCzyOoFBn5A",image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1571800233/Site%20Images/logo-255x255-white-square.png",locale:"auto",token:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.processing=!0,t.showModal=!0,e.next=4,u["a"].charge({stripeToken:n.id,stripeEmail:n.email});case 4:a=e.sent,t.handleResponse(a);case 6:case"end":return e.stop()}},e)}));function n(t){return e.apply(this,arguments)}return n}()});document.querySelector(".plan.full .plan-cta").addEventListener("click",function(t){t.preventDefault(),n.open({name:"Recipe Saver",description:"Full Plan",amount:900,allowRememberMe:!1}),e.$ga.event({eventCategory:"Plans",eventAction:"full plan clicked"})})},beforeCreate:function(){document.body.className="plans"}},p=v,f=(n("ff8f"),n("2877")),d=Object(f["a"])(p,a,r,!1,null,null,null);t["default"]=d.exports},"1b2d":function(e,t,n){e.exports=n.p+"img/icon-emerald.da650cbd.png"},"214f":function(e,t,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),i=n("79e5"),s=n("be13"),o=n("2b4c"),c=n("520a"),l=o("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),v=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=o(e),f=!i(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),d=f?!i(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!t}):void 0;if(!f||!d||"replace"===e&&!u||"split"===e&&!v){var h=/./[p],g=n(s,p,""[e],function(e,t,n,a,r){return t.exec===c?f&&!r?{done:!0,value:h.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),m=g[0],b=g[1];a(String.prototype,e,m),r(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"414a":function(e,t,n){"use strict";n("a481"),n("7f7f");t["a"]={methods:{waitFor:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;if(!e())return a<=0?void 0:(a-=n,setTimeout(this.waitFor.bind(null,e,t,n,a),n));t()},backgroundColor:function(e){return"background-color: ".concat(e)},dynamicBackgroundColor:function(e){if(e){var t=window.tagColorMap&&window.tagColorMap[e.name]?window.tagColorMap[e.name]:e.color;return"background-color: ".concat(t)}},formatDate:function(e){return new Date(e).toLocaleDateString().replace(/\/20(\d\d)$/,"/$1")}}}},"520a":function(e,t,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,s=r,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[o]||0!==t[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(e){var t,n,s,u,v=this;return l&&(n=new RegExp("^"+v.source+"$(?!\\s)",a.call(v))),c&&(t=v[o]),s=r.call(v,e),c&&s&&(v[o]=v.global?s.index+s[0].length:t),l&&s&&s.length>1&&i.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&a(r,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},a481:function(e,t,n){"use strict";var a=n("cb7c"),r=n("4bf8"),i=n("9def"),s=n("4588"),o=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,v=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,h){return[function(a,r){var i=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,i,r):n.call(String(i),a,r)},function(e,t){var r=h(n,e,this,t);if(r.done)return r.value;var v=a(e),p=String(this),f="function"===typeof t;f||(t=String(t));var m=v.global;if(m){var b=v.unicode;v.lastIndex=0}var w=[];while(1){var C=c(v,p);if(null===C)break;if(w.push(C),!m)break;var x=String(C[0]);""===x&&(v.lastIndex=o(p,i(v.lastIndex),b))}for(var _="",y=0,S=0;S<w.length;S++){C=w[S];for(var k=String(C[0]),$=l(u(s(C.index),p.length),0),R=[],A=1;A<C.length;A++)R.push(d(C[A]));var E=C.groups;if(f){var M=[k].concat(R,$,p);void 0!==E&&M.push(E);var T=String(t.apply(void 0,M))}else T=g(k,p,$,R,E,t);$>=y&&(_+=p.slice(y,$)+T,y=$+k.length)}return _+p.slice(y)}];function g(e,t,a,i,s,o){var c=a+e.length,l=i.length,u=f;return void 0!==s&&(s=r(s),u=p),n.call(o,u,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(c);case"<":o=s[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var p=v(u/10);return 0===p?n:p<=l?void 0===i[p-1]?r.charAt(1):i[p-1]+r.charAt(1):n}o=i[u-1]}return void 0===o?"":o})}})},af3a:function(e,t,n){e.exports=n.p+"img/logo-255x255.5a777ef2.svg"},b0c5:function(e,t,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c6d3:function(e,t,n){},d47f:function(e,t,n){"use strict";var a=n("3f4a");t["a"]={charge:function(e){return Object(a["a"])().post("/charge",e)},cancelSubscription:function(){return Object(a["a"])().get("/cancel-subscription")},deleteAccount:function(){return Object(a["a"])().get("/delete-account")}}},ff8f:function(e,t,n){"use strict";var a=n("c6d3"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-7038f645.c717152a.js.map
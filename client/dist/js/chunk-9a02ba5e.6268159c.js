(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a02ba5e"],{"02f4":function(e,t,a){var i=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var n,r,s=String(o(t)),c=i(a),l=s.length;return c<0||c>=l?e?"":void 0:(n=s.charCodeAt(c),n<55296||n>56319||c+1===l||(r=s.charCodeAt(c+1))<56320||r>57343?e?s.charAt(c):n:e?s.slice(c,c+2):r-56320+(n-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var i=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?i(e,t).length:1)}},"0a49":function(e,t,a){var i=a("9b43"),o=a("626a"),n=a("4bf8"),r=a("9def"),s=a("cd1c");e.exports=function(e,t){var a=1==e,c=2==e,l=3==e,u=4==e,d=6==e,p=5==e||d,h=t||s;return function(t,s,g){for(var f,m,v=n(t),b=o(v),w=i(s,g,3),k=r(b.length),y=0,C=a?h(t,k):c?h(t,0):void 0;k>y;y++)if((p||y in b)&&(f=b[y],m=w(f,y,v),e))if(a)C[y]=m;else if(m)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:C.push(f)}else if(u)return!1;return d?-1:l||u?u:C}}},"0bfb":function(e,t,a){"use strict";var i=a("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1169:function(e,t,a){var i=a("2d95");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"11e9":function(e,t,a){var i=a("52a7"),o=a("4630"),n=a("6821"),r=a("6a99"),s=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;t.f=a("9e1e")?l:function(e,t){if(e=n(e),t=r(t,!0),c)try{return l(e,t)}catch(a){}if(s(e,t))return o(!i.f.call(e,t),e[t])}},"1df7":function(e,t,a){e.exports=a.p+"img/integration-epicurious.237a014e.png"},"214f":function(e,t,a){"use strict";a("b0c5");var i=a("2aba"),o=a("32e9"),n=a("79e5"),r=a("be13"),s=a("2b4c"),c=a("520a"),l=s("species"),u=!n(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var p=s(e),h=!n(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),g=h?!n(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[l]=function(){return a}),a[p](""),!t}):void 0;if(!h||!g||"replace"===e&&!u||"split"===e&&!d){var f=/./[p],m=a(r,p,""[e],function(e,t,a,i,o){return t.exec===c?h&&!o?{done:!0,value:f.call(t,a,i)}:{done:!0,value:e.call(a,t,i)}:{done:!1}}),v=m[0],b=m[1];i(String.prototype,e,v),o(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"2f21":function(e,t,a){"use strict";var i=a("79e5");e.exports=function(e,t){return!!e&&i(function(){t?e.call(null,function(){},1):e.call(null)})}},3656:function(e,t,a){e.exports=a.p+"img/layout-image-icon.16c79cf3.svg"},"414a":function(e,t,a){"use strict";a("a481"),a("7f7f");t["a"]={methods:{waitFor:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;if(!e())return i<=0?void 0:(i-=a,setTimeout(this.waitFor.bind(null,e,t,a,i),a));t()},backgroundColor:function(e){return"background-color: ".concat(e)},dynamicBackgroundColor:function(e){if(e){var t=window.tagColorMap&&window.tagColorMap[e.name]?window.tagColorMap[e.name]:e.color;return"background-color: ".concat(t)}},formatDate:function(e){return new Date(e).toLocaleDateString().replace(/\/20(\d\d)$/,"/$1")}}}},"520a":function(e,t,a){"use strict";var i=a("0bfb"),o=RegExp.prototype.exec,n=String.prototype.replace,r=o,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(e){var t,a,r,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),c&&(t=d[s]),r=o.call(d,e),c&&r&&(d[s]=d.global?r.index+r[0].length:t),l&&r&&r.length>1&&n.call(r[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),e.exports=r},"535d":function(e,t,a){"use strict";var i=a("9e6c"),o=a.n(i);o.a},"55dd":function(e,t,a){"use strict";var i=a("5ca1"),o=a("d8e8"),n=a("4bf8"),r=a("79e5"),s=[].sort,c=[1,2,3];i(i.P+i.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!a("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(n(this)):s.call(n(this),o(e))}})},"57da":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HeaderNonApp"),e._m(0),a("div",{staticClass:"wrapper hero-wrapper"},[a("div",{staticClass:"hero"},[e._m(1),a("div",{staticClass:"ctas"},[a("a",{staticClass:"secondary-cta",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.scrollToPlans()}}},[e._v("See Plans")]),a("router-link",{staticClass:"main-cta",attrs:{to:{path:"/login"}}},[e._v("Login / Register")])],1)])]),a("div",{staticClass:"site-preview"},[e._m(2),a("div",{staticClass:"site-preview-inner"},[a("div",{staticClass:"site-preview-heading"},[e._v("\n        Stay Organized Your Way\n      ")]),a("div",{staticClass:"site-preview-subheading"},[e._v("\n        Recipe Saver is designed to let you choose how you want to organize your recipes\n      ")]),a("SitePreviewBox")],1)]),a("div",{staticClass:"white-boxes"},[a("div",{staticClass:"plans"},[a("div",{staticClass:"plans-headline"},[e._v("What's Included")]),a("div",{staticClass:"plans-subheadline"},[e._v("Choose just the basics or the get the full tool")]),a("div",{staticClass:"plan lite"},[e._m(3),a("div",{staticClass:"plan-right"},[a("div",{staticClass:"plan-cost"},[e._v("Free")]),a("div",{staticClass:"plan-cost-details"},[e._v("\n            Upgrade later to save 50+ recipes\n          ")]),a("a",{staticClass:"plan-cta",attrs:{href:"#"}},[a("span",{staticClass:"plan-cta-text"},[e._v("10 second sign up")]),a("Icon",{attrs:{name:"shortArrow"}})],1)])]),a("div",{staticClass:"plan full"},[e._m(4),a("div",{staticClass:"plan-right"},[a("div",{staticClass:"plan-cost"},[e._v("$9")]),a("div",{staticClass:"plan-cost-details"},[e._v("\n            Per month (cancel anytime)\n          ")]),a("a",{staticClass:"plan-cta",attrs:{href:"#"}},[a("span",{staticClass:"plan-cta-text"},[e._v("Get full plan")]),a("Icon",{attrs:{name:"shortArrow"}})],1)])])]),e._m(5),e._m(6)]),a("div",{staticClass:"horizontal-box-section"},[a("router-link",{staticClass:"horizontal-box",attrs:{to:{path:"/login"}}},[a("span",{staticClass:"horizontal-box-title"},[e._v("Start Now")]),a("Icon",{attrs:{name:"shortArrow"}}),a("div",{staticClass:"horizontal-box-text"},[e._v("\n        Use Recipe Saver to create your own recipe collection, add custom tags, share your favorite recipes and more!\n      ")])],1)],1),a("div",{staticClass:"footer-bar"}),a("Footer")],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper title-wrapper"},[i("div",{staticClass:"center-logo logo"},[i("img",{staticClass:"logo-image",attrs:{src:a("f44d")}}),i("span",{staticClass:"logo-text"},[e._v("Recipe Saver")])]),i("h1",{staticClass:"headline"},[e._v("It's never been easier to save recipes online!")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-benefits"},[a("div",{staticClass:"hero-benefits-top"},[a("div",{attrs:{id:"hero-image"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stripes"},[a("span"),a("span")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan-left"},[a("div",{staticClass:"plan-title"},[e._v("Lite")]),a("div",{staticClass:"plan-subtitle"},[e._v("\n            The best way to save and organize online recipes\n          ")]),a("ul",{staticClass:"plan-benefits"},[a("li",[e._v("Save up to 50 recipes")]),a("li",[e._v("Add custom notes, images, and tags")]),a("li",[e._v("Recipe Saver Chrome extension")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plan-left"},[a("div",{staticClass:"plan-title"},[e._v("Full")]),a("div",{staticClass:"plan-subtitle"},[e._v("\n            The ultimate recipe organization tool and more\n          ")]),a("ul",{staticClass:"plan-benefits"},[a("li",[e._v("All the benefits of the Lite plan")]),a("li",[e._v("Save unlimited recipes")]),a("li",[e._v("Share recipes with friends and family")]),a("li",[e._v("Create grocery lists (coming soon!)")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kitchen-image-section"},[a("blockquote",[a("h2",[e._v("Save Any Recipe")]),a("p",[e._v("\n          With Recipe Saver you can add recipes from any site or add your own custom recipes from scratch. You can access them with any device - bring your laptop, mobile or tablet device to the kitchen and follow along with your favorite recipe!\n        ")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"integrations"},[i("h2",[e._v("Chrome Extension Integrations")]),i("ul",[i("li",[i("img",{attrs:{src:a("887c")}})]),i("li",[i("img",{attrs:{src:a("6398")}})]),i("li",[i("img",{attrs:{src:a("9836")}})]),i("li",[i("img",{attrs:{src:a("1df7")}})]),i("li",[i("img",{attrs:{src:a("5db1")}})])]),i("a",{staticClass:"integrations-label",attrs:{href:"https://chrome.google.com/webstore/detail/recipe-saver-extension/opemcijjekbnjccecheklfbflnkoacai",target:"_blank"}},[e._v("Get Chrome Extension")])])}],n=a("c5a6"),r=a("ea9e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"site-preview-box-and-controls"},[i("div",{staticClass:"site-preview-box",class:{detail:!e.listOrImageMode,"full-size":e.hasEngaged},on:{click:function(t){e.hasEngaged=!0}}},[e.listOrImageMode?i("div",{attrs:{id:"list-mode"}},[i("div",{attrs:{id:"heading-and-sort"}},[i("div",{staticClass:"heading"},[e._v("My Recipes")]),i("div",{staticClass:"sort-section"},[i("div",{attrs:{id:"sort"},on:{click:function(t){e.sortVisible=!0}}},[i("span",[e._v("Sort by: ")]),i("span",{attrs:{id:"sort-selection"}},[e._v(e._s(e.sortBy))])]),e.imageView?i("img",{staticClass:"layout-icon list-icon",attrs:{src:a("5d1d")},on:{click:function(t){return e.setListView()}}}):i("img",{staticClass:"layout-icon image-icon",attrs:{src:a("3656")},on:{click:function(t){return e.setImageView()}}})]),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.sortVisible,expression:"sortVisible"}],attrs:{id:"sort-options"}},[i("li",{staticClass:"sort-option",on:{click:function(t){return e.sortRecipes(t,"title","-1")}}},[e._v("a - z")]),i("li",{staticClass:"sort-option",on:{click:function(t){return e.sortRecipes(t,"title","1")}}},[e._v("z - a")]),i("li",{staticClass:"sort-option",on:{click:function(t){return e.sortRecipes(t,"date","1")}}},[e._v("newest")]),i("li",{staticClass:"sort-option",on:{click:function(t){return e.sortRecipes(t,"date","-1")}}},[e._v("oldest")])])]),i("ul",{class:{"image-view":e.imageView},attrs:{id:"recipe-list"}},e._l(e.recipes,function(t){return i("li",{key:t.title,staticClass:"recipe-entry",on:{click:function(a){return e.setDetailView(t.title)}}},[i("img",{attrs:{src:t.image}}),i("span",{staticClass:"recipe-entry-left"},[e._v(e._s(t.title))]),i("span",{staticClass:"recipe-entry-right"},[e._v(e._s(e.formatDate(t.date)))])])}),0)]):i("div",{attrs:{id:"recipe-detail"}},[i("div",{staticClass:"top-bar"},[i("div",{staticClass:"top-bar-icon",on:{click:function(t){return e.toggleFavorite()}}},[e.isFavorite?i("Icon",{attrs:{name:"starFilled"}}):i("Icon",{attrs:{name:"star"}})],1),i("div",{staticClass:"top-bar-icon",on:{click:function(t){return e.closeDetailView()}}},[i("Icon",{attrs:{name:"close"}})],1)]),i("div",{staticClass:"recipe-title"},[e._v(e._s(e.recipe.title))]),i("div",{staticClass:"recipe-url-container"},[i("a",{staticClass:"recipe-url",attrs:{href:e.recipe.url,target:"_blank"}},[e._v(e._s(e.recipe.url))])]),i("ul",{staticClass:"recipe-tags"},e._l(e.recipe.tags,function(t){return i("li",{key:t.name,style:e.backgroundColor(t.color)},[e._v(e._s(t.name))])}),0),i("label",[e._v("Ingredients")]),i("ul",{staticClass:"recipe-ingredients"},e._l(e.recipe.ingredients,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0),i("label",[e._v("Description")]),i("ul",{staticClass:"recipe-description"},e._l(e.recipe.description,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0),i("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})])]),i("div",{staticClass:"site-preview-controls-container"},[i("ul",{staticClass:"site-preview-controls",on:{click:function(t){e.hasEngaged=!0}}},[i("li",{class:{active:"List"===e.activeItem},on:{click:function(t){return e.setListView()}}},[e._v("List View")]),i("li",{class:{active:"Image"===e.activeItem},on:{click:function(t){return e.setImageView()}}},[e._v("Image View")]),i("li",{class:{active:"Detail"===e.activeItem},on:{click:function(t){return e.setDetailView()}}},[e._v("Detail View")]),i("li",{staticClass:"selection"})]),i("div",{staticClass:"site-preview-cta-container"},[i("router-link",{staticClass:"site-preview-cta",attrs:{to:{path:"/login"}}},[e._v("Start Now")])],1)])])},c=[],l=(a("7514"),a("c5f6"),a("55dd"),a("414a")),u=[{title:"Juicy Steakhouse Burgers",date:1565063396975,url:"https://www.onceuponachef.com/recipes/steakhouse-burgers.html",tags:[{name:"dinner",color:"#dec688"},{name:"burgers",color:"#2c77ff"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698146/hjbjokpcofnxrhvzy0zq.jpg",ingredients:["2 pieces white sandwich bread, crusts removed and cut into 1/4-inch pieces","1/3 cup low fat milk","2-1/2 teaspoons kosher salt","1 teaspoon freshly ground black pepper","3 garlic cloves, minced","1-1/2 tablespoons Worcestershire sauce","2 tablespoons ketchup","3 pounds 85% lean ground beef","3 scallions, finely sliced (optional)","Non-flammable cooking spray to grease grill","10 hamburger buns"],description:["Preheat the grill to high heat. In a large bowl, mash the bread and milk together with a fork until it forms a chunky paste. Add the salt, pepper, garlic, Worcestershire sauce and ketchup and mix well.","Add the ground beef and scallions and break the meat up with your hands. Gently mix everything together until just combined. Do not overmix. Divide the mixture into ten equal portions and form loose balls. Flatten the balls into 3/4-inch patties about 4-1/2 inches around. Form a slight depression in the center of each patty to prevent the burgers from puffing up on the grill.","Grease the grill with non-flammable cooking spray. Grill the burgers, covered, until nicely browned on the first side, 2-4 minutes. Flip burgers and continue cooking for a few minutes more until desired doneness is reached. Before serving, toast the buns on the cooler side of the grill if desired."]},{title:"Grilled Corn on the Cob with Garlic Butter",date:1562052210948,url:"https://www.foodnetwork.com/recipes/bobby-flay/grilled-corn-on-the-cob-with-garlic-butter-fresh-lime-and-cotija-cheese-recipe3-2014384",tags:[{name:"side dish",color:"#22da00"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698147/g0paaumulmezk7sqtpyv.jpg",ingredients:["8 ears corn","Garlic butter, recipe follows","1/2 cup grated cotija cheese","4 fresh limes, quartered","2 tablespoons chopped chives, for garnish","2 sticks unsalted butter, slightly softened","8 cloves garlic, peeled and coarsely chopped","1/4 habanero pepper, seeded","1/4 bunch fresh chives","Salt and freshly ground black pepper"],description:["Preheat grill to medium. Peel back the husks of the corn without removing them. Remove the silks and recover the corn with the husk. Soak in large bowl of cold water for 30 minutes. Remove corn from water and shake off excess. Place the corn on the grill, close the cover and grill for 15 to 20 minutes.","Unwrap corn and brush with the garlic butter. Sprinkle with the cotija cheese and squeeze with lime. Sprinkle with chopped chives, to garnish.","Combine butter, garlic, habanero, and chives in a food processor and process until smooth. Season with salt and pepper. Set aside until ready to use."]},{title:"Panna Cotta",date:1561062610948,url:"https://www.epicurious.com/recipes/food/views/panna-cotta-14224",tags:[{name:"dessert ",color:"#6d0873"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698347/h6gordwugdiphbl7cgmi.jpg",ingredients:["1 envelope unflavored gelatin","2 tablespoons cold water","2 cups heavy cream","1 cup half and half","1/3 cup sugar","1 1/2 teaspoons vanilla extract"],description:["In a very small saucepan sprinkle gelatin over water and let stand about 1 minute to soften. Heat gelatin mixture over low heat until gelatin is dissolved and remove pan from heat.","In a large saucepan bring cream, half and half, and sugar just to a boil over moderately high heat, stirring. Remove pan from heat and stir in gelatin mixture and vanilla. Divide cream mixture among eight 1/2-cup ramekins and cool to room temperature. Chill ramekins, covered, at least 4 hours or overnight.","Dip ramekins, 1 at a time, into a bowl of hot water 3 seconds. Run a thin knife around edge of each ramekin and invert ramekin onto center of a small plate."]},{title:"Fluffy Greek Yogurt Pancakes",date:1560062610948,url:"https://www.justataste.com/fluffy-greek-yogurt-pancakes-recipe/",tags:[{name:"breakfast",color:"#ffa500"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698391/l7z3emsswucmkv6mcyy8.jpg",ingredients:["1 cup whole-wheat flour","1 cup all-purpose flour","4 teaspoons baking powder","1/4 teaspoon salt","1 Tablespoon sugar","1 1/2 cups unsweetened almond milk (or any other variety of milk)","2 large eggs","2 teaspoons vanilla extract","1/2 cup plain 2% Greek yogurt","Maple syrup, for serving","Fruit, for serving"],description:["In a large bowl, whisk together the whole-wheat flour, all-purpose flour, baking powder, salt and sugar.","In a small bowl, whisk together the milk, eggs and vanilla extract. Pour the liquid mixture into the flour mixture and stir just until combined. Add the yogurt and stir.","Heat a 12-inch nonstick skillet or griddle over medium heat and spray it well with nonstick cooking spray. Working in batches, spoon a quarter cup of the batter onto the pan for each pancake and cook just until bubbles form around the edges of each pancake, about 3 minutes. Flip and cook for 90 seconds more. Transfer the pancakes to a warm plate. Repeat with the remaining batter.","Serve the pancakes topped with maple syrup and fruit."]},{title:"Avocado on Toast with Lemon Zest",date:1555062610948,url:"https://gimmedelicious.com/2016/07/10/how-to-make-the-best-avocado-toast-with-eggs/",tags:[{name:"breakfast",color:"#ffa500"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1564893337/jursvzqdn2ajcdlnv6ec.jpg",ingredients:["1 avocado peeled and seeded","2 tablespoons chopped cilantro","juice of 1/2 lime","1/2 teaspoon red pepper flakes optional","salt & pepper to taste","2 slices whole grain bread or bread of choice","2 eggs fried, scrambled, or poached, optional"],description:["Toast 2 slices of whole grain in a toaster until golden and crispy.","In a small bowl combine and mash the avocado, cilantro, lime, and salt + pepper to taste. Spread half of the mixture on each slice of toasted bread. Top with fried, scrambled, or poached egg if desired."]},{title:"Dijon Herb Roasted Lamb",date:1550062610948,url:"http://www.thecrepesofwrath.com/2014/05/15/dijon-roasted-rack-lamb/",tags:[{name:"dinner",color:"#dec688"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1564893355/ry6fcpzt4npsbp9nhc2i.jpg",ingredients:["Rack of lamb (about 2 pounds)","2 tablespoons olive oil","3 heaping tablespoons Sir Kensington’s Dijon mustard","1 heaping tablespoon dried thyme","1 heaping tablespoon dried marjoram","1 heaping tablespoon dried tarragon","1 teaspoon kosher salt","fresh cracked pepper to taste"],description:["Preheat your oven to 375 degrees F.","In a small bowl, mix together the Sir Kensington’s Dijon Mustard, thyme, marjoram and tarragon. Set aside.","Score the fat cap on the rack of lamb with a knife in criss cross fashion, being careful not to cut into the meat. This will help the fat cook evenly and prevent the rack from curling up during the cooking process.","Season the lamb with the pepper and salt, then heat your olive oil in a large, heavy-bottomed pan (I used my cast iron pan) over medium-high heat. Sear the lamb on all sides, until light golden, about 4-5 minutes for the top and bottom and 1-2 minutes on the sides, just to get a crust.","Brush the lamb liberally with the mustard mixture, then roast the lamb, bone side down and scored fat side up, for 20-25 minutes or so, until the internal temperature reads 135 degrees F (for medium-rare). Cover the lamb with foil when you remove it from the oven, and allow it to rest for 5 minutes or so before slicing and serving alongside crusty bread and a big, green salad."]},{title:"Eggplant with Spicy Garlic Sauce",date:1541002610948,url:"https://www.kawalingpinoy.com/eggplant-with-spicy-garlic-sauce/",tags:[{name:"dinner",color:"#dec688"},{name:"chinese",color:"#f00f00"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1564893504/qynou8arpuajdyrnbzek.jpg",ingredients:["1/2 cup oil","4 to 5 medium Asian eggplants stems removed and cut into 1 inch pieces","3 tablespoons chili garlic sauce","3 tablespoons soy sauce","2 tablespoons balsamic vinegar","2 tablespoons water","1 teaspoon brown sugar","1 thumb-size ginger peeled and minced","2 green onions stems trimmed and chopped"],description:["In a wide pan over medium heat, heat about 2 tablespoons of oil Add eggplant and cook, stirring occasionally, until lightly browned. Eggplant absorbs plenty of oil, you may need to add more oil a tablespoon at a time during the brief pan-frying. With a slotted spoon, remove from pan and drain on paper towels.","In a bowl, combine chili garlic sauce, soy sauce, balsamic vinegar, water and brown sugar. Whisk together until blended.","Remove excess oil from wok, leaving just enough to coat base. Heat over medium heat. Add ginger and cook, stirring regularly, until fragrant. Add eggplants and green onions and cook, stirring regularly, for about 1 minute. Add chili garlic sauce mixture and bring to a boil. Continue to cook for about 2 to 3 minutes or until sauce is reduced. Season with salt to taste. Serve hot."]},{title:"Roasted Pork Belly",date:1535252610948,url:"https://cookinginsens.wordpress.com/2012/02/17/roasted-pork-belly/",tags:[{name:"lunch",color:"#9e5f01"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1564893332/akepkkrhkbgwbbtk33zd.jpg",ingredients:["5 lb pork belly, skin on","1 tsp red wine vinegar","Salt","Sea salt flakes or fleur de sel","6 sprigs fresh or dried thyme","6 garlic cloves in skin, crushed","5 shallots, sliced vertically","1 1/2 cup hard cider"],description:["Score the pork belly skin at 1/2 inch intervals. Rub with the wine vinegar and refrigerate for 2 hours uncovered. Rub some salt into the cracks of the skin, then sprinkle with sea salt flakes.","Place the garlic, thyme and shallots on the bottom of a roasting pan and put the pork on top. Put the roasting pan in a preheated 450 degrees F oven for 20 minutes.","Pour in the cider, being careful not to wet the pork.  Reduce the oven temperature to 350 degrees F and continue to roast for 3 hours until the skin is as crispy as it’s going to get."]},{title:"Roasted Sweet Potato Wedges",date:1530062610948,url:"https://www.cookingchanneltv.com/recipes/tia-mowry/roasted-sweet-potato-wedges-3242778",tags:[{name:"side dish",color:"#22da00"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698444/r1p0uyvzbmldmesixbms.jpg",ingredients:["3 sweet potatoes (about 2 1/2 pounds), cut into 1/2-inch wedges","2 tablespoons coconut oil","1 teaspoon chili powder","1 teaspoon ground cinnamon","1 teaspoon garlic powder","1 teaspoon kosher salt","1/2 teaspoon freshly ground black pepper","Juice of 1/2 lime","1/4 cup fresh parsley, chopped"],description:["Preheat the oven to 425 degrees F. Line 2 baking sheets with parchment paper.","Add the potato wedges and oil to a large bowl and toss well to coat. Sprinkle with the chili powder, cinnamon, garlic powder, salt, pepper and lime juice and toss until the wedges are coated.","Put the wedges about an inch apart on the prepared baking sheets. Roast for 15 minutes, then remove the baking sheets from the oven and flip the wedges over. Roast until cooked through, another 10 minutes. Transfer to a serving platter, sprinkle with the parsley and serve."]},{title:"Red Velvet-Coconut Biscotti",date:1515062610948,url:"https://www.allrecipes.com/recipe/269403/red-velvet-coconut-biscotti",tags:[{name:"dessert",color:"#6d0873"},{name:"cookies",color:"#ff05d6"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698149/ldkx63yfumttvroze4wh.jpg",ingredients:["1 (16.5 ounce) package red velvet cake mix","1 1/4 cups all-purpose flour","3 eggs","1/4 cup vegetable oil","1 1/2 cups sweetened flaked coconut","1 (12 ounce) package white chocolate chips","1 tablespoon shortening"],description:["Preheat the oven to 350 degrees F (175 degrees C). Line 2 baking sheets with parchment paper.","Combine cake mix, flour, eggs, and oil in a large bowl; beat using an electric mixer until smooth and creamy. Fold in flaked coconut. Divide dough in half. Shape each portion into a 4 1/2x12-inch log and place onto a prepared baking sheet.","Bake in the preheated oven until firm, about 25 minutes. Remove from oven and reduce oven temperature to 310 degrees F (155 degrees C). Place loaves onto wire racks until cool enough to handle, about 5 minutes, retaining parchment on baking sheets.","Slice logs into 1/2-inch slices and place biscotti onto the prepared baking sheets.","Bake in the hot oven for 8 minutes, turn, and bake until dry, about 8 more minutes. Remove and place onto wire racks to cool completely.","Place white chocolate in the top of a double boiler over simmering water. Stir frequently, scraping down the sides with a rubber spatula to avoid scorching, until chocolate is melted, about 5 minutes. Stir in shortening to thin out chocolate.","Drizzle white chocolate over cooled biscotti and let dry, about 1 hour."]},{title:"Tartine with Grilled Peaches",date:1505062610948,url:"https://www.youtube.com/watch?v=aX3f9u88FTo",tags:[{name:"lunch",color:"#9e5f01"},{name:"sandwich",color:"#000000"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698149/dgjiketcop7kexsyousp.jpg",ingredients:["Sourdough Bread","Fresh Goat cheese","Peaches","Spring onions","Olive oil"],description:["Cut the onions and gently sautee them for 3-5 minutes on each side. Cut the peach into thick slices. Cook each slice with oil and a bit of salt. Grill them for about 2 minutes on each side.","Slice the bread and place on a hot griddle pan for about 2 minutes, each side. Rub the toast with an onion. Smear the bread with a layer of goat cheese. Add peaches, onions, and sesame and black pepper. Enjoy"]},{title:"Black Bean and Corn Jalapeño Poppers",date:1501062610948,url:"https://www.tablespoon.com/recipes/black-bean-and-corn-jalapeno-poppers/532038c6-24e1-4af0-9968-1b1c91350390",tags:[{name:"lunch",color:"#9e5f01"},{name:"snack",color:"#00c5ff"}],image:"https://res.cloudinary.com/dormh2fvt/image/upload/v1566698150/uwp7ofyk4h2salbjolen.jpg",ingredients:["1 package (8 oz) cream cheese, softened","1/2 cup Progresso black beans (from 15-oz can), drained, rinsed","1/2 cup canned (drained) or frozen (thawed) whole kernel sweet corn","1/2 cup Progresso plain panko crispy bread crumbs","1/4 cup finely shredded Mexican 4-cheese blend (1 oz)","2 tablespoons butter, melted","8 medium (about 3 inch) jalapeño chiles, halved lengthwise, seeded","1 tablespoon chopped fresh cilantro leaves"],description:["Heat oven to 350°F. Spray cookie sheet with cooking spray. In small bowl, mix cream cheese, beans and corn. In another small bowl, mix bread crumbs, Mexican cheese blend and melted butter.","Divide cream cheese mixture evenly among jalapeño chile halves. Place on cookie sheet. Sprinkle chiles with bread crumb mixture; gently press into cream cheese mixture.","Bake 28 to 32 minutes or until tops are light golden brown and chiles are tender. Sprinkle with cilantro. Serve warm."]}],d=u,p={name:"site-preview-box",components:{Icon:n["a"]},mixins:[l["a"]],data:function(){return{listOrImageMode:!0,imageView:!1,isFavorite:!1,activeItem:"List",sortVisible:!1,sortBy:"Newest",recipes:d,recipe:{},hasEngaged:!1}},methods:{sortRecipes:function(e,t,a){this.sortVisible=!1,this.sortBy=e.target.innerText,this.recipes.sort(function(e,i){var o=-1==a?1:-1,n=e[t],r=i[t];return"title"===t&&(n=n.toLowerCase(),r=r.toLowerCase()),n<r?Number(a):n>r?Number(o):0})},toggleFavorite:function(){this.isFavorite=!this.isFavorite},setListView:function(){this.setActiveItem("List"),this.listOrImageMode=!0,this.imageView=!1},setImageView:function(){this.setActiveItem("Image"),this.listOrImageMode=!0,this.imageView=!0},setDetailView:function(e){this.setActiveItem("Detail"),this.listOrImageMode=!1,this.recipe=e?this.recipes.find(function(t){return t.title===e}):this.recipes[0]},closeDetailView:function(){this.imageView?this.setImageView():this.setListView()},setActiveItem:function(e){this.activeItem=e;var t=-124;switch(e){case"List":t=-124;break;case"Image":t=-83;break;case"Detail":t=-42;break}document.querySelector(".site-preview-controls li.selection").style="    transform: translateY(".concat(t,"px);")}},created:function(){var e=this;document.addEventListener("click",function(t){var a=t.target.closest("#sort-options")||t.target.closest("#sort")||t.target.matches("#sort");a||(e.sortVisible=!1)})}},h=p,g=(a("535d"),a("2877")),f=Object(g["a"])(h,s,c,!1,null,null,null),m=f.exports,v=a("fd2d"),b={name:"home",components:{Icon:n["a"],HeaderNonApp:r["a"],SitePreviewBox:m,Footer:v["a"]},methods:{scrollToPlans:function(){console.log("scrolling",document.querySelector(".plans")),document.querySelector(".plans").scrollIntoView({behavior:"smooth"})}},beforeCreate:function(){document.body.className="home"}},w=b,k=(a("dbc2"),Object(g["a"])(w,i,o,!1,null,null,null));t["default"]=k.exports},"5d1d":function(e,t,a){e.exports=a.p+"img/layout-list-icon.78dd3282.svg"},"5db1":function(e,t,a){e.exports=a.p+"img/integration-tasty.329c7dfe.png"},"5dbc":function(e,t,a){var i=a("d3f4"),o=a("8b97").set;e.exports=function(e,t,a){var n,r=t.constructor;return r!==a&&"function"==typeof r&&(n=r.prototype)!==a.prototype&&i(n)&&o&&o(e,n),e}},"5f1b":function(e,t,a){"use strict";var i=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var n=a.call(e,t);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},6398:function(e,t,a){e.exports=a.p+"img/integration-chowhound.9cc75a9d.png"},7514:function(e,t,a){"use strict";var i=a("5ca1"),o=a("0a49")(5),n="find",r=!0;n in[]&&Array(1)[n](function(){r=!1}),i(i.P+i.F*r,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},"7f7f":function(e,t,a){var i=a("86cc").f,o=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in o||a("9e1e")&&i(o,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},"887c":function(e,t,a){e.exports=a.p+"img/integration-allrecipes.3405492e.png"},"8b97":function(e,t,a){var i=a("d3f4"),o=a("cb7c"),n=function(e,t){if(o(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:i(e,a),e}}({},!1):void 0),check:n}},9093:function(e,t,a){var i=a("ce10"),o=a("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,o)}},9836:function(e,t,a){e.exports=a.p+"img/integration-foodnetwork.7f86ea3a.png"},"9e6c":function(e,t,a){},a481:function(e,t,a){"use strict";var i=a("cb7c"),o=a("4bf8"),n=a("9def"),r=a("4588"),s=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,f){return[function(i,o){var n=e(this),r=void 0==i?void 0:i[t];return void 0!==r?r.call(i,n,o):a.call(String(n),i,o)},function(e,t){var o=f(a,e,this,t);if(o.done)return o.value;var d=i(e),p=String(this),h="function"===typeof t;h||(t=String(t));var v=d.global;if(v){var b=d.unicode;d.lastIndex=0}var w=[];while(1){var k=c(d,p);if(null===k)break;if(w.push(k),!v)break;var y=String(k[0]);""===y&&(d.lastIndex=s(p,n(d.lastIndex),b))}for(var C="",x=0,_=0;_<w.length;_++){k=w[_];for(var S=String(k[0]),I=l(u(r(k.index),p.length),0),j=[],A=1;A<k.length;A++)j.push(g(k[A]));var E=k.groups;if(h){var R=[S].concat(j,I,p);void 0!==E&&R.push(E);var F=String(t.apply(void 0,R))}else F=m(S,p,I,j,E,t);I>=x&&(C+=p.slice(x,I)+F,x=I+S.length)}return C+p.slice(x)}];function m(e,t,i,n,r,s){var c=i+e.length,l=n.length,u=h;return void 0!==r&&(r=o(r),u=p),a.call(s,u,function(a,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(c);case"<":s=r[o.slice(1,-1)];break;default:var u=+o;if(0===u)return a;if(u>l){var p=d(u/10);return 0===p?a:p<=l?void 0===n[p-1]?o.charAt(1):n[p-1]+o.charAt(1):a}s=n[u-1]}return void 0===s?"":s})}})},aa77:function(e,t,a){var i=a("5ca1"),o=a("be13"),n=a("79e5"),r=a("fdef"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,a){var o={},s=n(function(){return!!r[e]()||c[e]()!=c}),l=o[e]=s?t(p):r[e];a&&(o[a]=l),i(i.P+i.F*s,"String",o)},p=d.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},b0c5:function(e,t,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c5f6:function(e,t,a){"use strict";var i=a("7726"),o=a("69a8"),n=a("2d95"),r=a("5dbc"),s=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,h="Number",g=i[h],f=g,m=g.prototype,v=n(a("2aeb")(m))==h,b="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():p(t,3);var a,i,o,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+t}for(var r,c=t.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>o)return NaN;return parseInt(c,i)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof g&&(v?c(function(){m.valueOf.call(a)}):n(a)!=h)?r(new f(w(t)),a,g):w(t)};for(var k,y=a("9e1e")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)o(f,k=y[C])&&!o(g,k)&&d(g,k,u(f,k));g.prototype=m,m.constructor=g,a("2aba")(i,h,g)}},cd1c:function(e,t,a){var i=a("e853");e.exports=function(e,t){return new(i(e))(t)}},dbc2:function(e,t,a){"use strict";var i=a("ea59"),o=a.n(i);o.a},e853:function(e,t,a){var i=a("d3f4"),o=a("1169"),n=a("2b4c")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),i(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}},ea59:function(e,t,a){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-9a02ba5e.6268159c.js.map
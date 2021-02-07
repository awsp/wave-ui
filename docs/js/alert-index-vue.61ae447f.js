(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["alert-index-vue","alert-api-vue","alert-examples-vue"],{"4e83":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"w-divider my12"}),r("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),r("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),r("component-api",{attrs:{items:e.slots,title:"Slots"}}),r("component-api",{attrs:{items:e.events,title:"Events"}})],1)},s=[],i=(r("13d5"),r("f899")),l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the alert. Any truthy value will show the alert whereas any falsy value will hide it.',color:'Applies a color to the alert\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the alert\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the alert container.",tile:"Removes the default border-radius and sets sharp edges on the alert container.",round:"Sets a maximum border-radius on the corners of the alert container, giving it a round look.",icon:"Provide a custom icon string (e.g. <code>mdi mdi-star</code>) to display on the left of the alert message.",iconOutside:"If an icon is provided, this option changes the style and displays the icon on the left border.",plain:'Emphasizes a "typed" alert (one of <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>) by applying a white text color and a full opacity background of the chosen type color.',dismiss:"Adds a close button (cross icon) on the right in the alert. Clicking on this button hides the alert.",success:"Sets the type of the alert, applying the <code>success</code> class (green color) and adding a success icon on the left in the alert.",info:"Sets the type of the alert, applying the <code>info</code> class (blue color) and adding an info icon on the left in the alert.",warning:"Sets the type of the alert, applying the <code>warning</code> class (orange color) and adding a warning icon on the left in the alert.",error:"Sets the type of the alert, applying the <code>error</code> class (red color) and adding an error icon on the left in the alert.",xs:"Sets the size of the alert.",sm:"Sets the size of the alert.",md:"Sets the size of the alert.",lg:"Sets the size of the alert.",xl:"Sets the size of the alert.",noBorder:"Removes the default border from the alert container.",borderLeft:"Adds a left border on the alert. Only one side-border can be applied at the same time.",borderRight:"Adds a right border on the alert. Only one side-border can be applied at the same time.",borderTop:"Adds a top border on the alert. Only one side-border can be applied at the same time.",borderBottom:"Adds a bottom border on the alert. Only one side-border can be applied at the same time.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set."},o={content:{description:"The alert content."}},n={input:"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on alert dismiss/hide.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on alert dismiss/hide."},c={data:function(){return{propsDescs:l,slots:o}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(e,t){return(e[t]={description:n[t]||""})&&e}),{})}}},d=c,h=r("2877"),w=Object(h["a"])(d,a,s,!1,null,null,null);t["default"]=w.exports},d162:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"max-width":"1000px"}},[r("title-link",{attrs:{h2:"",slug:"show-and-hide-with-v-model"}},[e._v("Show / hide with v-model")]),e._m(0),r("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button\n  @click="showAlert = !showAlert"\n  color="primary"\n  outline>\n  '+e._s(e.showAlert?"Hide":"Show")+' alert\n</w-button>\n\n<w-transition-expand y>\n  <w-alert v-if="showAlert" color="success">\n    The alert is now visible.\n  </w-alert>\n</w-transition-expand>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showAlert: false\n})\n")]},proxy:!0}])},[r("w-button",{attrs:{color:"primary",outline:""},on:{click:function(t){e.showAlert=!e.showAlert}}},[e._v(e._s(e.showAlert?"Hide":"Show")+" alert")]),r("w-transition-expand",{attrs:{y:""}},[e.showAlert?r("w-alert",{attrs:{color:"success"}},[e._v("The alert is now visible.")]):e._e()],1)],1),r("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(1),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert color="primary">\n  This is an alert with a primary color.\n</w-alert>\n\n<w-alert bg-color="primary" color="white">\n  This is an alert with a primary background color.\n</w-alert>\n\n<w-alert color="pink">\n  This is an alert with a pink color.\n</w-alert>\n\n<w-alert bg-color="pink" color="white">\n  This is an alert with a pink background color.\n</w-alert>\n\n<p>\n  You can even mix different colors and background colors.\n</p>\n\n<w-alert bg-color="purple" color="cyan-light4">\n  This is an alert with a purple background and cyan color.\n</w-alert>\n\n<w-alert bg-color="cyan-light4" color="purple">\n  This is an alert with a cyan background and purple color.\n</w-alert>\n')]},proxy:!0}])},[r("w-alert",{attrs:{color:"primary"}},[e._v("This is an alert with a primary color.")]),r("w-alert",{attrs:{"bg-color":"primary",color:"white"}},[e._v("This is an alert with a primary background color.")]),r("w-alert",{attrs:{color:"pink"}},[e._v("This is an alert with a pink color.")]),r("w-alert",{attrs:{"bg-color":"pink",color:"white"}},[e._v("This is an alert with a pink background color.")]),r("p",[e._v("You can even mix different colors and background colors.")]),r("w-alert",{attrs:{"bg-color":"purple",color:"cyan-light4"}},[e._v("This is an alert with a purple background and cyan color.")]),r("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple"}},[e._v("This is an alert with a cyan background and purple color.")])],1),r("title-link",{attrs:{h2:"",slug:"types"}},[e._v("Types (adds an icon)")]),r("h3",[e._v("Normal")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-alert success>This is a success alert.</w-alert>\n<w-alert warning>This is a warning alert.</w-alert>\n<w-alert error>This is an error alert.</w-alert>\n<w-alert info>This is an info alert.</w-alert>\n")]},proxy:!0}])},[r("w-alert",{attrs:{success:""}},[e._v("This is a success alert.")]),r("w-alert",{attrs:{warning:""}},[e._v("This is a warning alert.")]),r("w-alert",{attrs:{error:""}},[e._v("This is an error alert.")]),r("w-alert",{attrs:{info:""}},[e._v("This is an info alert.")])],1),r("h3",[e._v("Plain")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v("<w-alert success plain>This is a success alert.</w-alert>\n<w-alert warning plain>This is a warning alert.</w-alert>\n<w-alert error plain>This is an error alert.</w-alert>\n<w-alert info plain>This is an info alert.</w-alert>\n")]},proxy:!0}])},[r("w-alert",{attrs:{success:"",plain:""}},[e._v("This is a success alert.")]),r("w-alert",{attrs:{warning:"",plain:""}},[e._v("This is a warning alert.")]),r("w-alert",{attrs:{error:"",plain:""}},[e._v("This is an error alert.")]),r("w-alert",{attrs:{info:"",plain:""}},[e._v("This is an info alert.")])],1),r("title-link",{attrs:{h2:""}},[e._v("Custom icon")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert\n  bg-color="yellow-light5"\n  color="amber"\n  icon="wi-star">\n  This is an alert with a custom icon.\n</w-alert>\n')]},proxy:!0}])},[r("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"wi-star"}},[e._v("This is an alert with a custom icon.")])],1),r("title-link",{attrs:{h2:""}},[e._v("Icon outside")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert success icon-outside>This is a success alert.</w-alert>\n<w-alert warning icon-outside>This is a warning alert.</w-alert>\n<w-alert error icon-outside>This is an error alert.</w-alert>\n<w-alert info icon-outside>This is an info alert.</w-alert>\n<w-alert\n  bg-color="yellow-light5"\n  color="amber"\n  icon="mdi mdi-star-circle"\n  icon-outside>\n  This is an alert with a custom icon.\n</w-alert>\n')]},proxy:!0}])},[r("w-alert",{attrs:{success:"","icon-outside":""}},[e._v("This is a success alert.")]),r("w-alert",{attrs:{warning:"","icon-outside":""}},[e._v("This is a warning alert.")]),r("w-alert",{attrs:{error:"","icon-outside":""}},[e._v("This is an error alert.")]),r("w-alert",{attrs:{info:"","icon-outside":""}},[e._v("This is an info alert.")]),r("w-alert",{attrs:{"bg-color":"yellow-light5",color:"amber",icon:"mdi mdi-star-circle","icon-outside":""}},[e._v("This is an alert with a custom icon.")])],1),r("title-link",{attrs:{h2:""}},[e._v("Outline")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert color="primary" outline>This is a normal alert with a primary color.</w-alert>\n<w-alert success outline>This is a success alert.</w-alert>\n<w-alert warning outline>This is a warning alert.</w-alert>\n<w-alert error outline>This is an error alert.</w-alert>\n<w-alert info outline>This is an info alert.</w-alert>\n')]},proxy:!0}])},[r("w-alert",{attrs:{color:"primary",outline:""}},[e._v("This is a normal alert with a primary color.")]),r("w-alert",{attrs:{success:"",outline:""}},[e._v("This is a success alert.")]),r("w-alert",{attrs:{warning:"",outline:""}},[e._v("This is a warning alert.")]),r("w-alert",{attrs:{error:"",outline:""}},[e._v("This is an error alert.")]),r("w-alert",{attrs:{info:"",outline:""}},[e._v("This is an info alert.")])],1),r("title-link",{attrs:{h2:""}},[e._v("Borders")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert success light no-border>This is a success alert with no border.</w-alert>\n<w-alert color="primary" no-border>This is a normal alert with no border.</w-alert>\n<w-alert\n  bg-color="cyan-light4"\n  color="purple"\n  no-border>\n  This is an alert with a cyan background, purple color and no border.\n</w-alert>\n<div class="w-flex wrap ma-2">\n  <w-alert\n    class="grow ma2"\n    color="primary"\n    border-left>\n    This is a normal alert with a left border.\n  </w-alert>\n  <w-alert\n    class="grow ma2"\n    color="primary"\n    border-right>\n    This is a normal alert with a right border.\n  </w-alert>\n</div>\n<div class="w-flex wrap mx-2 mt2">\n  <w-alert\n    class="grow ma2"\n    color="primary"\n    border-top>\n    This is a normal alert with a top border.\n  </w-alert>\n  <w-alert\n    class="grow ma2"\n    color="primary"\n    border-bottom>\n    This is a normal alert with a left border.\n  </w-alert>\n</div>\n')]},proxy:!0}])},[r("w-alert",{attrs:{success:"",light:"","no-border":""}},[e._v("This is a success alert with no border.")]),r("w-alert",{attrs:{color:"primary","no-border":""}},[e._v("This is a normal alert with no border.")]),r("w-alert",{attrs:{"bg-color":"cyan-light4",color:"purple","no-border":""}},[e._v("This is an alert with a cyan background, purple color and no border.")]),r("div",{staticClass:"w-flex wrap ma-2"},[r("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-left":""}},[e._v("This is a normal alert with a left border.")]),r("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-right":""}},[e._v("This is a normal alert with a right border.")])],1),r("div",{staticClass:"w-flex wrap mx-2 mt2"},[r("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-top":""}},[e._v("This is a normal alert with a top border.")]),r("w-alert",{staticClass:"grow ma2",attrs:{color:"primary","border-bottom":""}},[e._v("This is a normal alert with a left border.")])],1)],1),r("title-link",{attrs:{h2:""}},[e._v("Tile, round & shadow")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert color="primary" tile>This is a tile alert.</w-alert>\n<w-alert color="primary" round>This is a round alert.</w-alert>\n<w-alert color="primary" shadow>This is a normal alert with a shadow.</w-alert>\n')]},proxy:!0}])},[r("w-alert",{attrs:{color:"primary",tile:""}},[e._v("This is a tile alert.")]),r("w-alert",{attrs:{color:"primary",round:""}},[e._v("This is a round alert.")]),r("w-alert",{attrs:{color:"primary",shadow:""}},[e._v("This is a normal alert with a shadow.")])],1),r("title-link",{attrs:{h2:""}},[e._v("Dismiss")]),r("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert\n  v-model="dismissible1"\n  color="primary"\n  dismiss>\n  This is a dismissible alert.\n</w-alert>\n<w-alert\n  v-model="dismissible2"\n  dismiss\n  error>\n  This is a dismissible error type alert.\n</w-alert>\n<w-alert\n  v-model="dismissible3"\n  color="amber"\n  dismiss\n  round>\n  This is a dismissible round alert.\n</w-alert>\n<w-button\n  bg-color="primary"\n  @click="dismissible1 = dismissible2 = dismissible3 = true"\n  :disabled="dismissible1 && dismissible2 && dismissible3">\n  Reset alerts\n</button>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dismissible1: true,\n  dismissible2: true,\n  dismissible3: true\n})\n")]},proxy:!0}])},[r("w-alert",{staticClass:"mt0 mb2",attrs:{color:"primary",dismiss:""},model:{value:e.dismissible1,callback:function(t){e.dismissible1=t},expression:"dismissible1"}},[e._v("This is a dismissible alert.")]),r("w-alert",{staticClass:"my2",attrs:{dismiss:"",error:""},model:{value:e.dismissible2,callback:function(t){e.dismissible2=t},expression:"dismissible2"}},[e._v("This is a dismissible error type alert.")]),r("w-alert",{staticClass:"my2",attrs:{color:"amber",dismiss:"",round:""},model:{value:e.dismissible3,callback:function(t){e.dismissible3=t},expression:"dismissible3"}},[e._v("This is a dismissible round alert.")]),r("w-button",{staticClass:"mt2",attrs:{"bg-color":"primary",disabled:e.dismissible1&&e.dismissible2&&e.dismissible3},on:{click:function(t){e.dismissible1=e.dismissible2=e.dismissible3=!0}}},[e._v("Reset alerts")])],1),r("title-link",{attrs:{h2:""}},[e._v("Sizes")]),r("example",{attrs:{"content-class":"py0"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-alert class="size--xs" color="info" success>This is an extra small alert.</w-alert>\n<w-alert class="size--sm" color="info" success>This is a small alert.</w-alert>\n<w-alert class="size--md" color="info" success>This is a medium alert.</w-alert>\n<w-alert class="size--lg" color="info" success>This is a large alert.</w-alert>\n<w-alert class="size--xl" color="info" success>This is an extra large alert.</w-alert>')]},proxy:!0}])},[r("w-alert",{staticClass:"size--xs",attrs:{color:"info",success:""}},[e._v("This is an extra small alert.")]),r("w-alert",{staticClass:"size--sm",attrs:{color:"info",success:""}},[e._v("This is a small alert.")]),r("w-alert",{staticClass:"size--md",attrs:{color:"info",success:""}},[e._v("This is a medium alert.")]),r("w-alert",{staticClass:"size--lg",attrs:{color:"info",success:""}},[e._v("This is a large alert.")]),r("w-alert",{staticClass:"size--xl",attrs:{color:"info",success:""}},[e._v("This is an extra large alert.")])],1)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("By default alerts are visible, but if a value or v-model is provided,\nit will show or hide according to it."),r("br"),e._v("\nLike in this example you can add a transition to animate its apparition.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Like in most components, you can apply a color to the text with the "),r("code",[e._v("color")]),e._v(" attribute,\nand a color to the background with the "),r("code",[e._v("bg-color")]),e._v(" attribute.")])}],i={data:function(){return{showAlert:!1,dismissible1:!0,dismissible2:!0,dismissible3:!0}}},l=i,o=r("2877"),n=Object(o["a"])(l,a,s,!1,null,null,null);t["default"]=n.exports},e4cf:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("ui-component-title",[e._v("w-alert")]),r("examples"),r("api")],1)},s=[],i=r("d162"),l=r("4e83"),o={components:{Examples:i["default"],Api:l["default"]}},n=o,c=r("2877"),d=Object(c["a"])(n,a,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=alert-index-vue.61ae447f.js.map
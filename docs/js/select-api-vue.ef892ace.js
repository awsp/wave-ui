(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["select-api-vue"],{"0a8b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"w-divider my12"}),i("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),i("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),i("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),i("api",{attrs:{items:e.slots,title:"Slots"}}),i("api",{attrs:{items:e.events,title:"Events"}})],1)},a=[],n=(i("13d5"),i("5530")),r=i("c0bc"),o=i("12fd"),l={items:"",value:"",multiple:"",placeholder:"",label:"",labelPosition:"",innerIconLeft:"",innerIconRight:"",staticLabel:"",itemLabel:"",itemValue:"",itemClass:"",menuClass:"",color:"",bgColor:"",outline:"",round:"",shadow:"",tile:"",dark:"",returnObject:"",name:"",disabled:"",readonly:"",required:"",validators:""},c={default:{description:"The label content, if the label prop is not flexible enough."},selection:{description:"Provide a custom template for the selection string.<br>This slot provides the parameter <code>item</code> containing the selected item(s) object(s). It may be an array if <code>multiple</code> is true, or a single object otherwise."},item:{description:"Provide a common custom template for all the list items.<br>This slot provides the parameter <code>item</code> containing the current item object."}},d={input:"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 2.x only.<br>The new selected value(s) is/are passed as a parameter.","update:modelValue":"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 3 only.<br>The new selected value(s) is/are passed as a parameter.",focus:"Emitted on select focus. The focus DOM event is returned as a parameter.",blur:"Emitted on select blur. The blur DOM event is returned as a parameter.","click:inner-icon-left":"Emitted on click of the left inner icon, if any.","click:inner-icon-right":"Emitted on click of the right inner icon, if any."},u={data:function(){return{propsDescs:l,slots:c}},computed:{props:function(){return Object(n["a"])(Object(n["a"])({},o["a"].props),r["a"].props)},events:function(){return o["a"].emits.reduce((function(e,t){return(e[t]={description:d[t]||""})&&e}),{})}}},p=u,m=i("2877"),h=Object(m["a"])(p,s,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=select-api-vue.ef892ace.js.map
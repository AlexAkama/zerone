webpackJsonp([9],{cxj3:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("Xxa5"),r=t.n(s),i=t("exGp"),n=t.n(i),l=t("Dd8w"),c=t.n(l),o=t("NYxO"),d=t("+cKO"),m=t("TYx6"),u=t("i53X"),v=t("/QaM"),f=t("znC5"),p=t("a2KH"),h={name:"ConfirmField",props:{value:{type:Boolean,default:""},v:{type:Object,required:!0},id:{type:String,required:!0}},computed:{confirm:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},_={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form__group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm,expression:"confirm"}],staticClass:"form__checkbox",class:{invalid:e.v.$dirty&&!e.v.sameAs},attrs:{type:"checkbox",name:"confirm",id:e.id},domProps:{checked:Array.isArray(e.confirm)?e._i(e.confirm,null)>-1:e.confirm},on:{change:function(a){var t=e.confirm,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i=e._i(t,null);s.checked?i<0&&(e.confirm=t.concat([null])):i>-1&&(e.confirm=t.slice(0,i).concat(t.slice(i+1)))}else e.confirm=r}}}),t("label",{staticClass:"form__checkbox-label",attrs:{for:e.id}},[e._v("Я согласен с "),t("a",{attrs:{href:"#"}},[e._v("полит. конф-ти ")]),e._v("и передачей "),t("a",{attrs:{href:"#"}},[e._v("перс. данных")])])])},staticRenderFns:[]},g=t("VU/8")(h,_,!1,null,null,null).exports,b={name:"Registration",components:{PasswordField:m.a,EmailField:v.a,NameField:f.a,NumberField:p.a,ConfirmField:g,PasswordRepeatField:u.a},data:function(){return{email:"",passwd1:"",passwd2:"",firstName:"",lastName:"",confirm:!1}},computed:c()({},Object(o.c)("auth/api",["validCaptcha"])),methods:c()({},Object(o.b)("auth/api",["register","login","confirmCaptcha"]),{submitHandler:function(){var e=this;return n()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.$v.$invalid){a.next=3;break}return e.$v.$touch(),a.abrupt("return");case 3:setTimeout(function(){var a=e.email,t=e.passwd1,s=e.passwd2,r=e.firstName,i=e.lastName;e.register({email:a,passwd1:t,passwd2:s,firstName:r,lastName:i,data:{success:!0}}).then(function(){e.$router.push({name:"RegisterSuccess"})})},1e3);case 4:case"end":return a.stop()}},a,e)}))()}}),validations:{email:{required:d.required,email:d.email},passwd1:{required:d.required,minLength:Object(d.minLength)(8)},passwd2:{required:d.required,minLength:Object(d.minLength)(8),sameAsPassword:Object(d.sameAs)("passwd1")},firstName:{required:d.required,minLength:Object(d.minLength)(3),maxLength:Object(d.maxLength)(25)},lastName:{required:d.required,minLength:Object(d.minLength)(3),maxLength:Object(d.maxLength)(25)}}},w={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"registration"},[t("form",{staticClass:"registration__form",on:{submit:function(a){return a.preventDefault(),e.submitHandler(a)}}},[t("div",{staticClass:"form__block"},[t("h4",{staticClass:"form__subtitle"},[e._v("Аккаунт")]),t("email-field",{class:{checked:e.$v.email.required&&e.$v.email.email},attrs:{id:"register-email",v:e.$v.email},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("password-field",{class:{checked:e.$v.passwd1.required&&e.$v.passwd2.sameAsPassword&&e.$v.passwd1.minLength},attrs:{id:"register-password",v:e.$v.passwd1,info:"info",registration:"registration"},model:{value:e.passwd1,callback:function(a){e.passwd1=a},expression:"passwd1"}}),t("password-repeat-field",{class:{checked:e.$v.passwd1.required&&e.$v.passwd2.sameAsPassword&&e.$v.passwd2.minLength},attrs:{id:"register-repeat-password",v:e.$v.passwd2},model:{value:e.passwd2,callback:function(a){e.passwd2=a},expression:"passwd2"}})],1),t("div",{staticClass:"form__block"},[t("h4",{staticClass:"form__subtitle"},[e._v("Личные данные")]),t("name-field",{attrs:{id:"register-firstName",v:e.$v.firstName},model:{value:e.firstName,callback:function(a){e.firstName=a},expression:"firstName"}}),t("name-field",{attrs:{id:"register-lastName",v:e.$v.lastName,label:"Фамилия"},model:{value:e.lastName,callback:function(a){e.lastName=a},expression:"lastName"}})],1),t("div",{staticClass:"registration__action"},[t("button-hover",{attrs:{tag:"button",type:"submit",variant:"white"}},[e._v("Зарегистрироваться")])],1),t("div",{attrs:{id:"regcap"}})])])},staticRenderFns:[]};var $=t("VU/8")(b,w,!1,function(e){t("gH3q")},null,null);a.default=$.exports},gH3q:function(e,a){},znC5:function(e,a,t){"use strict";var s={name:"EmailField",props:{value:{type:String,default:""},v:{type:Object,required:!0},label:{type:String,default:"Имя"},id:{type:String,required:!0}},computed:{name:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form__group",class:{fill:e.name.length>0}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form__input",class:{invalid:e.v.$dirty&&!e.v.required||e.v.$dirty&&!e.v.minLength},attrs:{id:e.id,name:"name"},domProps:{value:e.name},on:{change:function(a){return e.v.$touch()},input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("label",{staticClass:"form__label",attrs:{for:e.id}},[e._v(e._s(e.label))]),e.v.$dirty&&!e.v.required?t("span",{staticClass:"form__error"},[e._v("Обязательно поле")]):e.v.$dirty&&!e.v.minLength?t("span",{staticClass:"form__error"},[e._v("Введено слишком мало символов")]):e.v.$dirty&&!e.v.maxLength?t("span",{staticClass:"form__error"},[e._v("Превышено максимальное количество символов")]):e._e()])},staticRenderFns:[]},i=t("VU/8")(s,r,!1,null,null,null);a.a=i.exports}});
//# sourceMappingURL=9.7a8a52cb3f1213ed3762.js.map
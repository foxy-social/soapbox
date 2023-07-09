"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[32],{1173:function(e,a,t){t.r(a),t(11),t(12),t(9),t(16),t(4),t(7),t(18),t(19),t(10);var s=t(1202),r=t(1188),i=t(2111),l=(t(0),t(25),t(237),t(1)),o=t(2121),d=t(2122),c=t(223),n=t(2),u=t(3),f=t(34);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){(0,r.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b=(0,o.vU)({header:{id:"edit_email.header",defaultMessage:"Change Email"},updateEmailSuccess:{id:"security.update_email.success",defaultMessage:"Email successfully updated."},updateEmailFail:{id:"security.update_email.fail",defaultMessage:"Update email failed."},emailFieldLabel:{id:"security.fields.email.label",defaultMessage:"Email address"},emailFieldPlaceholder:{id:"edit_email.placeholder",defaultMessage:"me@example.com"},passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},submit:{id:"security.submit",defaultMessage:"Save changes"},cancel:{id:"common.cancel",defaultMessage:"Cancel"}}),g={email:"",password:""};a.default=function(){var e=(0,d.Z)(),a=(0,u.TL)(),t=l.useState(g),o=(0,i.Z)(t,2),m=o[0],h=o[1],v=l.useState(!1),y=(0,i.Z)(v,2),Z=y[0],w=y[1],O=m.email,M=m.password,j=l.useCallback((function(e){e.persist(),h((function(a){return p(p({},a),{},(0,r.Z)({},e.target.name,e.target.value))}))}),[]),P=l.useCallback((function(){w(!0),a((0,c.Uk)(O,M)).then((function(){h(g),f.Z.success(e.formatMessage(b.updateEmailSuccess))})).finally((function(){w(!1)})).catch((function(){h((function(e){return p(p({},e),{},{password:""})})),f.Z.error(e.formatMessage(b.updateEmailFail))}))}),[O,M,a,e]);return(0,s.Z)(n.sg,{label:e.formatMessage(b.header),transparent:!0,withHeader:!1},void 0,(0,s.Z)(n.Zb,{variant:"rounded"},void 0,(0,s.Z)(n.Ol,{backHref:"/settings"},void 0,(0,s.Z)(n.ll,{title:e.formatMessage(b.header)})),(0,s.Z)(n.eW,{},void 0,(0,s.Z)(n.l0,{onSubmit:P},void 0,(0,s.Z)(n.cw,{labelText:e.formatMessage(b.emailFieldLabel)},void 0,(0,s.Z)(n.II,{type:"text",placeholder:e.formatMessage(b.emailFieldPlaceholder),name:"email",autoComplete:"off",onChange:j,value:O})),(0,s.Z)(n.cw,{labelText:e.formatMessage(b.passwordFieldLabel)},void 0,(0,s.Z)(n.II,{type:"password",name:"password",onChange:j,value:M})),(0,s.Z)(n.iN,{},void 0,(0,s.Z)(n.zx,{to:"/settings",theme:"tertiary"},void 0,e.formatMessage(b.cancel)),(0,s.Z)(n.zx,{type:"submit",theme:"primary",disabled:Z},void 0,e.formatMessage(b.submit)))))))}}}]);
//# sourceMappingURL=edit_email-4e9e13abf66262df77e7.chunk.js.map
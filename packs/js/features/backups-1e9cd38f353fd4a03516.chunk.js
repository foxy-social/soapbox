"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[17],{1177:function(e,a,s){s.r(a);var t=s(1202),n=s(2111),i=(s(5),s(1)),o=s(2121),c=s(2122),u=s(941),r=s(52),d=s(2),p=s(3),f=(0,o.vU)({heading:{id:"column.backups",defaultMessage:"Backups"},create:{id:"backups.actions.create",defaultMessage:"Create backup"},emptyMessage:{id:"backups.empty_message",defaultMessage:"No backups found. {action}"},emptyMessageAction:{id:"backups.empty_message.action",defaultMessage:"Create one now?"},pending:{id:"backups.pending",defaultMessage:"Pending"}});a.default=function(){var e=(0,c.Z)(),a=(0,p.TL)(),s=(0,p.CG)((function(e){return e.backups.toList().sortBy((function(e){return e.inserted_at}))})),o=(0,i.useState)(!0),g=(0,n.Z)(o,2),m=g[0],l=g[1],b=function(e){a((0,u.id)()),e.preventDefault()};(0,i.useEffect)((function(){a((0,u.xX)()).then((function(){l(!1)})).catch((function(){}))}),[]);var k=m&&0===s.count(),v=(0,t.Z)("a",{href:"#",onClick:b},void 0,(0,t.Z)(d.xv,{tag:"span",theme:"primary",size:"sm",className:"hover:underline"},void 0,e.formatMessage(f.emptyMessageAction)));return(0,t.Z)(d.sg,{label:e.formatMessage(f.heading)},void 0,(0,t.Z)(r.Z,{isLoading:m,showLoading:k,scrollKey:"backups",emptyMessage:e.formatMessage(f.emptyMessage,{action:v})},void 0,s.map((function(a){return(0,t.Z)("div",{className:"p-4"},a.id,a.processed?(0,t.Z)("a",{href:a.url,target:"_blank"},void 0,a.inserted_at):(0,t.Z)(d.xv,{theme:"subtle"},void 0,e.formatMessage(f.pending),": ",a.inserted_at))}))),(0,t.Z)(d.iN,{},void 0,(0,t.Z)(d.zx,{theme:"primary",disabled:m,onClick:b},void 0,e.formatMessage(f.create))))}}}]);
//# sourceMappingURL=backups-1e9cd38f353fd4a03516.chunk.js.map
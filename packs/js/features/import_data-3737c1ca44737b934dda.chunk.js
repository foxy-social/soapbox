"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[53],{1368:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var a=s(1202),o=s(2121),i=s(2122),n=s(34),u=s(37),c=(0,o.vU)({blocksSuccess:{id:"import_data.success.blocks",defaultMessage:"Blocks imported successfully"},followersSuccess:{id:"import_data.success.followers",defaultMessage:"Followers imported successfully"},mutesSuccess:{id:"import_data.success.mutes",defaultMessage:"Mutes imported successfully"}}),l=function(t){return function(e,s){return e({type:"IMPORT_FOLLOWS_REQUEST"}),(0,u.ZP)(s).post("/api/pleroma/follow_import",t).then((function(t){n.Z.success(c.followersSuccess),e({type:"IMPORT_FOLLOWS_SUCCESS",config:t.data})})).catch((function(t){e({type:"IMPORT_FOLLOWS_FAIL",error:t})}))}},r=function(t){return function(e,s){return e({type:"IMPORT_BLOCKS_REQUEST"}),(0,u.ZP)(s).post("/api/pleroma/blocks_import",t).then((function(t){n.Z.success(c.blocksSuccess),e({type:"IMPORT_BLOCKS_SUCCESS",config:t.data})})).catch((function(t){e({type:"IMPORT_BLOCKS_FAIL",error:t})}))}},d=function(t){return function(e,s){return e({type:"IMPORT_MUTES_REQUEST"}),(0,u.ZP)(s).post("/api/pleroma/mutes_import",t).then((function(t){n.Z.success(c.mutesSuccess),e({type:"IMPORT_MUTES_SUCCESS",config:t.data})})).catch((function(t){e({type:"IMPORT_MUTES_FAIL",error:t})}))}},p=s(2),f=s(2111),m=s(1),_=s(3),g=function(t){var e=t.messages,s=t.action,o=(0,_.TL)(),n=(0,i.Z)(),u=(0,m.useState)(!1),c=(0,f.Z)(u,2),l=c[0],r=c[1],d=(0,m.useState)(null),g=(0,f.Z)(d,2),S=g[0],M=g[1];return(0,a.Z)(p.l0,{onSubmit:function(t){var e=new FormData;e.append("list",S),r(!0),o(s(e)).then((function(){r(!1)})).catch((function(){r(!1)})),t.preventDefault()}},void 0,(0,a.Z)(p.xv,{size:"xl",weight:"bold",tag:"label"},void 0,n.formatMessage(e.input_label)),(0,a.Z)(p.cw,{hintText:(0,a.Z)(p.xv,{theme:"muted"},void 0,n.formatMessage(e.input_hint))},void 0,(0,a.Z)(p.S2,{accept:".csv,text/csv",onChange:function(t){var e,s=null===(e=t.target.files)||void 0===e?void 0:e.item(0);M(s)},required:!0})),(0,a.Z)(p.iN,{},void 0,(0,a.Z)(p.zx,{type:"submit",theme:"primary",disabled:l},void 0,n.formatMessage(e.submit))))},S=(0,o.vU)({heading:{id:"column.import_data",defaultMessage:"Import data"},submit:{id:"import_data.actions.import",defaultMessage:"Import"}}),M=(0,o.vU)({input_label:{id:"import_data.follows_label",defaultMessage:"Follows"},input_hint:{id:"import_data.hints.follows",defaultMessage:"CSV file containing a list of followed accounts"},submit:{id:"import_data.actions.import_follows",defaultMessage:"Import follows"}}),b=(0,o.vU)({input_label:{id:"import_data.blocks_label",defaultMessage:"Blocks"},input_hint:{id:"import_data.hints.blocks",defaultMessage:"CSV file containing a list of blocked accounts"},submit:{id:"import_data.actions.import_blocks",defaultMessage:"Import blocks"}}),h=(0,o.vU)({input_label:{id:"import_data.mutes_label",defaultMessage:"Mutes"},input_hint:{id:"import_data.hints.mutes",defaultMessage:"CSV file containing a list of muted accounts"},submit:{id:"import_data.actions.import_mutes",defaultMessage:"Import mutes"}}),v=function(){var t=(0,i.Z)();return(0,a.Z)(p.sg,{label:t.formatMessage(S.heading)},void 0,(0,a.Z)(g,{action:l,messages:M}),(0,a.Z)(g,{action:r,messages:b}),(0,a.Z)(g,{action:d,messages:h}))}}}]);
//# sourceMappingURL=import_data-3737c1ca44737b934dda.chunk.js.map
(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[6],{1146:function(e,t,n){"use strict";n.r(t);var a=n(1202),i=n(2111),o=n(1),r=n(2142),s=n(2112),l=n(51),c=n(819),u=n(83),d=n(36),m=n(149),f=n(400),v=n(2),Z=n(3),g=(0,n(59).$r)();t.default=function(e){var t=e.params,n=e.withReplies,p=void 0!==n&&n,h=(0,s.k6)(),_=(0,Z.TL)(),w=(0,Z.hz)(),y=(0,Z.rV)(),x=(0,Z.Dn)(),b=(0,d.wT)(t.username,{withRelationship:!0}).account,k=(0,o.useState)(!b),M=(0,i.Z)(k,2),I=M[0],U=M[1],C=p?"".concat(null==b?void 0:b.id,":with_replies"):null==b?void 0:b.id,L=!0===y.getIn(["account_timeline","shows","pinned"])&&!p,N=(0,Z.CG)((function(e){return g(e,{type:"account:".concat(C),prefix:"account_timeline"})})),z=(0,Z.CG)((function(e){return g(e,{type:"account:".concat(null==b?void 0:b.id,":pinned"),prefix:"account_timeline"})})),O=(0,Z.CG)((function(e){return!0===e.relationships.getIn([null==b?void 0:b.id,"blocked_by"])})),T=O&&!w.blockersVisible,D=!0===x.getIn(["extensions","patron","enabled"]),G=(0,Z.CG)((function(e){return!0===e.getIn(["timelines","account:".concat(C),"isLoading"])})),q=(0,Z.CG)((function(e){return!0===e.getIn(["timelines","account:".concat(C),"hasMore"])})),S=(0,Z.CG)((function(e){var t;return null===(t=e.timelines.get("account:".concat(C)))||void 0===t?void 0:t.next})),E=(null==b?void 0:b.username)||t.username;return(0,o.useEffect)((function(){_((0,l.UL)(t.username,h)).then((function(){return U(!1)})).catch((function(){return U(!1)}))}),[t.username]),(0,o.useEffect)((function(){b&&!p&&_((0,u.hj)(b.id))}),[null==b?void 0:b.id,p]),(0,o.useEffect)((function(){b&&D&&_((0,c.wp)(b.url))}),[null==b?void 0:b.url,D]),(0,o.useEffect)((function(){b&&_((0,u.Cn)(b.id,{withReplies:p}))}),[null==b?void 0:b.id,p]),!b&&I?(0,a.Z)(v.$j,{}):b?T?(0,a.Z)(v.Zb,{},void 0,(0,a.Z)(v.eW,{},void 0,(0,a.Z)(v.xv,{align:"center"},void 0,O?(0,a.Z)(r.Z,{id:"empty_column.account_blocked",defaultMessage:"You are blocked by @{accountUsername}.",values:{accountUsername:E}}):(0,a.Z)(r.Z,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"})))):(0,a.Z)(f.Z,{scrollKey:"account_timeline",statusIds:N,featuredStatusIds:L?z:void 0,isLoading:G,hasMore:q,onLoadMore:function(e){b&&_((0,u.Cn)(b.id,{url:S,maxId:e,withReplies:p}))},emptyMessage:(0,a.Z)(r.Z,{id:"empty_column.account_timeline",defaultMessage:"No posts here!"})}):(0,a.Z)(m.Z,{nested:!0})}},1590:function(e,t,n){"use strict";var a=n(1202),i=(n(6),n(38),n(702)),o=n(2121),r=n(2122),s=n(456),l=n(2),c=n(91),u=n(81),d=function(e){return(e.match(/\$([a-zA-Z]*)/i)||[])[1]},m=(0,o.vU)({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"}}),f={month:"short",day:"numeric",year:"numeric",hour12:!0,hour:"numeric",minute:"2-digit"};t.Z=function(e){var t,o=e.field,v=(0,r.Z)();return t=o.name,Boolean(d(t))?(0,a.Z)(c.Z,{fetchComponent:u.UE},void 0,(function(e){return(0,a.Z)(e,{ticker:d(o.name).toLowerCase(),address:o.value_plain})})):(0,a.Z)("dl",{},void 0,(0,a.Z)("dt",{title:o.name},void 0,(0,a.Z)(s.Z,{weight:"bold",tag:"span",dangerouslySetInnerHTML:{__html:o.name_emojified}})),(0,a.Z)("dd",{className:(0,i.default)({"text-success-500":o.verified_at}),title:o.value_plain},void 0,(0,a.Z)(l.Ug,{space:2,alignItems:"center"},void 0,o.verified_at&&(0,a.Z)("span",{className:"flex-none",title:v.formatMessage(m.linkVerifiedOn,{date:v.formatDate(o.verified_at,f)})},void 0,(0,a.Z)(l.JO,{src:n(204)})),(0,a.Z)(s.Z,{className:"overflow-hidden break-words",tag:"span",dangerouslySetInnerHTML:{__html:o.value_emojified}}))))}},1219:function(e,t,n){"use strict";n.r(t);var a=n(1202),i=(n(5),n(2142)),o=n(2),r=n(1590);t.default=function(e){var t=e.account;return(0,a.Z)(o.$L,{title:(0,a.Z)(i.Z,{id:"profile_fields_panel.title",defaultMessage:"Profile fields"})},void 0,(0,a.Z)(o.Kq,{space:4},void 0,t.fields.map((function(e,t){return(0,a.Z)(r.Z,{field:e},t)}))))}},1375:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var a=n(2109),i=n(1202),o=(n(14),n(0),n(20),n(17),n(94),n(66),n(28),n(5),n(4),n(8),n(2121)),r=n(2122),s=n(2142),l=n(36),c=n(607),u=n(456),d=n(2),m=n(3),f=n(111),v=n(507),Z=n(788),g=(n(15),n(25),n(753)),p=n(1),h=n(2141),_=n(954),w=n(2139),y=n(605),x=n(178),b=(0,n(59).Tm)(),k=function(e){var t=e.account,n=(0,m.TL)(),a=(0,m.CG)((function(e){return e.me})),r=(0,m.hz)(),l=(0,m.CG)((function(e){var n;return(null===(n=e.user_lists.familiar_followers.get(t.id))||void 0===n?void 0:n.items)||(0,g.OrderedSet)()})),c=(0,m.CG)((function(e){return l.slice(0,2).map((function(t){return b(e,t)}))}));if((0,p.useEffect)((function(){a&&r.familiarFollowers&&n((0,_.ne)(t.id))}),[]),0===l.size)return null;var u=c.map((function(e){return!!e&&(0,i.Z)(y.ZP,{accountId:e.id,inline:!0},void 0,(0,i.Z)(h.rU,{className:"mention",to:"/@".concat(e.acct)},void 0,(0,i.Z)("span",{dangerouslySetInnerHTML:{__html:e.display_name_html}}),e.verified&&(0,i.Z)(x.Z,{})))})).toArray();return l.size>2&&u.push((0,i.Z)("span",{className:"cursor-pointer hover:underline",role:"presentation",onClick:function(){n((0,w.h7)("FAMILIAR_FOLLOWERS",{accountId:t.id}))}},void 0,(0,i.Z)(s.Z,{id:"account.familiar_followers.more",defaultMessage:"{count, plural, one {# other} other {# others}} you follow",values:{count:l.size-c.size}}))),(0,i.Z)(d.xv,{theme:"muted",size:"sm"},void 0,(0,i.Z)(s.Z,{id:"account.familiar_followers",defaultMessage:"Followed by {accounts}",values:{accounts:(0,i.Z)(o.yX,{type:"conjunction",value:u})}}))},M=n(1590),I=n(988),U=(0,o.vU)({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"},account_locked:{id:"account.locked_info",defaultMessage:"This account privacy status is set to locked. The owner manually reviews who can follow them."},deactivated:{id:"account.deactivated",defaultMessage:"Deactivated"},bot:{id:"account.badges.bot",defaultMessage:"Bot"}}),C=function(e){var t,o,g=e.account,p=e.username,h=(0,r.Z)(),_=(0,m.Dn)().displayFqn,w=(0,l._q)(null==g?void 0:g.url).patronUser,y=(0,m.CG)((function(e){return e.me})),x=(null==g?void 0:g.id)===y;if(!g)return(0,i.Z)("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,(0,i.Z)(d.Kq,{space:2},void 0,(0,i.Z)(d.Kq,{},void 0,(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,(0,i.Z)(d.xv,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",p)))));var b={__html:g.note_emojified},C=null!==(t=null===(o=g.pleroma)||void 0===o?void 0:o.deactivated)&&void 0!==t&&t?{__html:h.formatMessage(U.deactivated)}:{__html:g.display_name_html},L=h.formatDate(g.created_at,{month:"long",year:"numeric"}),N=function(){var e=(g?(0,v.ro)(g):[]).map((function(e){return(0,i.Z)(c.Z,{slug:e,title:(0,Z.k)((0,v.h2)(e))},e)})),t=null!=g&&g.admin?(0,i.Z)(c.Z,{slug:"admin",title:(0,i.Z)(s.Z,{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"})},"staff"):null!=g&&g.moderator?(0,i.Z)(c.Z,{slug:"moderator",title:(0,i.Z)(s.Z,{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"})},"staff"):null,n=!0===(null==w?void 0:w.is_patron),o=[];return t&&o.push(t),n&&o.push((0,i.Z)(c.Z,{slug:"patron",title:"Patron"},"patron")),[].concat(o,(0,a.Z)(e))}();return(0,i.Z)("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,(0,i.Z)(d.Kq,{space:2},void 0,(0,i.Z)(d.Kq,{},void 0,(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,(0,i.Z)(d.xv,{size:"lg",weight:"bold",dangerouslySetInnerHTML:C,truncate:!0}),g.bot&&(0,i.Z)(c.Z,{slug:"bot",title:h.formatMessage(U.bot)}),N.length>0&&(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,N)),(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.xv,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",_?g.fqn:g.acct),g.locked&&(0,i.Z)(d.JO,{src:n(207),alt:h.formatMessage(U.account_locked),className:"h-4 w-4 text-gray-600"}))),(0,i.Z)(I.Z,{account:g}),g.note.length>0&&(0,i.Z)(u.Z,{size:"sm",dangerouslySetInnerHTML:b}),(0,i.Z)("div",{className:"flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center"},void 0,(0,f.D0)(g)?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(665),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,(0,i.Z)(s.Z,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:L}}))):null,g.location?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(568),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,g.location)):null,g.website?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(609),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)("div",{className:"max-w-[300px]"},void 0,(0,i.Z)(d.xv,{size:"sm",truncate:!0},void 0,function(e){try{var t=new URL(e);return["http:","https:"].includes(t.protocol)}catch(e){return!1}}(g.website)?(0,i.Z)("a",{className:"text-primary-600 hover:underline dark:text-accent-blue",href:g.website,target:"_blank"},void 0,g.website):g.website))):null,function(){var e,t=null==g||null===(e=g.pleroma)||void 0===e?void 0:e.birthday;if(!t)return null;var a=h.formatDate(t,{timeZone:"UTC",day:"numeric",month:"long",year:"numeric"}),o=new Date(t),r=new Date,l=o.getDate()===r.getDate()&&o.getMonth()===r.getMonth();return(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(966),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,l?(0,i.Z)(s.Z,{id:"account.birthday_today",defaultMessage:"Birthday is today!"}):(0,i.Z)(s.Z,{id:"account.birthday",defaultMessage:"Born {date}",values:{date:a}})))}()),x?null:(0,i.Z)(k,{account:g})),g.fields.length>0&&(0,i.Z)(d.Kq,{space:2,className:"mt-4 xl:hidden"},void 0,g.fields.map((function(e,t){return(0,i.Z)(M.Z,{field:e},t)}))))}},402:function(){}}]);
//# sourceMappingURL=account_timeline-928eedf15895ae62238c.chunk.js.map
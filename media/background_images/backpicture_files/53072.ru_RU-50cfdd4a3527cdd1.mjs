"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[53072],{646920:(e,t,l)=>{var i;l.r(t),l.d(t,{default:()=>o});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:i,storageKey:null}],type:"Pin",abstractKey:null};a.hash="cabaa35ed7d59dee006897bf3ef32e3d";let o=a},945960:(e,t,l)=>{l.d(t,{Dv:()=>s,Kn:()=>a,Ml:()=>n,Oc:()=>i,mv:()=>o});let i=16,a=`${i}px ${i}px 0 0`,o=4,s={SAVED:"rgba(0, 0, 0, 0.33)",VISUAL:"rgba(0, 0, 0, 0.1)",LEGO_WASH:"rgba(0, 0, 0, 0.4)"},n=120},936437:(e,t,l)=>{l.d(t,{Z:()=>s});var i=l(967232),a=l(144326),o=l(240760);function s(){let e=(0,a.ZP)();return function(t,l){let a=new Date(t).getTime(),s=Date.now()-a,n=Math.floor(s/i.FS),r=Math.floor(s/i.UK),d=Math.floor(s/i.F4),_=Math.floor(s/i.VL),c=Math.floor(s/i.N9),u=Math.floor(s/i.N1),h=e.nbt(["{{ minutes }} минуту назад", "{{ minutes }} минуты назад", "{{ minutes }} минут назад"], n, " - ", true),g=e.nbt(["{{ hours }} час назад", "{{ hours }} часа назад", "{{ hours }} часов назад"], r, " - ", true),p=e.nbt(["{{ days }} день назад", "{{ days }} дня назад", "{{ days }} дней назад"], d, " - ", true),m=e.nbt(["{{ weeks }} неделю назад", "{{ weeks }} недели назад", "{{ weeks }} недель назад"], _, " - ", true),b=e.nbt(["{{ months }} месяц назад", "{{ months }} месяца назад", "{{ months }} месяцев назад"], c, "useGetHumanizedTimeSince.monthsString", true),f=e.nbt(["{{ years }} год назад", "{{ years }} года назад", "{{ years }} лет назад"], u, " - ", true),y=e.nbt(["{{ minutes }} мин.", "{{ minutes }} мин.", "{{ minutes }} мин."], n, "minutes ago abbreviated", true),x=e.nbt(["{{ hours }} ч.", "{{ hours }} ч.", "{{ hours }} ч."], r, "hours ago abbreviated", true),v=e.nbt(["{{ days }} дн.", "{{ days }} дн.", "{{ days }} дн."], d, "days ago abbreviated", true),w=e.nbt(["{{ weeks }} нед.", "{{ weeks }} нед.", "{{ weeks }} нед."], _, "weeks ago abbreviated", true),P=e.nbt(["{{ months }} мес.", "{{ months }} мес.", "{{ months }} мес."], c, "months ago abbreviated", true),z=e.nbt(["{{ years }} год", "{{ years }} года", "{{ years }} лет"], u, "years ago abbreviated", true);return u>0?(0,o.nk)(l?z:f,{years:u}).join(""):c>0?(0,o.nk)(l?P:b,{months:c}).join(""):_>0?(0,o.nk)(l?w:m,{weeks:_}).join(""):d>0?(0,o.nk)(l?v:p,{days:d}).join(""):r>0?(0,o.nk)(l?x:g,{hours:r}).join(""):n>0?(0,o.nk)(l?y:h,{minutes:n}).join(""):e.bt("Только что", "Just now", " - ", undefined, true)}}},728593:(e,t,l)=>{l.d(t,{Z:()=>o});var i=l(830997),a=l(873095);let o=()=>{let e=(0,i.g)(),t=(0,a.l)();return l=>{let{mobileOptions:i,desktopOptions:a,reason:o,attributionLabel:s,pinId:n}=l;e?e.showDesktopSignupModal({signupFlow:a?.modalType==="login"?{type:"login"}:{type:"signup"},reason:o,attributionLabel:s,...a?.modalOptions}):t&&t.showMobileSignupModal({reason:o,attributionLabel:s,headingType:i?.headingType??"none",pinId:n})}}},946970:(e,t,l)=>{l.d(t,{Z:()=>o});var i=l(883119),a=l(785893);function o({ariaHidden:e=!1,color:t="darkGray",size:l}){return(0,a.jsx)("span",{"aria-hidden":e,style:{padding:"0 4px"},children:(0,a.jsx)(i.xv,{color:t,inline:!0,size:l??"200",children:"·"})})}},668564:(e,t,l)=>{l.d(t,{X:()=>a,Z:()=>o});var i=l(667294);let a=120;function o(e,t=0,l=a){let[s,n]=(0,i.useState)(e?"active":"inactive");return(0,i.useEffect)(()=>{if(e){if(t){let e=setTimeout(()=>n("active"),t);return()=>{clearTimeout(e)}}n("active")}else{let e=setTimeout(()=>n("inactive"),l);return()=>{clearTimeout(e)}}},[e]),s}},596530:(e,t,l)=>{l.d(t,{Z:()=>s});var i=l(883119),a=l(668564),o=l(785893);function s({children:e,fadeInDuration:t=0,fadeOutDuration:l=a.X,visibility:s}){return"none"!==s&&e?(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{hidden:{opacity:0,transition:l?`opacity ${l}ms ease`:void 0},visible:{opacity:1,transition:t?`opacity ${t}ms ease`:void 0}}[s]},children:e}):null}},533191:(e,t,l)=>{l.d(t,{Z:()=>z}),l(167912);var i,a=l(883119),o=l(488792),s=l(384609),n=l(144326),r=l(297728),d=l(728593),_=l(1006),c=l(154785),u=l(901450),h=l(410150),g=l(969119),p=l(383399),m=l(578406),b=l(934648),f=l(424583),y=l(310368),x=l(55463),v=l(785893);let w=({children:e,pulsar:t,testId:l})=>t.show?(0,v.jsx)(a.xu,{"data-test-id":l,position:"relative",children:(0,v.jsxs)(a.iP,{onTap:t.onClick,tapStyle:"none",children:[(0,v.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,v.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,v.jsx)(a.o3,{})})]})}):(0,v.jsx)(a.xu,{"data-test-id":l,children:e}),P=void 0!==i?i:i=l(646920);function z({auxData:e,disabled:t,disableLog:l,followEventType:i,id:z,inline:A,invertColors:j,isFollowed:k,isIdeaPin:S,isLegoEnabled:F,isSecondaryButton:I,isUserFollowButton:C,isUserMe:Z,onFollow:T,onUnfollow:E,pinKey:L,shouldUseLegoColors:M,showPulsar:H,size:B,textType:D="FollowFollowing",unfollowEventType:U,viewParameter:O,viewType:G,clientTrackingParams:W}){let N;let R=(0,n.ZP)(),K=(0,h.HG)(),{showToast:$}=(0,u.F9)(),V=(0,c.Z)(),X=(0,o.Z)(),J=(0,d.Z)(),{checkExperiment:q}=(0,r.F)(),Q=(0,b.Z)(),Y=(0,p.Z)(),ee=Y&&Y.isAuth,{unauthFollowUserId:et,setUnauthFollowUserId:el}=(0,x.f)(),ei=(0,f.mN)()(z),ea=ei&&{imageMediumUrl:ei.image_medium_url,username:ei.username},eo=(0,s.Z)(P,L),es=eo?.linkDomain,en=eo?.nativeCreator,er=eo?.originPinner,ed=eo?.pinner;N=en||(es?es.officialUser:er||ed);let e_=ea??N;(0,g.Z)(()=>{!K&&ee&&et&&z&&et===z&&T(z)});let ec=Q({fn:()=>{ee?k?(E(z),l||X({event_type:U,view_type:G,view_parameter:O,object_id_str:z,aux_data:e,clientTrackingParams:W})):(T(z),C&&$(({hideToast:e})=>{let t=e_?.username?`/${e_.username}/`:"";return(0,v.jsx)(y.Z,{handleHide:e,href:t,imageUrl:e_?.imageMediumUrl||"",text:(0,v.jsx)(a.xv,{lineClamp:4,children:R.bt("Вы подписались на автора! Теперь его пины будут появляться в вашей ленте.", "Following! Their created Pins will show up in your home feed!", "followButton.follow.informationalToastText", undefined, true)}),userId:z})}),l||X({event_type:i,view_type:G,view_parameter:O,object_id_str:z,aux_data:e,clientTrackingParams:W})):((0,_.NC)(k?"press_profile_unfollow":"press_profile_follow"),V({action:"click",item:k?"unfollow-button":"follow-button"}),J({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:S?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:K&&q("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!K&&q("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),K||el(z??""),(0,_.NC)("clickthrough"))},modalHeader:(0,m.N4)({i18n:R,toFollow:!k})}),eu=!k&&!!H,eh=()=>{if(Z)return R.bt("Это вы.", "That's you!", "Follow button is disabled because this is you", undefined, true);if("AddRemove"===D)return k?R.bt("Удалить", "Remove", "unfollowButton.removeText", undefined, true):R.bt("Добавить", "Add", "followButton.addText", undefined, true);let e="FollowUnfollow"===D?R.bt("Отписаться", "Unfollow", "unfollowButton.unfollowText", undefined, true):R.bt("Отписаться", "Following", "Follow button label - followed state", undefined, true);return k?e:R.bt("Подписаться", "Follow", "Follow button label - unfollowed state", undefined, true)};return(0,v.jsx)(w,{pulsar:eu?{show:!0,onClick:ec}:{show:!1},testId:Z||k?"board-unfollow-button":"board-follow-button",children:(0,v.jsx)(a.zx,{accessibilityLabel:eh(),color:M||"AddRemove"===D||!F&&I||j?"gray":"red",disabled:Z||t,fullWidth:A,onClick:eu?void 0:({event:t})=>{t.preventDefault(),t.stopPropagation(),l||X({event_type:101,component:13672,element:11951,object_id_str:z,view_type:G,view_parameter:O,aux_data:e,clientTrackingParams:W}),ec()},selected:k||!1,size:B,text:eh()})})}},96405:(e,t,l)=>{l.d(t,{Z:()=>o});var i=l(883119),a=l(785893);function o({children:e,additionalStyles:t={}}){return(0,a.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none",...t}},"data-test-id":"contentLayer",left:!0,position:"absolute",right:!0,top:!0,children:e})}},162779:(e,t,l)=>{l.d(t,{Z:()=>_});var i=l(667294),a=l(883119),o=l(785893);function s(e){return`${Math.min(100*e,100)}%`}function n({customCover:e,imgPos:t,imgUrl:l}){let[a,o]=(0,i.useState)({height:0,width:0});if((0,i.useEffect)(()=>{let e=new Image;e.onload=()=>o({height:e.naturalHeight,width:e.naturalWidth}),e.src=l},[l]),!e||!t||!a.height||!a.width)return"center center";let n=a.width-t.width,r=a.height-t.height,d=n>0?s(t.x/n):"center",_=r>0?s(t.y/r):"center";return`${d} ${_}`}function r(e){let t=n(e),{imgUrl:l}=e,i={backgroundImage:`url(${l})`,backgroundPosition:t,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,o.jsx)(a.xu,{"data-test-id":"cover-image-box",height:"100%",width:"100%",children:(0,o.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:i},"data-test-id":"cover-image",children:(0,o.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}function d(e){let t=n(e),{alt:l,color:i,imgUrl:s}=e;return(0,o.jsx)(a.zd,{height:"100%",width:"100%",children:(0,o.jsx)("img",{alt:l||"",src:s,style:{backgroundColor:i||"#EFEFEF",fetchPriority:"cover",height:"100%",loading:"auto",objectFit:"cover",objectPosition:t,width:"100%"}})})}function _(e){let{renderAsImage:t}=e;return t?(0,o.jsx)(d,{...e}):(0,o.jsx)(r,{...e})}},898773:(e,t,l)=>{l.d(t,{Z:()=>m});var i=l(667294),a=l(883119),o=l(144326),s=l(945960),n=l(730212),r=l(410150),d=l(596530),_=l(140002),c=l(162779),u=l(830807),h=l(96405),g=l(785893);let p="100%";function m(e){let t=(0,o.ZP)(),{canEdit:l,containerBackgroundColor:m="white",coverPhoto:b,fullSize:f,hideSecretBoardIcon:y,images:x,isActive:v,isProtected:w,isSecret:P,isTemporarilyDisabled:z,layout:A,onEditClick:j,renderAsImage:k,showSensitivityScreen:S}=e,F=(0,r.HG)(),{isRTL:I,isAuthenticated:C}=(0,n.B)(),Z=(0,i.useRef)(null),T=x[0],E=!b&&x[0]?.name||t.bt("Изображение обложки", "Cover image", "DrawerImageGroup", undefined, true),L=[,,].fill(0),M=new a.Ry(1),H="square"===A?_.M0:_.z9,B="square"===A?_.FP:_.FC,D=T?.url?(0,g.jsx)(a.Ee,{alt:E,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:T.url}):(0,g.jsx)(a.xu,{color:"secondary",height:"100%",width:"100%"}),U=z||S?{filter:"blur(20px)"}:{};return(0,g.jsxs)(a.zd,{height:f?"100%":void 0,rounding:4,width:"100%",children:[(0,g.jsxs)(a.kC,{alignItems:"stretch",direction:"row",height:"100%",justifyContent:"start",children:[(0,g.jsx)(a.sg,{span:8,children:(0,g.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:U},height:f?"100%":void 0,position:"relative",children:(0,g.jsx)(a.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:p}},overflow:"hidden",width:"100%",children:(0,g.jsxs)(a.xu,{ref:Z,bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:m,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(w||P)&&!y&&(0,g.jsx)(a.xu,{left:!I,margin:2,position:"absolute",right:I,top:!0,zIndex:M,children:(0,g.jsx)(u.Z,{backgroundColor:"default",iconColor:"default",privacy:P?"secret":"protected",size:F&&C?32:24})}),b?.url?(0,g.jsx)(a.zd,{height:"100%",wash:!0,width:"100%",children:(0,g.jsx)(c.Z,{customCover:b.isCustom,height:B,imgPos:b.position||{width:0,height:0,x:0,y:0},imgUrl:b.url??"",renderAsImage:k,width:Math.floor(H/3*2)})}):D]})})})}),(0,g.jsx)(a.sg,{span:4,children:(0,g.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:U},height:"100%",children:[l&&v&&(0,g.jsx)(a.xu,{bottom:!0,left:I,margin:2,position:"absolute",right:!I,zIndex:M,children:(0,g.jsx)(a.hU,{accessibilityLabel:t.bt("Изменить", "Edit", "DrawerImageGroup.edit", undefined, true),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>j?.(e),size:"sm"})}),L.map((e,t)=>{let l=b?x[t]:x[t+1];return(0,g.jsx)(a.xu,{height:f?"50%":void 0,position:"relative",children:(0,g.jsx)(a.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:p}},overflow:"hidden",width:"100%",children:(0,g.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:m,borderStyle:"solid",borderWidth:0===t?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:l?.url?(0,g.jsx)(a.zd,{height:"100%",wash:!0,width:"100%",children:(0,g.jsx)(a.Ee,{alt:"",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:l.url})}):(0,g.jsx)(a.xu,{color:"secondary",height:"100%",width:"100%"})})})},t)})]})}),(z||S)&&(0,g.jsx)(a.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:z?(0,g.jsx)(a.xu,{maxWidth:188,children:(0,g.jsx)(a.xv,{align:"center",color:"light",size:"200",weight:"bold",children:t.bt("Эта доска сейчас недоступна", "This board is currently unavailable", "drawerImageGroup.unavailableBoard.heading", undefined, true)})}):(0,g.jsx)(a.X6,{align:"center",color:"light",size:"400",children:t.bt("Эта доска может содержать откровенные материалы", "This board may contain sensitive content", "drawerImageGroup.sensitivityScreen.heading", undefined, true)})})]}),(0,g.jsx)(d.Z,{visibility:v?"visible":"none",children:(0,g.jsx)(h.Z,{additionalStyles:{backgroundColor:s.Dv.LEGO_WASH}})})]})}},140002:(e,t,l)=>{l.d(t,{AC:()=>s,FC:()=>_,FP:()=>r,M0:()=>n,Xq:()=>c,Y_:()=>o,o2:()=>a,s0:()=>i,sN:()=>u,z9:()=>d});let i=44,a=40,o=49,s=69,n=236,r=157,d=320,_=213,c=7,u=["pinterest","pinterest_canada","pinterestuk","pinterestfr","pinterestde","pinterestit","pinterestespana","pinterestaustralia","pinterestindia","pinterestindonesia","pinterestjp","pinterestbr","pinterestmx","pinterestar","beauty","fashion","homedecor","food","inspiration","inspiringideas","aesthetics","shop","art","travel","trends","collages","pinterestpredicts","collagecuration","createjp","criadores","giftguides","indiaslpcuration","indonesiatodaytabcuration","pinterestarabia","pinterestcl","pinterestco","pinterestcreadores","pinterestcreatorsde","pinterestkorea","pinterestmalaysia","pinterestnl","pinterestpe","pinterestphilippines","pinterestpredictsuk","pinterestsingapore","pinterestthailand","pinterestvietnam","predicts","shopbrasil","todaytabbr","todaytabcurationhome","todaytablatam"]},830807:(e,t,l)=>{l.d(t,{Z:()=>s});var i=l(883119),a=l(144326),o=l(785893);function s({backgroundColor:e="darkGray",iconColor:t="inverse",iconSize:l,privacy:s,size:n=20}){let r=(0,a.ZP)();return(0,o.jsx)(i.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:n,justifyContent:"center",rounding:"circle",width:n,children:(0,o.jsx)(i.JO,{accessibilityLabel:r.bt("Значок секретной доски", "Secret board icon", "Icon indicating that a board is secret", undefined, true),color:t,icon:"secret"===s?"lock":"security",size:l??n/2})})}},827423:(e,t,l)=>{l.d(t,{C:()=>i,_:()=>s});let i=e=>!!e&&/^\/pin\/[\w-]+\/?$/.test(e.pathname),a=({pathname:e})=>/^\/search\/pins\//.test(e),o=({pathname:e,search:t})=>{let l=/^\/search\/pins\/(\?.*)$/.exec(e),i=(t||l&&l[1]||"").substr(1).split("&").map(e=>e.split("=")).find(e=>"q"===e[0]);return i?decodeURIComponent(i[1]):""},s=e=>{let t=[...e].reverse().find(({location:e})=>e&&!i(e));return t&&t.location&&a(t.location)?o(t.location):""}},598259:(e,t,l)=>{l.d(t,{O:()=>m,Z:()=>b});var i=l(667294),a=l(616550),o=l(883119),s=l(144326),n=l(812477),r=l(297728),d=l(730212),_=l(635258),c=l(827423),u=l(765955),h=l(785893);let g=(0,i.lazy)(()=>l.e(87674).then(l.bind(l,309500))),p={xs:12,sm:16,md:20,lg:24};function m({children:e}){let t=(0,s.ZP)();return(0,h.jsx)(o.u,{link:(0,h.jsx)(o.rU,{href:_.vBy,target:"blank",children:(0,h.jsx)(o.xv,{color:"inverse",size:"100",weight:"bold",children:t.bt("Подробнее", "Learn more", "verifiedBadge.tooltip.link", undefined, true)})}),text:t.bt("Этот магазин отвечает требованиям Pinterest к продавцам", "This retailer meets Pinterest's Merchant Guidelines", "merchantVerification.badge.tooltip", undefined, true),children:e})}function b({iconOnly:e,isVerifiedIdentity:t,isVerifiedMerchant:l,showText:_,size:b,inspirationalBadges:f,inspirationalBadgesColor:y,surface:x}){let v=(0,s.ZP)(),{checkExperiment:w}=(0,r.F)(),P=(0,a.TH)(),{isAuthenticated:z}=(0,d.B)(),A=(0,n.Z)(P)||(0,n.c)(P),j=(0,c.C)(P),[k,S]=(0,i.useState)(!1),F=(0,h.jsxs)(o.xu,{alignItems:"center","data-test-id":"verified-badge-icon",display:"flex",justifyContent:"start",children:[(0,h.jsx)(o.iP,{onTap:()=>S(!0),children:(0,h.jsx)(o.JO,{accessibilityLabel:v.bt("Значок подтвержденного продавца", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true),color:"shopping",icon:"workflow-status-ok",inline:!0,size:p[b]})}),_&&(0,h.jsx)(o.xu,{marginStart:2,children:(0,h.jsx)(o.xv,{color:"shopping",inline:!0,weight:"bold",children:v.bt("Подтвержденный продавец", "Verified merchant", "creator.header.verifiedMerchant", undefined, true)})})]}),I=(0,h.jsxs)(i.Fragment,{children:[l&&!e&&(0,h.jsx)(m,{children:F}),l&&e&&F,t&&!l&&(0,h.jsx)(o.JO,{accessibilityLabel:v.bt("Значок подтвержденного домена", "Domain verification icon", "domainVerification.badge.icon", undefined, true),color:"error",icon:"check-circle",size:p[b]}),!t&&!e&&l&&k&&(0,h.jsx)(i.Suspense,{children:(0,h.jsx)(g,{inspirationalBadges:f,inspirationalBadgesColor:y,setShowModal:S,showModal:k})})]});if(j||"SuggestionReps"===x||A)return I;let{group:C}=w("simplify_creator_attributions_web"),{group:Z,anyEnabled:T}=w("simplify_creator_attributions_unauth_web"),E=!z&&T&&!(0,u.kX)(Z);if((t||l)&&!j&&("enabled_att_trusted_merchants_and_verified_creators_only"===C||"enabled_att_trusted_merchants_and_verified_creators_only"===Z))return(0,h.jsx)(i.Fragment,{});switch(E?Z:C){case"enabled_att_trusted_merchant_blue_checkmark":return(0,h.jsxs)(i.Fragment,{children:[l&&!e&&(0,h.jsx)(m,{children:F}),l&&e&&F]});case"enabled_att_creators_with_red_checkmarks":return(0,h.jsx)(i.Fragment,{children:t&&!l&&(0,h.jsx)(o.JO,{accessibilityLabel:v.bt("Значок подтвержденного домена", "Domain verification icon", "domainVerification.badge.icon", undefined, true),color:"error",icon:"check-circle",size:p[b]})});default:return I}}},765955:(e,t,l)=>{l.d(t,{kX:()=>d,rz:()=>_,wQ:()=>n,AP:()=>r});var i=l(144326),a=l(297728),o=l(383399);let s=new Map([["mweb_unauth_max_saves_login_upsell",new Map([["enabled_1",(e,t)=>({title:t.bt("Зарегистрируйтесь, чтобы сохранять идеи и просматривать их", "Sign up to continue saving and access your ideas", "mweb.unauth.signup_modal.multi_save_value_prop.v0", undefined, true),subtitle:""})],["enabled_2",(e,t)=>({title:"",subtitle:t.bt("Откройте сохраненные идеи и найдите еще больше", "Access your saved ideas and discover even more", "mweb.unauth.signup_modal.multi_save_value_prop_subheader.v0", undefined, true)})],["enabled_3",(e,t)=>({title:t.bt("Просматривайте сохраненные идеи и находите новые", "Access your saved ideas and discover even more", "mweb.unauth.signup_modal.access_saved_ideas.v0", undefined, true),subtitle:""})],["enabled_4",(e,t)=>({title:"",subtitle:t.bt("Воплощайте свои идеи в жизнь", "Bring your ideas to life", "mweb.unauth.signup_modal.bring_ideas_to_life.v0", undefined, true)})],["enabled_5",(e,t)=>({title:t.bt("Воплощайте свои идеи в жизнь", "Bring your ideas to life", "mweb.unauth.signup_modal.bring_ideas_to_life_subheader.v0", undefined, true),subtitle:""})],["enabled_6",(e,t)=>({title:"",subtitle:t.bt("Зарегистрируйтесь, чтобы сохранять идеи и просматривать их", "Sign up to continue saving and access your ideas", "mweb.unauth.signup_modal.multi_save_value_prop.v0", undefined, true)})]])]]);function n(e){if((0,o.Z)(),(0,i.ZP)(),!e)return}function r(e){let t,l;let{checkExperiment:n}=(0,a.F)(),r=(0,o.Z)(),d=(0,i.ZP)();if(!e)return;switch(e){case"UnauthHybridBannerSignupModal":if(!(t=n("dweb_unauth_gen_ai_bottom_right_upsell_experiment")).anyEnabled)return;l=s.get("dweb_unauth_gen_ai_bottom_right_upsell_experiment");break;case"MobileSignupModalContent":if(!(t=n("mweb_unauth_max_saves_login_upsell")).anyEnabled)return;l=s.get("mweb_unauth_max_saves_login_upsell");break;default:return}let _=r.isAuth?r.firstName:null;if(!l)return;let c=l.get(t.group);if("function"!=typeof c)return;let u=c(_,d);if("object"==typeof u&&null!==u)return{title:u.title,subtitle:u.subtitle}}let d=e=>"employees"===e||"enabled_no_att_all_organic_non_product_pins"===e,_=(e,t,l)=>{if("control"===e||""===e)return!0;if(d(e))return!1;switch(e){case"enabled_att_checkmarks_trusted_verified":case"enabled_att_trusted_merchants_and_verified_creators_only":return t||l;case"enabled_att_trusted_merchant_blue_checkmark":return t;case"enabled_att_creators_with_red_checkmarks":return l&&!t;default:return!1}}},934648:(e,t,l)=>{l.d(t,{Z:()=>n});var i=l(144326),a=l(410150),o=l(754143),s=l(578406);let n=()=>{let e=(0,i.ZP)(),t=(0,a.HG)(),{viewer:l,loginForMore:n,limitedLoginModalSubheader:r,limitedLoginModalNextLocation:d}=(0,o.H)();return"LIMITED_LOGIN"===l.type?({modalHeader:l,nextLocation:i})=>a=>{let o=null;a&&(a.nativeEvent&&a.nativeEvent instanceof Event?o=a:a.event&&(o=a.event)),o&&(o.preventDefault&&o.preventDefault(),o.stopPropagation&&o.stopPropagation()),n?.setVisible(!0),r?.setText(l||(t?s.hr(e):s.Wh(e))),i&&d?.setRoute(i)}:({fn:e})=>e}},310368:(e,t,l)=>{l.d(t,{Z:()=>_});var i=l(883119),a=l(476198),o=l(144326),s=l(961754),n=l(410150),r=l(785893);function d({ideaPinImages:e}){let t=e.map((e,t)=>(0,r.jsx)(i.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:t}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,r.jsx)(i.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},t));return(0,r.jsx)(i.kC,{justifyContent:"center",children:(0,r.jsx)(i.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:t})})}function _({handleHide:e,text:t,userId:l,href:_,imageUrl:c}){let u=(0,o.ZP)(),h=(0,n.HG)(),g=(0,s.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:l}}),p=Array.isArray(t)?t.join(" "):t;if(0===(g.data||[]).length)return(0,r.jsx)(a.Z,{duration:5e3,href:_,onHide:e,text:p,thumbnail:c?{image:(0,r.jsx)(i.Ee,{alt:u.bt("Изображение пользователя, на которого вы были подписаны", "Image of who you followed", "userFollowingToast.thumbnail.userImage", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:c})}:void 0});let m=(g.data||[]).slice(0,3).map(e=>e.images?.[h?"236x":"170x"]),b=(0,r.jsx)(d,{ideaPinImages:m});return(0,r.jsx)(a.Z,{_dangerouslySetThumbnail:b,duration:5e3,href:_,onHide:e,text:p})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/53072.ru_RU-50cfdd4a3527cdd1.mjs.map
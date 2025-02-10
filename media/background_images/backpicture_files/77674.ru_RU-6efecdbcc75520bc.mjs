"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[77674],{81921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useIsGroupBoard_pin",selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"collaboratedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isCollaborative",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};i.hash="72582aa208f6837fe96ba824d0271616";let r=i},473599:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(616550),r=a(297728),s=a(868808),l=a(383399);function n(){let{checkExperiment:e}=(0,r.F)(),t=(0,i.TH)(),{isAuth:a}=(0,l.Z)(),{on_sale:n}=(0,s.mB)(t.search);return!!n&&!!e(a?"dweb_shopping_onebar_on_sale_filter":"dweb_one_bar_on_sale_filter_unauth",{dangerouslySkipActivation:!0}).anyEnabled}},505612:(e,t,a)=>{a.d(t,{Z:()=>n}),a(167912);var i,r=a(959064),s=a(384609);let l=void 0!==i?i:i=a(81921);function n(e,t){let a=(0,s.Z)(l,e);return(0,r.Z)(a.board?.collaboratedByMe,a.board?.owner?.entityId,t)&&!!a.board?.isCollaborative}},948195:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(115642);let r=(e,t)=>{let{isCloseupRelatedPinsAboveTheFoldEnabled:a}=(0,i.x4)();return{isEligibleForStaticImageIdeaPin:!!t&&(!1===e||a)}}},251184:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(667294),r=a(785893);let s=({text:e})=>Array.isArray(e)?e.map((e,t)=>(0,r.jsx)(i.Fragment,{children:e},t)):e},459870:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(883119);let r=()=>(0,i.Z6)({webExperimentName:"web_gestalt_visualrefresh",mwebExperimentName:"web_gestalt_visualrefresh"})},891985:(e,t,a)=>{a.d(t,{NK:()=>m,P6:()=>s,ZE:()=>h,Zt:()=>A,_J:()=>o,_S:()=>x,cL:()=>g,jL:()=>n,oN:()=>r,rM:()=>u,sV:()=>c,sY:()=>_});var i=a(673687);let r=5e3,s=5e3/i.gJ,l=["Uploaded by user"],n=(e,t)=>!!t&&!e,o=e=>!!e&&5!==e,c=e=>["email","messages","deep_linking"].includes(e),_=e=>!!e&&"gif"===e,d=e=>"pinstory"===e,g=({embedSrc:e,embedSubtype:t,embedType:a})=>!!e&&!_(a)&&!d(t),u=({link:e,mobileLink:t,trackedLink:a})=>!t&&!a&&!e,h=e=>/pin.it/gim.test(e||""),A=({link:e,mobileLink:t,origImageUrl:a,trackedLink:i})=>t||i||e||a||"",m=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function x(e){for(let t of l)if(e===t)return!1;return!0}},617280:(e,t,a)=>{function i({m:e=0,h:t=0}){let a;return a=t<=0?t:e>45?t+1:e>15?t+.5:t,{m:e,h:t,rm:t>0?0:e,rh:a}}function r(e){let t=Math.floor(e/3600);return i({m:Math.floor(e%3600/60),h:t})}a.d(t,{X:()=>i,u:()=>r})},663641:(e,t,a)=>{a.d(t,{Hd:()=>c,_R:()=>n,gi:()=>s,lw:()=>i,oD:()=>r,wF:()=>o,zh:()=>l});let i={PINS:"pins",PINS_BUYABLE:"buyable_pins",PINS_MINE:"my_pins",PINS_VIDEO:"videos",BOARDS:"boards",USERS:"users",IDEA_PINS:"idea_pins",MY_CONTENT:"my_content",SHOP_TOOL:"shop_tool"},r=e=>Object.values(i).find(t=>t===e)??void 0,s=e=>{switch(e){case i.PINS:return 0;case i.PINS_MINE:return null;case i.PINS_BUYABLE:return 1;case i.PINS_VIDEO:return 2;case i.BOARDS:return 3;case i.USERS:return 4;default:return null}},l=e=>{switch(e){case 0:return i.PINS;case 1:return i.PINS_BUYABLE;case 2:return i.PINS_VIDEO;case 3:return i.BOARDS;case 4:return i.USERS;default:return null}},n=e=>{switch(e){case i.PINS_MINE:case i.MY_CONTENT:return 107;case i.PINS_BUYABLE:return 254;case i.PINS_VIDEO:return 3306;case i.SHOP_TOOL:return 3380;case i.BOARDS:return 44;case i.USERS:return 45;case i.PINS:default:return 43}},o=e=>{switch(e){case i.PINS:return 60;case i.PINS_MINE:case i.MY_CONTENT:return 63;case i.PINS_BUYABLE:return 3800;case i.PINS_VIDEO:return 64;case i.BOARDS:return 61;case i.USERS:return 62;default:return null}},c=(e,t)=>{if(t)switch(e){case i.USERS:return 1000392;case i.PINS_BUYABLE:return 1000391;case i.PINS:default:return 29}switch(e){case i.USERS:return 1000432;case i.PINS_BUYABLE:return 1000433;case i.PINS:default:return 1000269}}},545230:(e,t,a)=>{a.d(t,{i:()=>i});let i={AC:"ac",AUTOCOMPLETE:"autocomplete",BOARD:"blp",CONTENT_TYPE_FILTER:"content_type_filter",DIRECT_NAVIGATION:"direct_navigation",FILTER:"filter",GUIDED_SEARCH_ENTRY:"guided_search_entry",GUIDED_SEARCH_LANDING:"guided_search_landing",HASHTAG_CLOSEUP:"hashtag_closeup",HASHTAG_PINREP:"hashtag_pinrep",HOMEFEED_BUBBLE:"homefeed_bubble",HUB_PAGE:"hub_page",IDEAS_ROOT:"ideas_root",IMAGE_ONLY_ATTRIBUTION:"image_only_attribution",LANDING_PAGE_STORY:"landing_page_story",NO_RESULTS_SEARCH_STORY:"no_results_search_story",PRODUCT:"product",REMOVE:"remove",RS:"rs",SHOPPING_FILTER:"shopping_filter",SITELINKS_SEARCHBOX:"sitelinks_searchbox",SLP_REC_CURATED:"slp_rec_curated",SLP_REC_TRENDING:"slp_rec_trending",SRS:"srs",STRUCTURED_GUIDE:"structured_guide",TRENDING:"trending",TYPED:"typed",TYPO_AUTO_ORIGINAL:"typo_auto_original",TYPO_SUGGESTION:"typo_suggestion",UNKNOWN:"Unknown",VANILLA_GUIDE:"guide",URECS:"urecs",VIDEO:"video"}},790661:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(976534);let r=({url:e})=>{if(e){let t=e.split("?");if(t[1])return(0,i.Z)(t[1])}return(0,i.Z)()}},673687:(e,t,a)=>{a.d(t,{$f:()=>r,Cy:()=>o,DR:()=>i,Fm:()=>n,bR:()=>l,gJ:()=>s,lG:()=>c});let i=1,r=2,s=1e3,l=1e3,n=1e3,o=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),c=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4})},816933:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(883119),r=a(785893);function s({iconAccessibilityLabel:e,icon:t,linkAccessibilityLabel:a,showNavigationIcon:s,text:l,backgroundColor:n="lightGray"}){return(0,r.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,r.jsx)(i.xu,{"data-test-id":"ad-reason-icon",children:(0,r.jsx)(i.Sj,{accessibilityLabel:e,bgColor:n,icon:t,iconColor:"darkGray"})}),(0,r.jsx)(i.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,r.jsx)(i.xv,{children:l})}),s&&a&&(0,r.jsx)(i.kC,{direction:"column",justifyContent:"center",children:(0,r.jsx)(i.JO,{accessibilityLabel:a,color:"default",icon:"arrow-forward"})})]})}},523194:(e,t,a)=>{a.d(t,{DK:()=>d,K1:()=>n,nn:()=>c,we:()=>_,zn:()=>o});let i=e=>e.bt("Жен.", "Female", "waista.modal.attribute.female", undefined, true),r=e=>e.bt("Муж.", "Male", "waista.modal.attribute.male", undefined, true),s=e=>e.bt("Веб-сайт", "Web", "waista.modal.attribute.web", undefined, true),l=e=>e.bt("Мобильный браузер", "Mobile Web", "waista.modal.attribute.mWeb", undefined, true);function n(e,t){let{name:a=""}=e.find(e=>e.key===t)??{};return a}function o(e,t){return"FEMALE"===e?i(t):"MALE"===e?r(t):""}function c(e,t){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?s(t):"AppType_WEB_MOBILE"===e?l(t):""}function _(e,t){let{name:a=""}=e.find(e=>e.key===t)??{};return a}function d(e=null,t=4){return e&&Object.keys(e).filter(t=>"boolean"==typeof e[t]||"string"==typeof e[t]).filter(t=>!1!==e[t]&&""!==e[t]).slice(0,t).reduce((t,a)=>({...t,[a]:e[a]}),{})}},101736:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(667294),r=a(883119),s=a(803611),l=a(107941),n=a(144326),o=a(297728),c=a(115642),_=a(613756),d=a(785893);let g=new r.Ry(3);function u({anchor:e,children:t,displayOptions:a,onFlyoutDismiss:i}){let s=(0,n.ZP)(),{closeupWithinMasonryEnabled:_}=(0,c.x4)(),{checkExperiment:u}=(0,o.F)(),h=u("sg_dweb_sharesheet_update").anyEnabled?l.b7:void 0;return a?.shownWithinMasonry||a?.shownWithinProfileHeader?(0,d.jsx)(r.mh,{zIndex:a.shownWithinProfileHeader||_&&a?.shownWithinMasonry?g:h,children:(0,d.jsx)(r.xu,{position:a.inModal?"absolute":void 0,top:!!a.inModal||void 0,zIndex:a.inModal?l.b7:void 0,children:(0,d.jsx)(r.J2,{_deprecatedShowCaret:a.showCaret,accessibilityLabel:s.bt("Меню для предоставления общего доступа", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:a.forceDirection??!1,idealDirection:a.idealDirection??"down",onDismiss:()=>{i()},positionRelativeToAnchor:!1,size:"flexible",children:t})})}):(0,d.jsx)(r.J2,{_deprecatedShowCaret:a?.showCaret,accessibilityLabel:s.bt("Меню для предоставления общего доступа", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:a?.forceDirection??!1,idealDirection:a?.idealDirection??"down",onDismiss:()=>{i()},size:"flexible",children:t})}function h({children:e,flyoutDisplayOptions:t,isFlyoutOpen:a,loggingOptions:l,onClick:n,onFlyoutDismiss:o,onToggleFlyout:g,sendObject:h}){let A=(0,i.useRef)(null),{clientTrackingParams:m}=(0,c.x4)(),x=(0,s.Z)();return(0,d.jsxs)(r.xu,{ref:A,dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},children:[(0,d.jsx)(r.xu,{children:e({handleSendShareFlyoutButtonClick:()=>{if(x){x();return}g()}})}),a&&(0,d.jsx)(r.xu,{position:"fixed",children:(0,d.jsx)(u,{anchor:A.current,displayOptions:t,onFlyoutDismiss:o,children:(0,d.jsx)(_.Z,{clientTrackingParams:m,component:l.component,element:l.element,onExternalSend:l.onExternalSend,onHide:()=>{n?.(),o()},sendType:h.type,sharedObject:{...h,type:"user"===h.type?"pinner":h.type},viewParameter:l.viewParameter,viewType:l.viewType})})})]})}},107950:(e,t,a)=>{a.d(t,{Z:()=>A,s:()=>h});var i=a(667294),r=a(883119),s=a(144326),l=a(240760),n=a(730212),o=a(961754),c=a(383399),_=a(816933),d=a(523194),g=a(424583),u=a(785893);let h={DIGITAL_CAPTURE:0,NEGATIVE_FILM:1,POSITIVE_FILM:2,PRINT:3,MINOR_HUMAN_EDITS:4,COMPOSITE_CAPTURE:5,ALGORITHMICALLY_ENHANCED:6,DATA_DRIVEN_MEDIA:7,DIGITAL_ART:8,VIRTUAL_RECORDING:9,COMPOSITE_SYNTHETIC:10,TRAINED_ALGORITHMIC_MEDIA:11,COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA:12,ALGORITHMIC_MEDIA:13,SOFTWARE_IMAGE:14,MULTI_PIN_TRAINED_ALGORITHMIC_MEDIA:15};function A({promoterFullName:e,geoRegionAttribute:t,geoPostalCodeAttribute:a,isCustomerListMatched:h,isActalikeMatched:A,isEngagementMatched:m,isFromGPSLocation:x,matchedAgeBucket:p,matchedGender:P,matchedLocale:I,matchedDevice:f,matchedKeyword:E,isFirstPartyAdPersonalizationEnabled:b,isThirdPartyAdPersonalizationEnabled:S}){let y=(0,s.ZP)(),{id:w}=(0,c.Z)(),R=(0,g.mN)()(w??""),N=R?.gender??"",j=(0,d.zn)(P,y);j="unspecified"===N?"":j;let T=(0,d.nn)(f,y),{locale:D}=(0,n.B)(),v=(0,o.Z)({name:"LocalesResource"}),{country:O=""}=(0,c.Z)(),z=(0,o.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),L=(0,d.K1)(z.data??[],O),C=""!==p||""!==P&&"unspecified"!==N||!b&&""!==L||""!==T||""!==I||b&&m||b&&A||""!==t||b&&""!==a;return(0,u.jsx)(r.xu,{"data-test-id":"waista",children:(0,u.jsxs)(r.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[!b&&(0,u.jsx)(_.Z,{icon:"pinterest",iconAccessibilityLabel:y.bt("Значок контекста для таргетинга объявлений", "Icon for ad targeting context", "waista.modal.criteria.list.contexticon", undefined, true),text:(0,l.XB)({text:y.bt("На основе контекста содержимого, которое вы видите во время сеанса <strong id=\"1\">в Pinterest</strong>", "Based on the context of the content you see in a session <strong id=\"1\">on Pinterest</strong>", "waista.modal.criteria.list.context", undefined, true),jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-platform-bucket")}})}),""!==E&&(0,u.jsx)(_.Z,{icon:"search",iconAccessibilityLabel:y.bt("Значок поиска по ключевым словам в рамках таргетинга объявлений", "Icon for ad targeting keyword search", "waista.modal.criteria.list.keywordSearchIcon", undefined, true),text:(0,l.XB)({text:y.bt("На тему вашего поискового запроса: <strong id=\"1\">{{ keyword }}</strong>", "Because you searched for <strong id=\"1\">{{ keyword }}</strong>", "waista.modal.criteria.list.keywordSearch", undefined, true),markers:{keyword:E??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-keyword-bucket")}})}),(b||S)&&(0,u.jsx)(_.Z,{icon:"cog",iconAccessibilityLabel:y.bt("Значок настроек пользователя для таргетинга объявлений", "Icon for ad targeting user settings", "waista.modal.criteria.list.settings", undefined, true),text:y.bt("На основе ваших настроек конфиденциальности, ваших действий на платформе Pinterest и/или за ее пределами", "Depending on your privacy settings, because of your activities on and/or off Pinterest", "waista.modal.criteria.list.settings", undefined, true)}),C&&(0,u.jsx)(_.Z,{icon:"person",iconAccessibilityLabel:y.bt("Значок имени рекламодателя, связанного с таргетингом объявлений", "Icon for ad targeting advertiser name", "waista.modal.criteria.list.advertiserName", undefined, true),text:(0,l.XB)({text:y.bt("Потому что <strong id=\"1\">{{ advertiserName }}</strong> стремится охватить людей:", "Because <strong id=\"1\">{{ advertiserName }}</strong> is trying to reach people:", "waista.modal.criteria.list.advertiserName", undefined, true),markers:{advertiserName:e},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-advertiserName-bucket")}})}),(0,u.jsx)(r.xu,{marginStart:8,children:(0,u.jsxs)(r.aV,{label:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Потому что {{ advertiserName }} стремится охватить людей:", "Because {{ advertiserName }} is trying to reach people:", "waista.modal.criteria.list.advertiserName", undefined, true),markers:{advertiserName:e}})}),labelDisplay:"hidden",type:"unordered",children:[""!==p&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Которые указали свой возраст в пределах <strong id=\"1\">{{ ageBucketMatch }}</strong>", "Who have set their age within the <strong id=\"1\">{{ ageBucketMatch }}</strong> age range", "waista.modal.criteria.list.ageBucketRangeMatch", undefined, true),markers:{ageBucketMatch:p??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-age-bucket")}})})}),!b&&""!==I&&(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Которые выбрали <strong id=\"1\">{{ language }}</strong> как свой язык", "Who have set their language to <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.languageMatch", undefined, true),markers:{language:(0,d.we)(v.data??[],D)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Которые выбрали <strong id=\"1\">{{ language }}</strong> как свой язык", "Who have set their language to <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.languageMatch", undefined, true),markers:{language:(0,d.we)(v.data??[],D)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})})]}),b&&""!==I&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Основной язык: <strong id=\"1\">{{ language }}</strong>", "Primary language is <strong id=\"1\">{{ language }}</strong>", "waista.modal.criteria.list.primarylLanguageMatch", undefined, true),markers:{language:(0,d.we)(v.data??[],D)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),!b&&""!==P&&""!==j&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Которые выбрали <strong id=\"1\">{{ gender }}</strong> как свой пол", "Who have set their gender to <strong id=\"1\">{{ gender }}</strong>", "waista.modal.criteria.list.setGenderMatch", undefined, true),markers:{gender:j},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-gender")}})})}),b&&""!==P&&""!==j&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:j})}),""!==T&&(0,u.jsx)(r.aV.Item,{text:y.bt("С вашим типом устройства", "With your device type", "waista.modal.criteria.list.deviceMatch", undefined, true)}),!b&&""!==t&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("В такой стране: <strong id=\"1\">{{ country }}</strong>", "In <strong id=\"1\">{{ country }}</strong>", "waista.modal.criteria.list.countryMatch", undefined, true),markers:{country:O},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-country")}})})}),b&&""!==t&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Место проживания: <strong id=\"1\">{{ geoRegion }}</strong>", "Based in <strong id=\"1\">{{ geoRegion }}</strong>", "waista.modal.criteria.list.geoRegionMatch", undefined, true),markers:{geoRegion:t??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-geoRegion")}})})}),b&&""!==a&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("Место проживания: <strong id=\"1\">{{ geoPostalCodeAttribute }}</strong>", "Based in <strong id=\"1\">{{ geoPostalCodeAttribute }}</strong>", "waista.modal.criteria.list.geoPostalCodeAttributeMatch", undefined, true),markers:{geoPostalCodeAttribute:a??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-geoPostalCodeAttribute")}})})}),b&&m&&(0,u.jsx)(r.aV.Item,{text:y.bt("Которые взаимодействовали со своим контентом в Pinterest", "Who have interacted with their content on Pinterest", "waista.modal.criteria.list.engagementMatch", undefined, true)}),b&&A&&(0,u.jsx)(r.aV.Item,{text:(0,u.jsx)(r.xv,{children:(0,l.XB)({text:y.bt("С демографическими данными или темами, как у других клиентов рекламодателя <strong id=\"1\">{{ brandName }}</strong>", "With similar demographic or interests as other <strong id=\"1\">{{ brandName }}</strong> customers", "waista.modal.criteria.list.actAlikeMatch", undefined, true),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-act-alike")}})})})]})}),b&&h&&(0,u.jsx)(_.Z,{icon:"menu",iconAccessibilityLabel:y.bt("Значок таргетинга объявлений по пользователям из списка аудитории", "Icon for ad targeting user on an audience list", "waista.modal.criteria.list.listIcon", undefined, true),text:(0,l.XB)({text:y.bt("Потому что вы указаны в списке, предоставленном <strong id=\"1\">{{ brandName }}</strong>", "Because you are on a list provided by <strong id=\"1\">{{ brandName }}</strong>", "waista.modal.criteria.list.onCustomerListTargeting", undefined, true),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,u.jsx)(r.xv,{inline:!0,weight:"bold",children:e},"waista-customer-list")}})}),b&&x&&(0,u.jsx)(_.Z,{icon:"location",iconAccessibilityLabel:y.bt("Значок таргетинга объявлений по пользователям на основе GPS", "Icon for ad targeting user on GPS", "waista.modal.criteria.list.GPS", undefined, true),text:y.bt("На основе вашего местоположения по GPS", "Because of your GPS Location", "waista.modal.criteria.list.GPSLocation", undefined, true)})]})})}},151385:(e,t,a)=>{a.d(t,{AH:()=>_,CK:()=>c,Fc:()=>n,Wj:()=>l,Xe:()=>s,kb:()=>o,wS:()=>r,zX:()=>d});var i=a(107950);let r=(e,t,a,i)=>t||(e?e.official_user:a||i);function s({hasLinkDomain:e,hasNativeCreator:t,hasOriginPinner:a,pinDomain:i,sourceUserUsername:r,sourceUserFullName:s}){return!t&&(e||a)&&r?{pinCreditLink:`/${r}/`,pinCredit:s}:{pinCreditLink:void 0,pinCredit:!t&&e?i:""}}let l=({i18n:e,hasLinkDomain:t,hasRichMetadataArticle:a,hasRichMetadataRecipeCategorizedIngredients:i,hasRichMetadataTutorial:r,richMetadataRecipeFromAggregatedData:s})=>(!t||s)&&e.bt("Сохранено: ", "Saved by ", "Closeup pin annotation", undefined, true)||r&&e.bt("Источник: ", "Saved from ", "pin annotation", undefined, true)||i&&e.bt("Источник рецепта: ", "Recipe from ", "pin annotation", undefined, true)||a&&e.bt("Источник статьи: ", "Article from ", "pin annotation", undefined, true)||e.bt("Автор: ", "From ", "Closeup pin annotation", undefined, true);function n({i18n:e,hasRichMetadataProductOfferSummary:t,richMetadataProductName:a,richSummaryProductName:i,hasRichSummaryProductOfferSummary:r}){return t&&a||!t&&i&&r?e.bt("Продавец: ", "Product sold by ", "pin annotation", undefined, true):""}let o=({hasLinkDomain:e,richMetadata:t,richSummary:a})=>e&&!t?.recipe?.fromAggregatedData&&t?.products&&t.products[0]&&t.products[0].name&&t.products[0].offerSummary?t.products[0].offerSummary:a?.products&&a.products[0]&&a.products[0].name&&a.products[0].offerSummary?a.products[0].offerSummary:void 0,c=({hasRichMetadata:e,hasRichMetadataProducts:t,hasRichMetadataArticle:a,hasRichMetadataRecipe:i})=>e?t?144:a?141:i?145:139:140,_=e=>!!e&&!e.startsWith("https://i.pinimg.com"),d=e=>!!e&&[i.s.TRAINED_ALGORITHMIC_MEDIA,i.s.COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA].includes(e)},613756:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(667294),r=a(883119),s=a(602185),l=a(144326),n=a(750077),o=a(785893);let c=(0,i.lazy)(()=>Promise.all([a.e(36075),a.e(36060),a.e(61116)]).then(a.bind(a,790169)));function _(e){let t=(0,l.ZP)();return(0,o.jsx)(s.Z,{name:"SafeSuspense_SendObjectLoader_SendObjectWrapper",children:(0,o.jsx)(n.Z,{fallback:(0,o.jsx)(r.xu,{alignItems:"center",display:"flex",justifyContent:"center",padding:2,width:"100%",children:(0,o.jsx)(r.$j,{accessibilityLabel:t.bt("Делимся…", "Loading sharing", "Accessibility label for loading sharing UI", undefined, true),show:!0})}),children:(0,o.jsx)(c,{...e})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/77674.ru_RU-6efecdbcc75520bc.mjs.map
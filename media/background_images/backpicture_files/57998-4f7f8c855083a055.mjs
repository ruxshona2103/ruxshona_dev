"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[57998],{983272:(e,t,n)=>{function i(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>s});let a=new class{constructor(){i(this,"onResumeListeners",[]),i(this,"onPauseListeners",[]),i(this,"inExp",!1),i(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},r=e=>{if(e.isHidden){let{reason:t}=e;a.windowInFocus=!1,a.onPauseListeners.forEach(e=>e(t))}else a.windowInFocus=!0,a.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>r({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>r({isHidden:!1})),window.addEventListener("blur",()=>r({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>r({isHidden:!1})),window.addEventListener("pagehide",()=>r({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>r(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>r(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let s=a},886132:(e,t,n)=>{n.d(t,{Z:()=>N,v:()=>v});var i=n(667294),a=n(297728),r=n(630118),s=n(845729),o=n(301567),l=n(248750),d=n(353168),u=n(770975),m=n(202953),c=n(471368),p=n(438973),g=n(415787);let f=(0,s.XV)("GridProfiler"),v=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,o.VZ)(),h=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,_=(e,t)=>{if(!t){let t=(0,o.LM)();if(t===e)return f("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,o.F9)())return f("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},w=(e,t)=>{let n=0,i=0,a=0,r=0,s=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,o)=>{let l;let d=t.fileName.split(".")[0];l=e[o],d!==l?.image_signature&&(l=e.find(e=>d===e?.image_signature)),void 0===l?s+=1:l.is_promoted||l.recommendation_reason?.reason==="PROMOTED_PIN"||l?.promoter?.length?a+=1:null!==l.story_pin_data_id&&void 0!==l.story_pin_data_id?n+=1:l?.videos?.video_list?i+=1:r+=1}),{storyPinCount:n,videoCount:i,adCount:a,imageCount:r,unknownCount:s}},b=(e,t)=>{let n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)};function N({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:v=!1,includeSections:N,isPlaceholderGrid:y,stopwatchSetVisuallyCompleteResult:L,stopwatchContext:P,isAuth:E}){let C=(0,u.E)(),T=C?.getId(),I=C?.setVisuallyCompleteResult,$=({imageTimings:e})=>{L&&L(),I&&I({imageTimings:e})},[A,R]=(0,i.useState)({status:"DISABLED"}),O=(0,a.F)();(0,i.useEffect)(()=>{I||L?R({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):R({status:"DISABLED"})},[T,I,L]),(0,i.useEffect)(()=>{if("DISABLED"!==A.status&&(0,d.ZP)(`GridVisuallyCompleteProfiler_${A.status}`),f("new status",A),"LAYOUT"===A.status){let e=b("scroll",()=>{(0,d.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[A.status]),(0,p.Z)(()=>{if(!I&&!C&&!L&&!P)return;let i="",a="",d=()=>{},u=e=>{C?C.abort(e):P?.abort()};if(C){let{getMetricId:e}=C,t=e();a=t.surface,i=(0,r.KJ)(t),d=C.addBinaryAnnotation}else a="stopwatch",i=`${a}_${P?.name}`,P?.addBinaryAnnotation&&(d=P?.addBinaryAnnotation);let p=(0,o.cQ)(n,v,N);if(y&&!p.length){f("bypassing PWT run due to skeleton pin grid");return}switch(A.status){case"LAYOUT":{let t=_(A.numOfItemsChecked,e);t.complete?R({status:"TIMING",failedCount:0,pinElements:p}):500*A.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxLayoutAttempt`),u("visuallyComplete_layoutTimeout")):R({...A,failedCount:A.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,m.Cg)(),n=A.pinElements.length,r=[],o=0,p=0,v=0,h=1/0,_=0;if(A.pinElements.forEach(({element:t,fileName:n})=>{let i=e.find(e=>e.name.endsWith(n));i?i.responseEnd?(r.push(i),(0,s.v5)(t,"green"),"search"===a&&(h=Math.min(h,i.requestStart),_=Math.max(_,i.responseEnd))):(v+=1,(0,s.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(p+=1,(0,s.v5)(t,"red")):(o+=1,(0,s.v5)(t,"greenyellow"))}),o||v)100*A.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:n,incompleteCount:o,noTimingCount:p,noTimingResponseEndCount:v}}),u("visuallyComplete_timingTimeout")):R({...A,failedCount:A.failedCount+1});else{if(f(`All ${r.length} images are fetched`),t&&t.length){let e=w(t,A.pinElements);if(Object.entries(e).forEach(([e,t])=>{d(e,t,"I16"),(0,c.XJ)(e,t,"I16")}),(0,l.A9)(`${i}.pinTypes`,{tags:e}),"search"===a){let e=_-h;t[0].display_options?.num_columns_requested===0?(0,g.LY)("full_width_story_image_fetch_time_true",e,{sampleRate:1}):(0,g.LY)("full_width_story_image_fetch_time_false",e,{sampleRate:.05})}}if(E&&"search"===a){let{group:e}=O.checkExperiment("dweb_grid_loading_state");e&&(0,g.S0)("webapp.gridVisuallyComplete.loadingState",n,{sampleRate:1,tags:{group:e}})}$({imageTimings:r}),R({status:"DISABLED"}),(0,l.A9)(`images.${i}.visuallyComplete.complete`,{tags:{totalImageCount:n,noTimingCount:p}})}}}},h(A))}},471368:(e,t,n)=>{let i;n.d(t,{JG:()=>G,ud:()=>j,XJ:()=>x,ZP:()=>Q,ep:()=>F,l7:()=>W,Lg:()=>Z});var a=n(983272),r=n(486997),s=n(203643),o=n(710931);let l={appVersion:(0,o.Z)(),browserName:"",browserVersion:"",country:"",deviceType:"desktop",fullPath:"",getExperimentGroup:()=>null,isAppShell:!1,isAuthenticated:!1,isBot:!1,isForcedReload:!1,isModernBundleCapable:!1,isSocialBot:!1,locale:"",osName:"",serverData:null,stageName:"",unauthId:""},d=()=>{let e=l,t=window.innerHeight,n=window.innerWidth,i=Math.abs(window.innerHeight-t),a=window.innerHeight!==t,r=window.innerWidth!==n;window.removeEventListener("resize",d),("phone"!==e.deviceType||(r||!a||!(i<=150))&&(a||r))&&("desktop"!==e.deviceType||a||r)&&(G("windowResized"),window.removeEventListener("resize",d))};var u=n(415787);let m=null;function c(e){(0,u.QX)(`perf.not_supported.${e}`,1,{sampleRate:1})}function p(){return m||(window.performance?window.PerformanceObserver?PerformanceObserver.supportedEntryTypes?PerformanceObserver.supportedEntryTypes.includes("mark")?m=["mark","measure","now","setResourceTimingBufferSize"].reduce((e,t)=>(window.performance[t]||(c(`window_performance_${t}`),e=!1),e),!0):(c("window_PerformanceObserver_supportedEntryTypes_mark"),m=!1,!1):(c("window_PerformanceObserver_supportedEntryTypes"),m=!1,!1):(c("window_PerformanceObserver"),m=!1,!1):(c("window_performance"),m=!1,!1))}let g={dWeb:{auth:{initialPageLoad:{name:"sterling_ads_edit",constraints:["NavigationCompletev4","editFlowRendered","createFlowRendered"]}}}};var f=n(201738),v=n(845729),h=n(493651);let _=(0,v.XV)("logPerfStats"),w=({logType:e,eventName:t,value:n,tags:i,sampleRate:a,showInConsole:r})=>{let s=n||1,o=a||1,{deviceType:d,isBot:m,isSocialBot:c}=l,p=`perf.${c&&"socialBot"||m&&"bot"||"nonbot"}.${d}.${t}`,{browserName:g,browserVersion:v,isForcedReload:h,isModernBundleCapable:w}=l,b={...i||{},browserName:g,browserVersion:v?.split(".")[0]||"0",isForcedReload:h,isModernBundleCapable:w};r&&_(`${p}: ${s}`),!f.is&&("gauge"===e?(0,u.S0)(p,s,{sampleRate:f.DQ?1:o,tags:b}):"timing"===e?s<1e5&&(0,u.LY)(p,s,{sampleRate:f.DQ?1:o,tags:b}):"count"===e&&(0,u.QX)(p,s,{sampleRate:f.DQ?1:o,tags:b}))},b=({eventName:e,value:t,tags:n,sampleRate:i,showInConsole:a})=>{w({logType:"count",eventName:e,value:t,tags:n,sampleRate:i,showInConsole:a=a||f.DQ})},N=({eventName:e,value:t,tags:n,sampleRate:i,showInConsole:a})=>{w({logType:"timing",eventName:e,value:t,tags:n,sampleRate:i,showInConsole:a=a||f.DQ})},y=(e,t)=>{let n="TIMING_ERROR";b({eventName:`${n}.${e}`,tags:{handler:(0,h.H)()}}),t&&b({eventName:`${n}.${t}.${e}`})},L=(e,t)=>{let n="TIMING_ABORT";b({eventName:`${n}.${e}`,tags:{handler:(0,h.H)()}}),t&&b({eventName:`${n}.${t}.${e}`})},P=e=>{let t="TIMING_START";b({eventName:t,tags:{handler:(0,h.H)()}}),e&&b({eventName:`${t}.${e}`})},E=e=>{let t="TIMING_COMPLETE";b({eventName:t,tags:{handler:(0,h.H)()}}),e&&b({eventName:`${t}.${e}`})},C=(e="missing_constraint_name",t)=>{let n="CONSTRAINT_COMPLETE";b({eventName:`${n}.${e}`,tags:{handler:(0,h.H)()}}),t&&b({eventName:`${n}.${t}.${e}`})},T=(e,t)=>{let n="CONSTRAINT_ABORT";b({eventName:`${n}.${e}`,tags:{handler:(0,h.H)()}}),t&&b({eventName:`${n}.${t}.${e}`})},I=(e,t)=>{let n="CONSTRAINT_START";b({eventName:`${n}.${e}`,tags:{handler:(0,h.H)()}}),t&&b({eventName:`${n}.${t}.${e}`})},$=[{handler:"www/pin/[id].js",config:{mWeb:{unauth:{initialPageLoad:{name:"pin_page_interactive",constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"pin_page_interactive",constraints:["NavigationCompletev4","PinPageMainImageRendered"]},clientNavigation:{name:"pin_closeup_details",constraints:["NavigationCompletev4","PinPageMainImageRendered"]}}},dWeb:{unauth:{initialPageLoad:{name:"pin_page_interactive",constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"pin_page_interactive",constraints:["NavigationCompletev4","image","resource","button"]},clientNavigation:{name:"pin_closeup_details",constraints:["NavigationCompletev4","button","video","description","shopButton","thumbnailsLoaded","image","resource"]}}}},segments:["story_pin","product_detail_page","product_detail_page_plus"]},{handler:"www/index.js",config:{unified:{auth:{initialPageLoad:{name:"home_feed_pinteractive",constraints:["NavigationCompletev4","VisuallyComplete"]},clientNavigation:{name:"home_feed_render",constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/search/[scope].js",config:{unified:{auth:{clientNavigation:{name:"search_feed_render",constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/[username]/[slug].js",config:{unified:{unauth:{initialPageLoad:{name:"board_page_interactive",constraints:["NavigationCompletev4","VisuallyComplete"]}},auth:{initialPageLoad:{name:"board_page_interactive",constraints:["NavigationCompletev4","VisuallyComplete"]}}},dWeb:{auth:{clientNavigation:{name:"client_route_push_auth_board",constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/ideas/[interest]/[id].js",config:{unified:{unauth:{initialPageLoad:{name:"topic_page_interactive",constraints:["NavigationCompletev4","idea_module_loaded"]}}}}},{handler:"www/[username].js",config:{unified:{unauth:{initialPageLoad:{name:"other_profile",constraints:["NavigationCompletev4","VisuallyComplete"]}}}},segments:["other_profile_no_pins","own_profile","own_profile_no_pins","self_profile"]},{handler:"sterling/advertiser/[advertiserId]/ads/create.js",config:g},{handler:"sterling/advertiser/[advertiserId]/ads/duplicate.js",config:g},{handler:"sterling/advertiser/[advertiserId]/ads/review_draft.js",config:g},{handler:"sterling/advertiser/[advertiserId]/ads/edit_draft.js",config:g},{handler:"sterling/advertiser/[advertiserId]/ads/edit.js",config:g},{handler:"sterling/advertiser/[advertiserId]/reporting/[entityType].js",config:{dWeb:{auth:{initialPageLoad:{name:"sterling_reporting_details",constraints:["NavigationCompletev4","reportingTableRendered","reportingMetricsGraphDataFetched"]}}}}},{handler:"sterling/index.js",config:{dWeb:{auth:{initialPageLoad:{name:"sterling_reporting_overview",constraints:["NavigationCompletev4","activeCampaignsTableRendered","accountActivityRendered"]}}}}}],A=[],R={},O=[],S={},H={},D=!0,M=0,B=0,V=0;function k(){A=[],O=[],R={},i=null,B=0,V=0,S={},H={}}function W(e){if(p()){if(i){let t=A.indexOf(e);if(t>-1){if(A.splice(t,1),_(`${A.length} remaining constraints`),0===A.length){let e=B-V;E(i.name),N({eventName:i.name,value:e}),N({eventName:"complete",value:e,tags:{handler:(0,h.H)()}}),k()}}else y("constraint_completed_not_in_PWT_constraint_list")}else y("remove_constraint_while_no_PWT_in_progress"),O.push(e)}}function j(e,t){p()&&(S[e]||(S={...S,[e]:t||performance.now()}))}function x(e,t,n){p()&&(H[e]||(H={...H,[e]:{value:t,type:n}}))}function G(e){p()&&i&&(L(e,i.name),A.forEach(e=>{T(e,i?.name)}),k())}function Z(e){p()&&(i?(L("segmentChange",i.name),i.name=e,P(i.name),_("updating PWT name to the following segment:",e)):y("set_segment_while_no_PWT_in_progress"))}function F(e,t){if(p()){if(M+=1,i&&G("routeChange"),"POP"===e&&!1===D);else{let{isAuthenticated:e,deviceType:n}=l;(i=function({isAuthenticated:e,isInitialPageLoad:t,isMobile:n}){let i=(0,h.H)(),a=$.find(e=>i===e.handler),r=a?.config,s=r?.unified;if(s||(s=n?r?.mWeb:r?.dWeb),s){let n=e?s.auth:s.unauth;if(n){if(t&&n.initialPageLoad)return _("found isInitialPageLoad config"),_(n.initialPageLoad),n.initialPageLoad;if(!t&&n.clientNavigation)return _("found clientNavigation config"),_(n.clientNavigation),n.clientNavigation}}return _("no config found :("),null}({isAuthenticated:e,isInitialPageLoad:D,isMobile:"phone"===n}))?(V=t,P(i.name),i?.constraints.forEach(e=>{!function(e){if(p()){if(i){I(e,i.name);let t=O.indexOf(e);t>-1?O.splice(t,1):A.includes(e)||A.push(e)}else y("add_constraint_while_no_PWT_in_progress")}}(e)}),_(`${A.length} remaining constraints`)):_("No PWT config found for this route"),1===M&&(D=!1)}}}function Q({requestContext:e,traceLoggerData:t,isForcedReload:n}){if(!p())return;a.Z.onSessionPause(G),window.addEventListener("resize",d),function({requestContext:e,traceLoggerData:t,isForcedReload:n}){l={appVersion:(0,o.Z)(),browserName:e.userAgent.browserName,browserVersion:e.userAgent.browserVersion,country:e.country,deviceType:(0,r.Z)(e),fullPath:e.fullPath,getExperimentGroup:t=>e.experimentsClient.checkExperiment(t,{dangerouslySkipActivation:!0}).group||null,isAppShell:!1,isAuthenticated:e.isAuthenticated,isBot:e.isBot,isForcedReload:n,isModernBundleCapable:(0,s.Z)({browserName:e.userAgent.browserName,browserType:e.userAgent.browserType,browserVersion:e.userAgent.browserVersion,userAgentString:e.userAgent.raw}),isSocialBot:e.isSocialBot,locale:e.locale,osName:e.userAgent.osName||"",serverData:t,stageName:e.stage,unauthId:e.unauthId}}({requestContext:e,traceLoggerData:t,isForcedReload:n});let u=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{if(!e.name.startsWith("--")&&e.name.includes("constraint")){var t;!function(e,t){let n=A.indexOf(e);n>-1&&(B<t&&(B=t),R[e]=t,C(A[n],i?.name),N({eventName:`${i?.name}.constraint.${e}`,value:t}),N({eventName:`constraint.${e}`,value:t,tags:{handler:(0,h.H)()}}),W(e))}((t=e.name).includes("constraint_")?t.split("_")[1]||"":t,e.startTime)}})});u.observe({type:"mark",buffered:!0}),window.addEventListener("beforeunload",()=>{u.disconnect()})}},438973:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294);let a=(e,t)=>{let n=(0,i.useRef)(()=>{});(0,i.useEffect)(()=>{n.current=e},[e]),(0,i.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/57998-4f7f8c855083a055.mjs.map
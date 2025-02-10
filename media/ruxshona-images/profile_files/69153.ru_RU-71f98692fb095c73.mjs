"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[69153,29263],{895739:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(431705),o=r(868808),n=r(720398),a=r(319453);let s={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},d=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},c=e=>{let{campaignId:t,objectiveType:r,partialCreate:i,catalogsFeedId:o,managedClientId:a,catalogId:s,productGroupId:d,resumeLastDraft:c}=e,l={};return t&&i&&(l.campaignId=t),r&&(l.objectiveType=r),"CATALOG_SALES"===r&&o&&(l.catalogsFeedId=o),s&&(l.catalogId=s),d&&(l.productGroupId=d),a&&(l.managedClientId=a),c&&(l.resumeLastDraft=!0),(0,n.Z)("/ads/create/",l)},l=e=>{let{campaignToolPreference:t,...r}=e;return(0,n.Z)("/automated/ads/create/",r)},p={overview:()=>"/",reporting:e=>{let t=e.objectiveType||null;delete e.objectiveType;let r={...e,...d(t)};return(0,n.Z)("/reporting/campaigns/",r)},reportingAdGroup:e=>{let{campaignId:t,objectiveType:r,showAllEntities:i,adGroupId:o,message:a}=e,c={campaignIds:[t],...i?s:{},...d(r),...o?{adGroupIds:[o]}:{},message:a};return(0,n.Z)("/reporting/adgroups/",c)},campaign:e=>{let{id:t,objectiveType:r}=e;return(0,n.Z)("/reporting/adgroups/",{campaignIds:[t],...d(r)})},editCampaign:e=>e.isAutomatedCampaign?p.editAutomated({campaignId:e.id,view:"campaign"}):p.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{let{id:t,objectiveType:r,showAllEntities:i,pinPromotionId:o,campaignId:a}=e;return"TEMPORARY_SHOPPING"===r||"CATALOG_SALES"===r?(0,n.Z)("/reporting/productgroups/",{adGroupIds:[t],...d(r)}):(0,n.Z)("/reporting/ads/",{adGroupIds:[t],...d(r),...i?s:{},...o?{pinPromotionIds:[o]}:{},...a?{campaignIds:[a]}:{}})},editAdGroup:e=>e.isAutomatedCampaign?p.editAutomated({campaignId:e.id,view:"campaign"}):p.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{let{id:t,adFilter:r}=e;return(0,n.Z)("/reporting/ads/",{pinPromotionIds:[t],...r?{adFilter:r}:{}})},editPinPromotion:e=>{let t=e.isCreatingPins?{isCreatingPins:!0}:{},r=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return p.editV2({adGroupId:e.adGroupId,view:"ad",...r,...t})},productGroup:e=>{let{id:t,name:r}=e;return(0,n.Z)("/reporting/productgroups/",{productGroupIds:[t],name:r})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",bulkEdit:e=>{let{entity_level:t,ids:r}=e;return(0,n.Z)("/ads/bulk_edit/",{entity_level:t,ids:r})},productgroups:()=>"/reporting/productgroups/",productitems:()=>"/reporting/productitems/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>p.pinPromotion(e),createPreferred:e=>{switch(e.campaignToolPreference){case a.km.ADS_MANAGER:return c(e);case a.km.AUTOMATED_CAMPAIGN:return l(e);default:return(0,n.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0)}},campaignMode:e=>(0,n.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:c,createAutomated:l,editV2:e=>(0,n.Z)("/ads/edit/",e),editAutomated:e=>(0,n.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,n.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,n.Z)("/ads/duplicate/",e),audiences:e=>(0,n.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{let{page:t,subSection:r,nextStepUrl:o}=e;switch(t){case i.kM.BILLING_HISTORY:return"/billing/history/";case i.kM.ORDER_LINES:return"/billing/order_lines/";case i.kM.PROMOTIONS:return"/billing/promotions/";case i.kM.DOCUMENTS:return"/billing/documents/";case i.kM.TAX_DOCUMENTS:return"/billing/tax_documents/";case i.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:let a={};return r&&(a.section=r),o&&(a.next_step_link_url=o),(0,n.Z)("/billing/",a)}},bulk:e=>{let{subSection:t,page:r,jobStarted:o}=e||{};switch(r){case i.fm.UPLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/upload_template/",{section:t});case i.fm.DOWNLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/download_template/",{section:t});case i.fm.HISTORY:return(0,n.Z)("/bulk_editor/history/",{section:t,job_started:o});case i.fm.BULK_ID_LIBRARY:return(0,n.Z)("/bulk_editor/bulk_id_library/",{section:t});case i.fm.RESOURCES:return(0,n.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},experiments:e=>{let{page:t,id:r}=e;switch(t){case i.S9.CREATE:return"/experiments/create/";case i.S9.VIEW_RESULTS:return"/experiments/view-results/";case i.S9.VIEW_REPORT:return`/experiments/view-results/${r}`;default:return"/experiments/"}},history:e=>(0,n.Z)("/history/",e),shopping:e=>p.reporting(d("TEMPORARY_SHOPPING")),pinterest_tag:e=>{let{page:t,subSection:r,platform:o,source:a,origin:s}=e;switch(t){case i.qp.PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:return"/conversions/events-overview/";case i.qp.PINTEREST_EVENT_HISTORY:if(a)return(0,n.Z)("/conversions/event-history/",{source:a});return"/conversions/event-history/";case i.qp.CONVERSION_HEALTH:return"/conversions/health/";case i.qp.PINTEREST_TEST_EVENTS:return(0,n.Z)("/conversions/test-events/",{subPage:r,platform:o});case i.qp.PINTEREST_TAG:return(0,n.Z)("/conversions/tag/",{subPage:r,platform:o});case i.qp.PINTEREST_TAG_MANUAL_SETUP_FLOW:let d=(0,n.Z)("/conversions/tag_manual_setup/",{origin:s});if(o)return(0,n.Z)(d,{platform:o,source:a});return d;case i.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case i.qp.CONVERSION_UPLOAD:return(0,n.Z)("/conversions/upload/",{subPage:r});case i.qp.UPLOAD_HISTORY:return(0,n.Z)("/conversions/history/",{subPage:r});case i.qp.PCA_UPLOAD_HISTORY:return(0,n.Z)("/conversions/pca_history/",{subPage:r});case i.qp.PCA_UPLOAD:return(0,n.Z)("/conversions/pca_upload/",{subPage:r});case i.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:if(a||s)return(0,n.Z)("/conversions/api_manual_setup/",{source:a,origin:s});return"/conversions/api_manual_setup/";case i.qp.CONVERSIONS_API_PARTNER_SETUP_FLOW:if(a||s)return(0,n.Z)("/conversions/api_partner_setup/",{source:a,origin:s});return"/conversions/api_partner_setup/";case i.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case i.qp.PINTEREST_SETUP_API:return"/conversions/setup-api/";case i.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";case i.qp.PAYLOAD_HELPER:return"/conversions/payload-helper/";case i.qp.CONVERSIONS:return"/conversions/";case i.qp.NOCODE_CONVERSIONS_API_SETUP_FLOW:return"/conversions/pinterest_capi_connect/";case i.qp.PINTEREST_EVENT_HISTORY_CAPI_TAB:return"/conversions/event-history/#conversionsAPI";case i.qp.PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:return"/conversions/events-overview/#conversionsAPI";default:return"/conversions/tag/"}},"pin-builder":e=>(0,n.Z)("/pin-builder/",e),purchases:()=>p.reporting(d("PURCHASE")),awareness_reserved:()=>p.reporting(d("IMPRESSION")),engagement:()=>p.reporting(d("BILLABLE_ENGAGEMENT")),videos:()=>p.reporting(d("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>p.reporting(d("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>p.reporting(d("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>p.reporting(d("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,n.Z)("/reporting/preferences/",e),report_builder:e=>(0,n.Z)("/report-center/builder/",e),report_history:e=>(0,n.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,n.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,n.Z)("/report-center/download/",e),awareness:()=>p.reporting(d("AWARENESS")),traffic:()=>p.reporting(d("TRAFFIC")),app_installs:()=>p.reporting(d("APP_INSTALL")),catalog_sales:()=>p.reporting(d("CATALOG_SALES")),web_conversion:()=>p.reporting(d("WEB_CONVERSION")),video_view:()=>p.reporting(d("VIDEO_VIEW")),quick_promote:e=>(0,n.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,n.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source",campaign_insights:e=>{let t=`/campaign-insights/${e.campaignId}/`;if(e.queryParams){let{start_date:r,end_date:i,comp_start_date:n,comp_end_date:a}=e.queryParams;t+=`?${(0,o.XP)({start_date:r,end_date:i,comp_start_date:n,comp_end_date:a})}`}return t},product_group_reporting:e=>`/campaign-insights/${e.campaignId}/product-group/${e.productGroupId}`,media_planner:e=>(0,n.Z)("/media_planner/",e),ad_spend_optimizer:e=>(0,n.Z)("/msot-optimizer/",e)},u=p},729263:(e,t,r)=>{r.d(t,{default:()=>a});var i=r(895739),o=r(635258),n=r(54473);function a(e,t,r){var a;let s;if(!i.Z[e])throw Error(`unknown url key: ${e}`);r||(r={});let d=i.Z[e](r),c=(s=null,(a=r)&&(s=a.advertiserId||null),!s&&t&&(s=t.id),s),l=!!r.absolutify;return"string"==typeof c&&(d="/advertiser/"+c+d),l&&(d=(0,n.Z)(d,void 0,o.KUo)),d}},566344:(e,t,r)=>{r.d(t,{AO:()=>g,Ag:()=>n,C0:()=>d,L1:()=>u,O9:()=>h,Vi:()=>a,Wm:()=>m,YD:()=>p,kS:()=>o,oo:()=>s,p3:()=>_,vC:()=>c,vI:()=>l});var i=r(697254);let o="https://www.pinterest.com/business/hub/",n="https://www.pinterest.com/homefeed/",a="www.pinterest.com",s="https://www.pinterest.com/_/_/help",d=`${(0,i.Z)({site:"www"})}`,c=(0,i.Z)({site:"developers"}),l=`${(0,i.Z)({site:"sterling"})}`,p=`${(0,i.Z)({site:"analytics"})}`,u=`${(0,i.Z)({site:"trends"})}`,_=`${(0,i.Z)({site:"www",path:"/business/catalogs/?advertiserId="})}`,g=`${(0,i.Z)({site:"business"})}`,h=`${(0,i.Z)({site:"contactportal"})}`,m="https://www.pinterest.com/_/_/policy"},319453:(e,t,r)=>{var i;r.d(t,{TT:()=>n,UM:()=>a,_F:()=>d,f0:()=>s,km:()=>o});let o=((i={}).ADS_MANAGER="ADS_MANAGER",i.AUTOMATED_CAMPAIGN="AUTOMATED_CAMPAIGN",i),n=e=>Object.values(o).includes(e),a=(e,t)=>{let r=e.checkExperiment("adv_growth_campaign_tool_preference",{dangerouslySkipActivation:t?.skipActivation||!1});return"prod"===r.group||"enabled"===r.group||"employees"===r.group},s=(e,t)=>"holdout"===e.checkExperiment("aid_exp_campaign_tool_preference",{dangerouslySkipActivation:t?.skipActivation||!1}).group,d=e=>!s(e,{skipActivation:!0})&&a(e,{skipActivation:!0})},755884:(e,t,r)=>{r.d(t,{$v:()=>h,eN:()=>m,gf:()=>a,i7:()=>g,in:()=>p,jz:()=>d,pD:()=>s,p_:()=>n,s5:()=>l,sk:()=>I,tz:()=>u,uE:()=>_,zY:()=>c});let i="iphone",o="android_mobile",n="ipad",a="android_tablet",s="web_mobile",d=["web",s,i,n,o,a],c=["android_mobile","android_tablet","iphone","ipad","web"],l=["android_mobile","android_tablet","iphone","ipad","web"],p=["android_mobile","iphone"],u=["android_mobile","android_tablet","iphone","ipad"],_=[i,o],g=[i,o],h=[i,o,n,a],m=[i,o],I=["web",n,s,i,o,a]},872678:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(883119),o=r(144326),n=r(785893);function a(){let e=(0,o.ZP)();return(0,n.jsx)(i.JO,{accessibilityLabel:e.bt("Секретная доска", "Secret board", "Accessibility label for icon indicating a secret board", undefined, true),color:"default",icon:"lock",inline:!0})}},167210:(e,t,r)=>{r.d(t,{Cq:()=>l,Dk:()=>u,Fk:()=>o,fS:()=>c,km:()=>p,lI:()=>a,lJ:()=>n,mS:()=>d,qW:()=>s});var i=r(883119);let o=new i.Ry(1),n=3,a=new i.Ry(n),s=2,d=new i.Ry(s),c=3,l=4,p=new i.Ry(5),u=new i.Ry(100)},130763:(e,t,r)=>{r.d(t,{Z:()=>_});var i=r(883119),o=r(212515),n=r(144326),a=r(730212),s=r(872678),d=r(162779),c=r(785893);function l({cover:e,height:t,image:r,width:o}){return e?(0,c.jsx)(d.Z,{customCover:e.isCustom,height:t,imgPos:e.position||{width:0,height:0,x:0,y:0},imgUrl:e.url??"",width:o}):r?(0,c.jsx)(i.zd,{height:t,wash:!0,width:o,children:(0,c.jsx)(i.Ee,{alt:"Board collage cover image",color:"#EFEFEF",fit:"cover",naturalHeight:r.height??1,naturalWidth:r.width??1,src:r.url??""})}):(0,c.jsx)(i.xu,{color:"secondary",height:t,width:o})}var p=r(798858),u=r(575597);function _({boardThumbs:e=[],cover:t,editButton:r,isActive:d,isSecret:_,layout:g,sensitivityScreenAuxData:h,showSensitivityScreen:m=!1}){let I=(0,n.ZP)();(0,o.Q)(m?{component:13861,view_type:215,aux_data:h}:null);let{isRTL:b}=(0,a.B)(),{height:E,width:A}=(0,u.F)(g),v=Math.floor(E/2),P=Math.floor(A/3),w=t?void 0:e[0],S=e.slice(t?0:1);return(0,c.jsxs)(i.zd,{height:E,rounding:4,wash:d,width:A,children:[(0,c.jsx)(i.xu,{"aria-label":"Board",color:"default",dangerouslySetInlineStyle:{__style:m?{filter:"blur(20px)"}:{}},display:"flex",height:"100%",justifyContent:"between",width:"100%",children:(0,c.jsxs)(i.xu,{"aria-hidden":"true",dangerouslySetInlineStyle:{__style:{gap:"1px"}},display:"flex",height:"100%",justifyContent:"between",width:"100%",children:[(0,c.jsx)(l,{cover:t,height:E,image:w,width:Math.floor(A/3*2)}),(0,c.jsxs)(i.kC,{alignItems:"stretch",direction:"column",flex:"none",height:"100%",justifyContent:"between",children:[(0,c.jsx)(p.Z,{height:v,image:S[0],width:P}),(0,c.jsx)(p.Z,{height:v,image:S[1],width:P})]})]})}),_&&(0,c.jsx)(i.xu,{alignItems:"center",color:"default",display:"flex",height:32,justifyContent:"center",left:!b,marginStart:2,marginTop:2,position:"absolute",right:b,rounding:"circle",top:!0,width:32,children:(0,c.jsx)(s.Z,{})}),d&&r&&(0,c.jsx)(i.xu,{alignItems:"center",bottom:!0,color:"default",display:"flex",height:32,justifyContent:"center",left:b,marginBottom:2,marginEnd:2,position:"absolute",right:!b,rounding:"circle",width:32,children:r}),m&&(0,c.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,c.jsx)(i.X6,{align:"center",color:"light",size:"400",children:I.bt("Эта доска может содержать откровенные материалы", "This board may contain sensitive content", "profileBoardCard.boardCollage.heading", undefined, true)})})]})}},798858:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(883119),o=r(785893);function n({image:e,width:t,height:r}){return e?(0,o.jsx)(i.zd,{height:r,wash:!0,width:t,children:(0,o.jsx)(i.Ee,{alt:"Board collage image",color:"#EFEFEF",fit:"cover",naturalHeight:e.height||1,naturalWidth:e.width||1,src:e.url||""})}):(0,o.jsx)(i.xu,{color:"secondary",height:r,width:t})}},575597:(e,t,r)=>{r.d(t,{F:()=>o,m:()=>n});let i={square:{width:236,height:157},wide:{width:320,height:213}};function o(e){return i["square"===e?"square":"wide"]}function n(e){return o(e).width+16}},213347:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(883119),o=r(144326),n=r(130763),a=r(785893);function s({boardThumbs:e,isChangeBoardModal:t,isSecret:r,name:s,onNameChange:d,onVisibilityChange:c,submitError:l}){let p=(0,o.ZP)();return(0,a.jsx)(i.xu,{paddingX:8,children:(0,a.jsxs)(i.kC,{direction:"column",gap:{row:0,column:4},children:[e&&!t&&(0,a.jsx)(n.Z,{boardThumbs:e,editButton:null,isActive:!1,isSecret:!1,layout:"square"}),(0,a.jsxs)(i.kC,{direction:"column",gap:{row:0,column:2},children:[(0,a.jsx)(i.xv,{size:"100",children:p.bt("Название", "Name", "boardlessPins.createBoard.boardNameText", undefined, true)}),(0,a.jsx)(i.nv,{id:"boardName",name:"boardName",onChange:d,placeholder:p.bt("Добавьте заголовок, например «Изделия своими руками» или «Рецепты»", "Add a title, like “DIY” or “Recipes”", "boardlessPins.createBoard.boardNameTextPlaceholder", undefined, true),size:"lg",value:s})]}),(0,a.jsxs)(i.kC,{direction:"column",gap:{row:0,column:2},children:[(0,a.jsx)(i.xv,{size:"100",children:p.bt("Видимость", "Visibility", "boardlessPins.createBoard.visibilityTitle", undefined, true)}),(0,a.jsxs)(i.kC,{gap:{row:4,column:0},children:[(0,a.jsx)(i.XZ,{checked:r,id:"boardVisibility",name:"boardVisibility",onChange:c}),(0,a.jsxs)(i.kC,{direction:"column",gap:{row:0,column:1},children:[(0,a.jsx)(i.xv,{children:p.bt("Оставить доску секретной", "Keep this board secret", "boardlessPins.createBoard.visibilityCheckbox", undefined, true)}),(0,a.jsx)(i.xv,{color:"subtle",children:p.bt("Видеть можете только вы и соавторы.", "So only you and collaborators can see it.", "boardlessPins.createBoard.visibilityCheckboxInfo", undefined, true)})]})]})]}),l&&(0,a.jsx)(i.xv,{color:"error",children:l})]})})}},880560:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(468808);function o(e,t,r){return(0,i.U)("BoardResource",{options:{board_id:e,field_set_key:t,...r?{orbac_subject_id:r}:{}}})}},344502:(e,t,r)=>{r.d(t,{Z:()=>g,S:()=>_});var i=r(252071),o=r(880560),n=r(508629),a=r(701842),s=r(255507),d=r(403764),c=r(785020);let l=e=>t=>{c.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t.bt("Подождите, пока завершится предыдущее действие на доске.", "Please wait until the previous board action finishes.", " - ", undefined, true);default:return e.message}}(t,e))},p=e=>(0,a.N8)(e.sectionId?d.Z.BOARD_SECTION_PINS:d.Z.BOARDFEED,e.sectionId||e.boardId);function u(e,t){let{source:r,target:i}=e;i.boardId!==r.boardId?(t((0,o.Z)(r.boardId,"pin_count")),t((0,o.Z)(i.boardId,"pin_count"))):r.sectionId&&i.sectionId||t((0,o.Z)(i.boardId,"pin_count")),r.sectionId&&t((0,n.Z)(r.sectionId)),i.sectionId&&t((0,n.Z)(i.sectionId))}function _(e){return t=>{let{selectedPinIds:r,source:i,target:o}=e;t((0,a.EX)({feedId:i.sectionId||i.boardId,feedType:i.sectionId?d.Z.BOARD_SECTION_PINS:d.Z.BOARDFEED,itemIds:r,itemType:"pin"})),t((0,a.vX)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?d.Z.BOARD_SECTION_PINS:d.Z.BOARDFEED,itemIds:r,itemType:"pin"})),r.forEach(e=>{t((0,s.Vp)({pinId:e,boardId:o.boardId,sectionId:o.sectionId||void 0,title:o.name||""}))}),u(e,t)}}function g(e,t){return r=>{let{selectedPinIds:o,target:n}=e;return o.forEach(e=>{r((0,s.Vp)({pinId:e,boardId:n.boardId,sectionId:n.sectionId||void 0,title:n.name||""}))}),(function(e,t,r){let{inverseSelection:o,selectedPinIds:n,source:s,target:c,orbacSubjectId:u}=e;if(s.boardId===c.boardId&&(s.sectionId||null)===(c.sectionId||null))return Promise.reject();if(o){let e={board_id:s.boardId,new_board_id:c.boardId,old_section_id:s.sectionId||void 0,new_section_id:c.sectionId||void 0,pin_ids:n,orbac_subject_id:u};return i.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then(()=>Promise.all([t(p(s)),t(p(c))])).catch(l(r))}{let e=(e,r)=>{t((0,a.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?d.Z.BOARD_SECTION_PINS:d.Z.BOARDFEED,itemIds:n,itemType:"pin"})),t((0,a.vX)({feedId:r.sectionId||r.boardId,feedType:r.sectionId?d.Z.BOARD_SECTION_PINS:d.Z.BOARDFEED,itemIds:n,itemType:"pin"}))};e(s,c);let o=()=>e(c,s);if(c.boardId===s.boardId){if(c.sectionId){let e={section_id:c.sectionId,pins:n,orbac_subject_id:u};return i.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch(e=>{o(),l(r)(e)})}{let e={section_id:s.sectionId,pins:n,orbac_subject_id:u};return i.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch(e=>{o(),l(r)(e)})}}{let e={board_id:c.boardId,section_id:c.sectionId||void 0,pin_ids:n,orbac_subject_id:u};return i.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch(e=>{o(),l(r)(e)})}}})(e,r,t).then(()=>u(e,r))}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/69153.ru_RU-71f98692fb095c73.mjs.map
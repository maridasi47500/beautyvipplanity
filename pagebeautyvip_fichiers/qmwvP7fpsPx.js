if (self.CavalryLogger) { CavalryLogger.start_js(["VMLIR"]); }

__d("GroupsCometMediaPhotosTabGridItem_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"GroupsCometMediaPhotosTabGridItem_photo",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:420},a,{kind:"Literal",name:"width",value:420}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:"viewer_image",args:[a],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],type:"Photo",abstractKey:null}}();e.exports=a}),null);
__d("CometFixedGrid.react",["Locale","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.columns,e=a.gap;a=g.Children.toArray(c).filter(Boolean);c=g.Children.count(a);if(c===0)return null;var f=b("Locale").isRTL()?"marginRight":"marginLeft";return g.jsx("div",{className:"k4urcfbm lhclo0ds btwxx1t3 j83agx80",children:g.Children.map(a,function(a,b){var c,h=b%d;b=b<d;h=h===0;h=(c={},c[f]=h?0:e,c.marginTop=b?0:e,c.width="calc( (100% - "+(d-1)*e+"px) / "+d+")",c);return g.jsx("div",{style:h,children:a})})})}}),null);
__d("CometFixedMediaGrid.react",["CometFixedGrid.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.columns;a=a.gap;a=a===void 0?8:a;c=g.Children.toArray(c).filter(Boolean);var e=g.Children.count(c);if(e===0)return null;var f=e<=d,h=e-1,i=h-e%d;return g.jsx(b("CometFixedGrid.react"),{columns:d,gap:a,children:g.Children.map(c,function(a,b){var c=b%d,e=b<d,j=i===h&&b>h-d||b>i,k=c===0;c=f?c===h:c===d-1;return g.jsx("div",{className:"stjgntxs ni8dbmo4 rq0escxv t63ysoy8 linmgsc8 hop1g133 opwvks06"+(e&&k?" ue3kfks5":"")+(e&&c?" pw54ja7n":"")+(j&&k?" l82x9zwi":"")+(b===i||b===h?" uo3d90p7":""),children:a})})})}}),null);
__d("GroupsCometMediaPhotosTabGridItem.react",["fbt","CometAspectRatioContainer.react","CometImageCover.react","CometPressable.react","CometRelay","GroupsCometMediaPhotosTabGridItem_photo.graphql","React","XCometPhotoControllerRouteBuilder","recoverableViolation","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c,d,e=a.mediaSetToken;a=a.photo$key;a=b("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMediaPhotosTabGridItem_photo.graphql"),a);if(a==null)return b("recoverableViolation")("Unexpected null photo","groups_comet");var f=a==null?void 0:a.accessibility_caption,j=a==null?void 0:a.id;c=a==null?void 0:(c=a.image)==null?void 0:c.uri;d=a==null?void 0:(d=a.viewer_image)==null?void 0:d.height;a=a==null?void 0:(a=a.viewer_image)==null?void 0:a.width;if(j==null||c==null)return null;e=b("XCometPhotoControllerRouteBuilder").buildURL({fbid:j,set:(j=e)!=null?j:void 0});j={origHeight:d,origSrc:c,origWidth:a};return i.jsx(b("CometAspectRatioContainer.react"),{aspectRatio:1,children:i.jsx("div",{className:"k4urcfbm datstx6m htq0iepx","data-testid":void 0,children:i.jsx(b("CometPressable.react"),{linkProps:{passthroughProps:j,url:e},children:i.jsx(b("CometImageCover.react"),{alt:(d=f)!=null?d:g._("Image sans description disponible"),src:c})})})})}}),null);
__d("CometMediaViewerLayoutSkeleton.react",["CometNewsfeedKeyCommandWidget","CometRouteRenderType","CometScrollView.react","CometSection.react","MWChatOnMediaVisibilityOverrideContext","React","stylex","useMWIsCurrentRouteMediaViewerExperiment","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={chatSliver:{backgroundColor:"cwj9ozl2",boxShadow:"r28pvxcy",display:"j83agx80",end:"n7fi1qx3",height:"datstx6m",position:"poy2od1o",top:"be9z9djy",width:"etr7akla","@media (max-width: 799px)":{display:"sybrdicc"}},container:{display:"j83agx80",height:"datstx6m",minWidth:"g64rku83"},contentArea:{flexGrow:"buofh1pr",minHeight:"dp1hu0rb",minWidth:"nnvw5wor",position:"l9j0dhe7"},leftRail:{backgroundColor:"hybvsw6c",display:"mkhogb32",flexShrink:"pfnyh3mw",height:"datstx6m",width:"o36gj0jk","@media (min-width: 1260px)":{display:"huh2osdm"}},leftRailContainer:{backgroundColor:"hybvsw6c",bottom:"i09qtzwb",fontSize:"e9vueds3",height:"datstx6m",overflowY:"eg9m0zos",position:"l9j0dhe7",width:"k4urcfbm"},leftRailWithoutRightRail:{"@media (min-width: 900px)":{display:"tuqlycca"}},rightRail:{backgroundColor:"hybvsw6c",display:"j83agx80",flexShrink:"pfnyh3mw",minHeight:"dp1hu0rb",position:"l9j0dhe7",width:"o36gj0jk"},rightRailContainer:{display:"j83agx80",flexDirection:"cbu4d94t",maxHeight:"pad24vr5",minHeight:"kxex4u6a",position:"poy2od1o",top:"t4zy2t7z",width:"o36gj0jk","@media (max-width: 719px)":{position:"ap132fyt"}},rightRailWithChat:{width:"a5uo0l2v"},rightRailWithoutLeftRail:{"@media (min-width: 900px)":{display:"tuqlycca"}},shadowBar:{boxShadow:"roauwr9f",end:"n7fi1qx3",height:"byvelhso",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function a(a){var c=a.children,d=a.leftRail;d=d===void 0?null:d;a=a.rightRail;a=a===void 0?null:a;var e=b("CometRouteRenderType").useIsPushView(),f=b("useMWIsCurrentRouteMediaViewerExperiment")(),j=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT");f=b("MWChatOnMediaVisibilityOverrideContext").useMWChatOnMediaVisibilityOverride(f);j=j&&f;return h.jsxs(b("CometNewsfeedKeyCommandWidget").Wrapper,{xstyle:i.container,children:[d!=null?h.jsxs("div",{className:(g||(g=b("stylex")))(i.leftRail,a==null&&i.leftRailWithoutRightRail),children:[h.jsx(b("CometSection.react"),{className:(g||(g=b("stylex")))(i.leftRailContainer),children:d}),e?h.jsx("div",{className:(g||(g=b("stylex")))(i.shadowBar)}):null]}):null,h.jsx("div",{className:(g||(g=b("stylex")))(i.contentArea),children:c}),a!=null?h.jsxs("div",{className:(g||(g=b("stylex")))(i.rightRail,j&&i.rightRailWithChat,d==null&&i.rightRailWithoutLeftRail),children:[h.jsx(b("CometSection.react"),{className:(g||(g=b("stylex")))(i.rightRailContainer),children:h.jsx(b("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,children:a})}),j?h.jsx("div",{className:(g||(g=b("stylex")))(i.chatSliver)}):null,e?h.jsx("div",{className:(g||(g=b("stylex")))(i.shadowBar)}):null]}):null]})}}),null);
__d("XCometGroupMediaControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/groups/{idorvanity}/media/{?section}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometPhotoAlbumUploadControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/media/set/upload/{mediaset_token}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["LyrJX"]); }

__d("RoomsCreatePCIDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3337005606358188",metadata:{},name:"RoomsCreatePCIDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("RoomsCreatePFDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4350398865002494",metadata:{},name:"RoomsCreatePFDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useSinglePartialViewImpression",["React","usePartialViewImpression"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.onImpressionEnd,d=a.onImpressionStart,e=g.useRef(!1),f=g.useRef(!1);a=g.useCallback(function(a){if(f.current===!0)return;c&&c(a);f.current=!0},[c]);var h=g.useCallback(function(a){if(e.current===!0)return;d&&d(a);e.current=!0},[d]);return b("usePartialViewImpression")({onImpressionEnd:a,onImpressionStart:h})}}),null);
__d("TetraContextRowLink.react",["CometLink.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.external;c=c===void 0?!1:c;var d=a.linkProps,e=a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["external","linkProps","onPress"]);d=(d=d)!=null?d:{};var f=d.url;d=babelHelpers.objectWithoutPropertiesLoose(d,["url"]);d=babelHelpers["extends"]({},d,{href:f});return g.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,d,{onClick:e,target:c?"_blank":void 0}))}}),null);
__d("TetraContextRowExternalLink.react",["React","TetraContextRowLink.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx(b("TetraContextRowLink.react"),babelHelpers["extends"]({},a,{external:!0}))}}),null);
__d("RoomsCreatePCIDialog.entrypoint",["JSResourceForInteraction","RoomsCreatePCIDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("RoomsCreatePCIDialogQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("RoomsCreatePCIDialog.react").__setRef("RoomsCreatePCIDialog.entrypoint")};e.exports=a}),null);
__d("RoomsCreatePFDialog.entrypoint",["JSResourceForInteraction","RoomsCreatePFDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("RoomsCreatePFDialogQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("RoomsCreatePFDialog.react").__setRef("RoomsCreatePFDialog.entrypoint")};e.exports=a}),null);
__d("RoomsPrivacyJoinPermissionEnum",[],(function(a,b,c,d,e,f){"use strict";a={ALL_FRIENDS:"ALL_FRIENDS",ANYONE_WHO_CAN_LOAD_THE_LINK:"ANYONE_WHO_CAN_LOAD_THE_LINK",INVITED_FRIENDS:"INVITED_FRIENDS"};b=a;e.exports=b}),null);
__d("RoomsGating",["RoomsPrivacyJoinPermissionEnum","gkx","qex"],(function(a,b,c,d,e,f){"use strict";f.isNewInviteFlowEnabled=a;f.getCreationVariant=c;f.isInitiallyVisibleToAllFriends=d;f.enableVisibilityToggleOnCreationFlow=e;f.getInitialJoinPermission=g;f.shouldShowRoomsInCreateMenu=h;f.shouldEnableVideoCallForSayHi=i;f.shouldShowRoomsUnitInCometRHC=j;f.shouldShowJoinButtonInRoomsRHC=k;f.shouldUseVideoCallStirng=l;f.roomsTrayCanCollapseWithSelfRooms=m;function a(){var a;return(a=b("qex")._("1477275"))!=null?a:!1}function c(){var a=b("qex")._("1683236");switch(a){case"people_first":return"people_first";case"post_creation_invite":return"post_creation_invite";default:return"default"}}function d(){var a;return(a=b("qex")._("1696828"))!=null?a:!1}function e(){var a;return(a=b("qex")._("1696880"))!=null?a:!1}function g(){var a=b("qex")._("1708036");switch(a){case"invited_friends":return b("RoomsPrivacyJoinPermissionEnum").INVITED_FRIENDS;case"all_friends":return b("RoomsPrivacyJoinPermissionEnum").ALL_FRIENDS;case"anyone_who_can_load_the_link":return b("RoomsPrivacyJoinPermissionEnum").ANYONE_WHO_CAN_LOAD_THE_LINK;default:return b("RoomsPrivacyJoinPermissionEnum").INVITED_FRIENDS}}function h(){return b("gkx")("1859927")}function i(){var a;return(a=b("qex")._("1821439"))!=null?a:!1}function j(){var a;return(a=b("qex")._("1836352"))!=null?a:!1}function k(){var a;return(a=b("qex")._("1836353"))!=null?a:!1}function l(){var a;return(a=b("qex")._("1880075"))!=null?a:!1}function m(){var a;return(a=b("qex")._("1892306"))!=null?a:!1}}),null);
__d("useRoomsCreateDialog",["RoomsCreatePCIDialog.entrypoint","RoomsCreatePFDialog.entrypoint","RoomsGating","useCometEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){var a=b("RoomsGating").getCreationVariant(),c=b("useCometEntryPointDialog")(b("RoomsCreatePFDialog.entrypoint"),{},"button"),d=c[0],e=c[1],f=c[2],g=c[3];c=c[4];var h=b("useCometEntryPointDialog")(b("RoomsCreatePCIDialog.entrypoint"),{},"button"),i=h[0],j=h[1],k=h[2],l=h[3];h=h[4];switch(a){case"people_first":return{dialogTriggerRef:e,onHoverInPrerenderer:f,onHoverOutPrerenderer:g,onPressInPrerenderer:c,showDialog:function(a){var b=a.initialInvitedFriends,c=a.loggingData,e=a.onClose;a=a.onSave;d({initialInvitedFriends:b,loggingData:c,onSave:a},e,"comet.rooms.create")}};default:return{dialogTriggerRef:j,onHoverInPrerenderer:k,onHoverOutPrerenderer:l,onPressInPrerenderer:h,showDialog:function(a){var b=a.initialInvitedFriends,c=a.loggingData,d=a.onClose;a=a.onSave;i({initialInvitedFriends:b,loggingData:c,onSave:a},d,"comet.rooms.create")}}}}}),null);
__d("useSafeState",["React","createCancelableFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=g.useState(a);var c=a[0];a=a[1];var d=g.useRef(b("createCancelableFunction")(a));g.useEffect(function(){var a=d.current;return function(){a.cancel()}},[]);return[c,d.current]}}),null);
__d("RoomCreationFlowStartFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744286");c=b("FalcoLoggerInternal").create("room_creation_flow_start",a);e.exports=c}),null);
__d("PagesIntegrityEventTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:PagesIntegrityEventLoggerConfig")}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["6dOY9"]); }

__d("CometCompatModalUniversalResource",["JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a=b("JSResourceForInteraction")("CometCompatModalUniversal.react").__setRef("CometCompatModalUniversalResource");c=a;e.exports=c}),null);
__d("CometComposerQuiltSproutButton.react",["fbt","ix","CometComposerAttachmentPluginTypes","CometComposerSproutButton.react","React","asset","useCometComposerPushQuiltsPage","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){var c=b("useCometComposerPushQuiltsPage")(a.quiltsMetadata);a=((a=a.attachmentArea)==null?void 0:a.activeAttachmentType)==="QUILT";return i.jsx(b("CometComposerSproutButton.react"),{activeColor:"var(--fds-spectrum-grape-tint-90)",disabledIcon:h("1673593"),icon:h("1601902"),isActive:a===!0,label:g._("\u00c9crire une invite"),loggingName:"quilt_sprout",onClick:c,pluginName:b("CometComposerAttachmentPluginTypes").QUILT,testid:void 0})}c=b("withComposerViewStatePart")(a,function(a){return{attachmentArea:a.attachmentArea,quiltsMetadata:a.quiltsMetadata}});e.exports=c}),null);
__d("RoomActivityInput.react",["fbt","CometFormTextInput.react","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(a){var c=a.autoFocus,d=a.emojiSkittle,e=a.label,f=a.maxLength,i=a.onValueChange,j=a.value;a=h.useState(!1);var k=a[0],l=a[1];return h.jsx(b("CometFormTextInput.react"),{autoFocus:c,auxContent:k?h.jsx("span",{className:"pybr56ya d1544ag0",children:h.jsx(b("TetraText.react"),{color:"secondary",type:"body4",children:g._("{count} \/ {roomNameLimit}",[g._param("count",(a=j==null?void 0:j.length)!=null?a:0),g._param("roomNameLimit",f)])})}):void 0,emojiSkittle:d,label:e,maxLength:f,onBlur:function(){(j==null||j.length===0)&&l(!1)},onFocus:function(){k||l(!0)},onValueChange:i,placeholder:g._("Saisissez un nom"),value:j})}}),null);
__d("useCometTypeaheadLayoutInlineStrategyARIAProps",["React","useCometInternalTypeaheadFetch","useCometUniqueID"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.helperText;a=a.inputLabel;var d=a===void 0?"":a,e=b("useCometUniqueID")();a=b("useCometInternalTypeaheadFetch")();var f=a.isLoading,h=g.useMemo(function(){var a={"aria-label":d,role:"textbox"};c!=null&&String(c).length>0&&(a=Object.assign({},a,{"aria-describedby":e}));return a},[e,c,d]),i=g.useMemo(function(){return{"aria-busy":f,role:"none"}},[f]);return g.useMemo(function(){return{ariaDescribedByProps:{id:e},ariaInputProps:h,ariaViewProps:i}},[e,h,i])}}),null);
__d("CometTypeaheadLayoutInlineStrategy.react",["CometTypeaheadHelperText.react","CometTypeaheadInternalLayoutInlineStrategy.react","CometTypeaheadProgressGlimmer.react","React","useCometInternalTypeaheadFetch","useCometInternalTypeaheadState","useCometInternalTypeaheadStateDispatcher","useCometTypeaheadInputRefs","useCometTypeaheadInternalLayoutInlineStrategyHandlers","useCometTypeaheadLayoutInlineStrategyARIAProps"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.extraLayoutProps,e=a.helperText,f=a.label,h=a.onBlur,i=a.onChange,j=a.onDownArrow,k=a.onEnter,l=a.onEscape,m=a.onHighlightEntry,n=a.onOutsideClick,o=a.onPressEntry,p=a.onUpArrow;a=babelHelpers.objectWithoutPropertiesLoose(a,["extraLayoutProps","helperText","label","onBlur","onChange","onDownArrow","onEnter","onEscape","onHighlightEntry","onOutsideClick","onPressEntry","onUpArrow"]);var q=b("useCometInternalTypeaheadFetch")();q=q.isLoading;var r=b("useCometInternalTypeaheadState")(),s=r.activeEntries;r=r.highlightedEntry;var t=b("useCometInternalTypeaheadStateDispatcher")(),u=t.dispatchIsOpened;g.useEffect(function(){u(!0)},[u]);t=b("useCometTypeaheadInputRefs")(c);c=t.composedRef;t=t.inputRef;t=b("useCometTypeaheadInternalLayoutInlineStrategyHandlers")({inputRef:t,onBlur:h,onChange:i,onDownArrow:j,onEnter:k,onEscape:l,onHighlightEntry:m,onOutsideClick:n,onPressEntry:o,onUpArrow:p});h=b("useCometTypeaheadLayoutInlineStrategyARIAProps")({activeEntries:s,helperText:e,highlightedEntry:r,inputLabel:f,isOpened:!0});return g.jsx(b("CometTypeaheadInternalLayoutInlineStrategy.react"),babelHelpers["extends"]({},a,t,{extraLayoutProps:{afterViewContent:(i=d==null?void 0:d.afterViewContent)!=null?i:null,ariaProps:h,beforeViewContent:(j=d==null?void 0:d.beforeViewContent)!=null?j:null,helperTextComponent:e!=null?g.jsx(b("CometTypeaheadHelperText.react"),{text:e}):null,isOpened:!0,loadingIndicator:q?g.jsx(b("CometTypeaheadProgressGlimmer.react"),{}):null},label:f,ref:c}))}c=g.forwardRef(a);e.exports=c}),null);
__d("RoomsCreatePFRoomNameList_jvc.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsCreatePFRoomNameList_jvc",selections:[{args:null,kind:"FragmentSpread",name:"RoomsCreateRoomNameList_jvc"},{args:null,kind:"FragmentSpread",name:"RoomsCreateRoomNameList_fbts"}],type:"JoinableVideoChatsViewerFields",abstractKey:null};e.exports=a}),null);
__d("RoomsCreatePFRoomNameList.react",["CometPlaceholder.react","CometRelay","React","RoomsCreateConsts","RoomsCreatePFRoomNameListFooter.react","RoomsCreatePFRoomNameList_jvc.graphql","RoomsCreateRoomNameList.react","RoomsDialogLoadingState.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=g!==void 0?g:g=b("RoomsCreatePFRoomNameList_jvc.graphql"),j=56,k=56;function a(a){var c=a.jvcRef,d=a.onRoomCreated;a=a.pushPage;c=b("CometRelay").useFragment(i,c);return h.jsxs(b("CometPlaceholder.react"),{fallback:h.jsx(b("RoomsDialogLoadingState.react"),{height:b("RoomsCreateConsts").PF_DIALOG_CONTENT_HEIGHT}),children:[h.jsx(b("RoomsCreateRoomNameList.react"),{fbts:c,height:b("RoomsCreateConsts").PF_DIALOG_CONTENT_HEIGHT-j-k,jvc:c,onRoomCreated:d,pushPage:a}),h.jsx(b("RoomsCreatePFRoomNameListFooter.react"),{onRoomCreated:d,pushPage:a})]})}}),null);
__d("RoomCardImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744277");c=b("FalcoLoggerInternal").create("room_card_impression",a);e.exports=c}),null);
__d("RoomCardTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744280");c=b("FalcoLoggerInternal").create("room_card_tap",a);e.exports=c}),null);
__d("RoomCreateTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744282");c=b("FalcoLoggerInternal").create("room_create_tap",a);e.exports=c}),null);
__d("RoomCreationFlowSuccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744287");c=b("FalcoLoggerInternal").create("room_creation_flow_success",a);e.exports=c}),null);
__d("RoomEmptyCardSheetImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744293");c=b("FalcoLoggerInternal").create("room_empty_card_sheet_impression",a);e.exports=c}),null);
__d("RoomGroupRoomListViewImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744296");c=b("FalcoLoggerInternal").create("room_group_room_list_view_impression",a);e.exports=c}),null);
__d("RoomGroupRoomListViewItemTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744297");c=b("FalcoLoggerInternal").create("room_group_room_list_view_item_tap",a);e.exports=c}),null);
__d("RoomGroupRoomRhcImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744298");c=b("FalcoLoggerInternal").create("room_group_room_rhc_impression",a);e.exports=c}),null);
__d("RoomInterestTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744299");c=b("FalcoLoggerInternal").create("room_interest_tap",a);e.exports=c}),null);
__d("RoomJoinTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744302");c=b("FalcoLoggerInternal").create("room_join_tap",a);e.exports=c}),null);
__d("RoomLobbySheetImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744305");c=b("FalcoLoggerInternal").create("room_lobby_sheet_impression",a);e.exports=c}),null);
__d("RoomMessageTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744314");c=b("FalcoLoggerInternal").create("room_message_tap",a);e.exports=c}),null);
__d("RoomPromotionUnitImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744315");c=b("FalcoLoggerInternal").create("room_promotion_unit_impression",a);e.exports=c}),null);
__d("RoomPromotionUnitTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744316");c=b("FalcoLoggerInternal").create("room_promotion_unit_tap",a);e.exports=c}),null);
__d("RoomSelfCardButtonTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744320");c=b("FalcoLoggerInternal").create("room_self_card_button_tap",a);e.exports=c}),null);
__d("RoomSelfCardTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744321");c=b("FalcoLoggerInternal").create("room_self_card_tap",a);e.exports=c}),null);
__d("RoomSettingSheetImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744323");c=b("FalcoLoggerInternal").create("room_setting_sheet_impression",a);e.exports=c}),null);
__d("RoomTrayImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744329");c=b("FalcoLoggerInternal").create("room_tray_impression",a);e.exports=c}),null);
__d("RoomUpdateTapFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744332");c=b("FalcoLoggerInternal").create("room_update_tap",a);e.exports=c}),null);
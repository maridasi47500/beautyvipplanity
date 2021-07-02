if (self.CavalryLogger) { CavalryLogger.start_js(["qQ779"]); }

__d("ProfileCometActionSearchProfileHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionSearchProfileHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionSearchProfileHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionSearchProfileHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionSearchProfileHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileCometManageSectionsDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3895165277192815",metadata:{},name:"ProfileCometManageSectionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometTabs_cometProfileTabs$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"tab_key",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometTabs_cometProfileTabs$normalization",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_user",plural:!1,selections:[{alias:null,args:null,concreteType:"WoodhengeCreatorInfo",kind:"LinkedField",name:"profile_plus_woodhenge_creator_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"viewer_subscription_tier",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mentions_tab_tooltip_nux_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,concreteType:"MemorializedUserInfo",kind:"LinkedField",name:"memorialized_user_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_tributes_section",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"TimelineNavAppSectionsConnection",kind:"LinkedField",name:"timeline_nav_app_sections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineNavAppSectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TimelineAppSection",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayable_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"AllTimelineAppCollectionsConnection",kind:"LinkedField",name:"all_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineAppCollection",kind:"LinkedField",name:"nodes",plural:!0,selections:[b,a],storageKey:null}],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometTabs_cometProfileTabs.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"tab_key",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_cometProfileTabs",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_user",plural:!1,selections:[{alias:null,args:null,concreteType:"WoodhengeCreatorInfo",kind:"LinkedField",name:"profile_plus_woodhenge_creator_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"viewer_subscription_tier",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mentions_tab_tooltip_nux_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,concreteType:"MemorializedUserInfo",kind:"LinkedField",name:"memorialized_user_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_tributes_section",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TimelineNavAppSectionsConnection",kind:"LinkedField",name:"timeline_nav_app_sections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineNavAppSectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TimelineAppSection",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayable_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"AllTimelineAppCollectionsConnection",kind:"LinkedField",name:"all_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineAppCollection",kind:"LinkedField",name:"nodes",plural:!0,selections:[a],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null}],storageKey:null}],type:"ProfileDefaultTabs",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometTabs_mentions_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_mentions_nux",selections:[{args:null,kind:"FragmentSpread",name:"useMaybeNUX_nux"}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("CometUsersEntityScopedTypeaheadDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2767286330066308",metadata:{},name:"CometUsersEntityScopedTypeaheadDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometUsersEntityScopedTypeaheadDialog.entrypoint",["CometUsersEntityScopedTypeaheadDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.entityID;return{queries:{CometUsersEntityScopedTypeaheadDialogQueryRef:{parameters:b("CometUsersEntityScopedTypeaheadDialogQuery$Parameters"),variables:{entityID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometUsersEntityScopedTypeaheadDialog.react").__setRef("CometUsersEntityScopedTypeaheadDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometActionSearchProfileHandler.react",["CometRelay","CometUsersEntityScopedTypeaheadDialog.entrypoint","ProfileCometActionSearchProfileHandler_handler.graphql","React","unrecoverableViolation","useSearchCometResultsTypeaheadDialogTriggerClickHandler"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;b("React");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometActionSearchProfileHandler_handler.graphql"),a.handler);a=a.children;c=(c=c.profile_action)==null?void 0:(c=c.profile_owner)==null?void 0:c.id;if(c==null)throw b("unrecoverableViolation")("No profile owner is available when attempting to render scoped search entry point","profile_comet");c=b("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(b("CometUsersEntityScopedTypeaheadDialog.entrypoint"),c,"user");var d=c[0],e=c[1],f=c[2],h=c[3];c=c[4];return a({onHoverIn:f,onHoverOut:h,onPress:d,onPressIn:c,ref:e})}}),null);
__d("ProfileCometManageSectionsDialog.entrypoint",["JSResourceForInteraction","ProfileCometManageSectionsDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{parameters:b("ProfileCometManageSectionsDialogQuery$Parameters"),variables:{id:a}}}}},root:b("JSResourceForInteraction")("ProfileCometManageSectionsDialog.react").__setRef("ProfileCometManageSectionsDialog.entrypoint")};e.exports=a}),null);
__d("XCometProfileVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityWoodhengeSupportersURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/supporters/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("ProfileCometURIUtils",["ProfileCometContext","React","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f){"use strict";f.useIsProfileSectionActive=a;f.useURIForProfile=c;f.useURIForProfileSection=d;var g=b("React");function a(a){var c=g.useContext(b("ProfileCometContext"));c=c.profileID;var d=b("useCurrentRouteEntityKey")();c=d!=null&&d.entity_type==="profile"&&d.entity_id===c&&d.section===a;return c}function c(){var a=g.useContext(b("ProfileCometContext")),c=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return b("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(c!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:c});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function d(a){var c=g.useContext(b("ProfileCometContext")),d=c.profileID;c=c.profileVanity;if(c!=null&&c!==""){if(a==="timeline")return b("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:c});if(a==="tributes")return b("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:c});return a==="supporters"?b("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({vanity:c}):b("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:c})}if(d!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}}),null);
__d("ProfileCometTabs.react",["fbt","CometEntityHeaderTabBar.react","CometRelay","ProfileCometContext","ProfileCometManageSectionsDialog.entrypoint","ProfileCometTabs_cometProfileTabs.graphql","ProfileCometTabs_mentions_nux.graphql","ProfileCometURIUtils","ProfileCometUtils","React","requireDeferred","stylex","useCometCallout","useCometEntityKey","useCometEntryPointDialog","useMaybeNUX","useProfileEngagementData"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=b("requireDeferred")("ProfileEngagementTypedLoggerLite"),l={mentionsNux:{maxWidth:"nqmqzb3c"}};function a(a){var c,d=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTabs_cometProfileTabs.graphql"),a.cometProfileTabs);a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTabs_mentions_nux.graphql"),a.nux);d=d.profile_user;var e=j.useContext(b("ProfileCometContext")),f=e.profileID;e=e.viewerID;var m=b("useCometEntryPointDialog")(b("ProfileCometManageSectionsDialog.entrypoint"),{profileID:f},"button"),n=m[0];m[1];var o=m[2],p=m[3];m=m[4];var q=b("useProfileEngagementData")({engagement_type:"click",product_bucket:"nav_bar",subsurface:"nav_bar",surface:"timeline"}),r=b("ProfileCometUtils").isViewingSelfProfile(f,e);a=b("useMaybeNUX")(a);var s=a[0];a=a[1];c={arrowStyle:"inset",hasCloseButton:!0,label:(c=d==null?void 0:d.mentions_tab_tooltip_nux_text)!=null?c:"",onHide:a,position:"above",type:"accent",xstyle:l.mentionsNux};var t=b("useCometCallout")(c,(a=s)!=null?a:!1);s=(c=d==null?void 0:d.is_viewer_friend)!=null?c:!1;c=(a=d==null?void 0:(a=d.wem_private_sharing_bundle)==null?void 0:(c=a.private_sharing_control_model_for_user)==null?void 0:c.private_sharing_enabled)!=null?a:!1;var u=!r&&c&&!s,v=(a=b("useCometEntityKey")())==null?void 0:a.section;c=b("ProfileCometURIUtils").useURIForProfile();s=(a=d==null?void 0:(s=d.memorialized_user_info)==null?void 0:s.has_tributes_section)!=null?a:!1;var w=(a=d==null?void 0:d.is_memorialized)!=null?a:!1,x=[];a=b("ProfileCometURIUtils").useURIForProfileSection("tributes");var y=b("ProfileCometURIUtils").useIsProfileSectionActive("tributes"),z=b("ProfileCometURIUtils").useURIForProfileSection("timeline"),A=b("ProfileCometURIUtils").useIsProfileSectionActive("timeline"),B=b("ProfileCometURIUtils").useIsProfileSectionActive("pretributestimeline"),C=b("ProfileCometURIUtils").useIsProfileSectionActive("grid"),D=b("ProfileCometURIUtils").useURIForProfileSection("supporters"),E=b("ProfileCometURIUtils").useIsProfileSectionActive("supporters");s&&x.push({isActive:function(){return y},label:g._("Hommages"),linkProps:{replace:!0,url:a},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},q,{item_type:"tributes"}))})}});x.push({isActive:function(){return w?B:A||C},label:g._("Publications"),linkProps:{replace:!0,url:s?z:c},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},q,{item_type:"timeline"}))})}});((d==null?void 0:(a=d.profile_plus_woodhenge_creator_info)==null?void 0:a.viewer_subscription_tier)!=null||r&&(d==null?void 0:d.profile_plus_woodhenge_creator_info)!=null)&&x.push({isActive:function(){return E},label:g._("Plate-forme des soutiens"),linkProps:{replace:!0,url:D},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},q,{item_type:"timeline"}))})}});z=d==null?void 0:(s=d.timeline_nav_app_sections)==null?void 0:s.edges;z&&z.forEach(function(a){a=a.node;if(!a)return;var b=a.displayable_count,c=a.name,d=a.section_type,e=a.tab_key,f=a.tracking,g=a.url;if(g==null||c==null)return;var h=(a=a.all_collections)==null?void 0:a.nodes;x.push({badge:(a=b)!=null?a:void 0,isActive:function(){var a=v===e;if(a)return!0;if(v==="album"&&d==="PHOTOS")return!0;return h==null?!1:h.some(function(a){a=a.tab_key;return a===v})},label:c,linkProps:{replace:!0,url:d==="PHOTOS"&&u?null:g},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},q,{item_type:f}))})},tabRef:d==="MENTIONS"?t:void 0})});f===e&&x.push({isActive:function(){return!1},label:g._("G\u00e9rer les sections"),onHoverIn:o,onHoverOut:p,onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},q,{item_type:"manage_sections"}))}),n({profileID:f})},onPressIn:m});return j.jsx(b("CometEntityHeaderTabBar.react"),{maxTabs:6,tabs:x})}}),null);
__d("ProfileCometHeaderActionBarMenuItem_profileAction.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"icon_color",value:"fds-black"},b={kind:"Literal",name:"icon_size",value:"20"},c={kind:"Variable",name:"scale",variableName:"scale"},d=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMenuItem_profileAction",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_action_type",storageKey:null},{alias:"secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"outline"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:"active_secondary_icon",args:[a,b,{kind:"Literal",name:"icon_variant",value:"filled"},c],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],type:"ProfileAction",abstractKey:"__isProfileAction"}}();e.exports=a}),null);
__d("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"render_location"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar",selections:[{alias:null,args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"render_location"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_secondary_only",storageKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarMenuItem_profileAction"}],storageKey:null}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"};e.exports=a}),null);
__d("ProfileCometActionTrigger_action.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionTrigger_action",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileActionBlockHandler","ProfileGroupActionBlockUserFromGroupHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionContextualProfileMessageHandler","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionSetContentControlsHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionContextualProfileReportMemberNameHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler","ProfileActionManageFollowerHandler","ProfileActionInviteToFollowHandler","ProfileActionBookNowHandler"]}],concreteType:null,kind:"LinkedField",name:"client_handler",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBlockHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBlockHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionBlockUserFromGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionBlockUserFromGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionCreateDetailedReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionCreateDetailedReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionDefaultHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionDefaultHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditFriendListHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditFriendListHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionFriendRequestHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionFriendRequestHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInsightsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInsightsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionProfilePlusOnboardingHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionProfilePlusOnboardingHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileMessageHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileMessageHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerContactHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerContactHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionMessengerVideoCallHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionMessengerVideoCallHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPreferredInteractionHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPreferredInteractionHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionReportMarketplaceUserHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionReportMarketplaceHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSeeFirstHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSeeFirstHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionViewProfileTransparencyHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionViewProfileTransparencyHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionRemoveMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionRemoveMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionSearchProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionSearchProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionSetContentControlsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionSetContentControlsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionMuteMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionMuteMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionTurnOnPostApprovalForMemberHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionInviteModeratorHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionInviteModeratorHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometGroupActionLeaveGroupHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileGroupActionLeaveGroupHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionRemoveGroupAdminHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionRemoveGroupAdminHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdditionalProfileRollbackHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdditionalProfileRollbackHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionEditContextualProfileHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionEditContextualProfileHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportBioHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportBioHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionContextualProfileReportMemberNameHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionContextualProfileReportMemberNameHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionPromoteHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionPromoteHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionAdminToolsHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionAdminToolsHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionManageFollowerHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionManageFollowerHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionInviteToFollowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionInviteToFollowHandler",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometActionTrigger_action",fragmentName:"ProfileCometActionBookNowHandler_handler",fragmentPropName:"handler",kind:"ModuleImport"}],type:"ProfileActionBookNowHandler",abstractKey:null}],storageKey:'client_handler(supported:["ProfileActionBlockHandler","ProfileGroupActionBlockUserFromGroupHandler","ProfileActionCallHandler","ProfileActionCreateDetailedReportHandler","ProfileActionDefaultHandler","ProfileActionEditFriendListHandler","ProfileActionEditProfileHandler","ProfileActionFollowHandler","ProfileActionFriendRequestHandler","ProfileActionInsightsHandler","ProfileActionProfilePlusRollbackHandler","ProfileActionProfilePlusOnboardingHandler","ProfileActionMessageHandler","ProfileActionContextualProfileMessageHandler","ProfileActionMessengerContactHandler","ProfileActionMessengerVideoCallHandler","ProfileActionPreferredInteractionHandler","ProfileActionReportHandler","ProfileActionReportMarketplaceHandler","ProfileActionSeeFirstHandler","ProfileActionViewProfileTransparencyHandler","ProfileGroupActionRemoveMemberHandler","ProfileActionSearchProfileHandler","ProfileGroupActionSetContentControlsHandler","ProfileGroupActionMuteMemberHandler","ProfileGroupActionTurnOnPostApprovalForMemberHandler","ProfileGroupActionInviteAdminHandler","ProfileGroupActionInviteModeratorHandler","ProfileGroupActionLeaveGroupHandler","ProfileActionRemoveGroupAdminHandler","ProfileActionAdditionalProfileRollbackHandler","ProfileActionEditContextualProfileHandler","ProfileActionContextualProfileReportBioHandler","ProfileActionContextualProfileReportMemberNameHandler","ProfileActionPromoteHandler","ProfileActionAdminToolsHandler","ProfileActionManageFollowerHandler","ProfileActionInviteToFollowHandler","ProfileActionBookNowHandler"])'}],type:"ProfileAction",abstractKey:"__isProfileAction"};e.exports=a}),null);
__d("ProfileCometActionTrigger.react",["CometRelay","ProfileCometActionTrigger_action.graphql","ProfileCometContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.action,d=a.children,e=a.popoverPosition;a=a.source;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometActionTrigger_action.graphql"),c);var f=h.useContext(b("ProfileCometContext"));f=f.isInViewAs;return f?d({disabled:!0}):h.jsx(b("CometRelay").MatchContainer,{fallback:d({disabled:!0}),match:c.client_handler,props:{children:d,popoverPosition:e,source:a}})}}),null);
__d("ProfileCometContextualProfileContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({groupID:"",isContextualProfileView:!1,renderLocation:null,userID:""});e.exports=c}),null);
__d("ProfileCometEngagementLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({});e.exports=c}),null);
__d("useProfileEngagementData",["ProfileCometContext","ProfileCometEngagementLoggingContext","ProfileCometSession","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h="2220391788200892";function a(a){var c=g.useContext(b("ProfileCometContext")),d=g.useContext(b("ProfileCometEngagementLoggingContext")),e=b("useCurrentRoute")();return c.profileID===""?null:babelHelpers["extends"]({appid:h,profile_id_dummy:c.profileID,profile_session_id:b("ProfileCometSession").get(c.profileID,e)},d,a)}}),null);
__d("useProfileEngagementClickCallback",["React","recoverableViolation","requireDeferred","useProfileEngagementData"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("ProfileEngagementTypedLoggerLite");function a(a,c){var d=b("useProfileEngagementData")(a);d!=null&&d.product_bucket==null&&(b("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),d=babelHelpers["extends"]({},d,{product_bucket:"unknown"}));a=g.useCallback(function(a){d!=null&&(h.onReady(function(a){a=a.log;a(babelHelpers["extends"]({engagement_type:"click"},d))}),c&&c(a))},[c,d]);return a}}),null);
__d("ProfileCometHeaderActionBarMenuItem.react",["CometMenuItem.react","CometRelay","ProfileCometActionTrigger.react","ProfileCometContextualProfileContext","ProfileCometHeaderActionBarMenuItem_profileAction.graphql","React","TintableIconSource","coerceRelayImage","recoverableViolation","useProfileEngagementClickCallback"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.action;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMenuItem_profileAction.graphql"),a);var c=h.useContext(b("ProfileCometContextualProfileContext")),d=c.groupID,e=c.userID;c=c.isContextualProfileView?{event_metadata:{groupID:d},item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"contextual_profile",profile_id_dummy:e,surface:"group_contextual_profile"}:{item_subtype:(a.profile_action_type||"unknown").toLowerCase(),item_type:"more",product_bucket:"action_bar",surface:"timeline"};var f=b("useProfileEngagementClickCallback")(c),i=a.is_active===!0?a.active_secondary_icon:a.secondary_icon,j=a==null?void 0:(d=a.title)==null?void 0:d.text;if(j==null){b("recoverableViolation")("Action has no title","profile_comet");return null}if(!i){b("recoverableViolation")("Action has no icon","profile_comet");return null}return h.jsx(b("ProfileCometActionTrigger.react"),{action:a,children:function(a){var c;return h.jsx(b("CometMenuItem.react"),{disabled:a.disabled,download:(c=(c=a.linkProps)==null?void 0:c.download)!=null?c:void 0,href:(c=(c=a.linkProps)==null?void 0:c.url)!=null?c:void 0,icon:new(b("TintableIconSource"))("FB",b("coerceRelayImage")(i),20),onClick:function(b){f(),a.onPress&&a.onPress(b)},onHoverIn:a.onHoverIn,onHoverOut:a.onHoverOut,onPressIn:a.onPressIn,primaryText:j,ref:a.ref,routeTarget:(c=(c=a.linkProps)==null?void 0:c.routeTarget)!=null?c:void 0,target:(c=(c=a.linkProps)==null?void 0:c.target)!=null?c:void 0})}})}}),null);
__d("ProfileCometHeaderActionBarMoreMenu.react",["CometMenu.react","CometRelay","ProfileCometHeaderActionBarMenuItem.react","ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.actor;a=a.onClose;c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"),c);if(!c||!c.profile_actions){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}var d=c.profile_actions.findIndex(function(a){return a.is_secondary_only});d=Math.min(d===-1?Infinity:d,3);if(d>=c.profile_actions.length){b("recoverableViolation")("Rendering more menu with no actions","profile_comet");return null}c=c.profile_actions.slice(d).filter(function(a){return a!=null});return h.jsx(b("CometMenu.react"),{onClose:a,withArrow:!0,children:c.map(function(a){return h.jsx(b("ProfileCometHeaderActionBarMenuItem.react"),{action:a},a==null?void 0:a.id)})})}}),null);
__d("ProfileEngagementTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:ProfileEngagementLoggerConfig")}),null);
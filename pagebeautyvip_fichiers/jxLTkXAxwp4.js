if (self.CavalryLogger) { CavalryLogger.start_js(["2Gkow"]); }

__d("CometAlbumViewerDropdownMenuQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4259212784095605",metadata:{},name:"CometAlbumViewerDropdownMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}],type:"TimelineAppCollectionItem",abstractKey:null};e.exports=a}),null);
__d("CometAlbumViewerDropdownMenu.entrypoint",["CometAlbumViewerDropdownMenuQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.albumID;return{queries:{cometAlbumViewerDropdownMenuQueryReference:{parameters:b("CometAlbumViewerDropdownMenuQuery$Parameters"),variables:{albumID:a}}}}},root:b("JSResourceForInteraction")("CometAlbumViewerDropdownMenu.react").__setRef("CometAlbumViewerDropdownMenu.entrypoint")};c=a;e.exports=c}),null);
__d("ProfileCometAppCollectionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={collectionID:null};d=a.createContext(c);e.exports=d}),null);
__d("ProfileCometAppCollectionNullState.react",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.message;return g.jsx("div",{className:"bjjx79mm bq3qbged",children:g.jsx(b("TetraText.react"),{align:"center",color:"tertiary",type:"headlineEmphasized2",children:a})})}}),null);
__d("ProfileCometAppCollectionItemHovercardWrapper.react",["ActorHovercard.react","CometRelay","ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql","React","canRenderHovercardForGraphQLEntityType"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d=a.children;a=a.timelineAppCollectionItem;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql"),a);c=(c=a.node)!=null?c:{};var e=c.id;c=c.url;return e!=null&&c!=null&&c!==""&&b("canRenderHovercardForGraphQLEntityType")((c=a.node)==null?void 0:c.__typename)?h.jsx(b("ActorHovercard.react"),{actorID:e,children:d}):d(null)}}),null);
__d("useProfileCollectionsTailLoadLogging",["React","useCometInteractionTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a,c,d){var e=b("useCometInteractionTracing")(30605376,"fluid","TAIL_LOAD");return g.useCallback(function(){e(function(b){b.onComplete(function(a){b.addMetadata("collection_name",(a=d)!=null?a:"UNKNOWN")}),a(c)})},[d,c,a,e])}}),null);
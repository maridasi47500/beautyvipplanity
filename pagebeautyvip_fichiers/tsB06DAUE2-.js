if (self.CavalryLogger) { CavalryLogger.start_js(["Tbf9K"]); }

__d("useCometTailLoadGlimmerTracker",["IntersectionObserver","React","cr:1703077","intersectionObserverEntryIsIntersecting","performanceNow","requireCond"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a,c,d){var e=h.useRef(null),f=h.useRef(-1),i=h.useRef(-1),j=h.useRef(0),k=h.useRef(!1),l=h.useRef(null),m=h.useRef(null);b("cr:1703077")&&a!=null&&b("cr:1703077").setTailLoadStartTime(a,d);h.useEffect(function(){return function(){m.current&&m.current(),m.current=null}},[]);return h.useCallback(function(d){if(a!=null&&b("cr:1703077")&&d&&(f.current!==c||e.current!==d)){e.current=d;m.current&&(m.current(),m.current=null);if(k.current){var h=l.current;h!=null&&(j.current+=(g||(g=b("performanceNow")))()-h);l.current=(g||(g=b("performanceNow")))();k.current=!1}f.current!==c&&(j.current>0&&(b("cr:1703077").reportInterruptedConsumption(a,f.current,j.current),i.current=f.current),f.current=c,j.current=0);h=function(a){Array.prototype.forEach.call(a,function(a){if(b("intersectionObserverEntryIsIntersecting")(a)&&!k.current)k.current=!0,l.current=a.time;else if(!b("intersectionObserverEntryIsIntersecting")(a)&&k.current){k.current=!1;var c=l.current;c!=null&&(j.current+=a.time-c)}})};var n=new(b("IntersectionObserver"))(h);n.observe(d);m.current=function(){n.disconnect()}}},[a,c])}}),null);
__d("CometInfiniteScrollSuspenseList.react",["CometPagelet.react","CometPlaceholder.react","CometSuspenseList.react","JSTracing","React","cr:1142206","gkx","mergeRefs","performanceNow","requireCond","stylex","useCometTailLoadGlimmerTracker","useLayoutEffect_SAFE_FOR_SSR","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j={glimmerRoot:{overflowAnchor:"rek2kq2y"}};function k(a){var c=a.onLoadMore,d=a.rootMargin;a=a.triggerXStyle;var e=i.useRef(!1),f=i.useCallback(function(){b("cr:1142206")!=null&&b("cr:1142206").log("[onVisible] fired",{alreadyTriggered:e.current});if(e.current)return;e.current=!0;c()},[c]);d=b("useVisibilityObserver")({onVisible:f,options:{rootMargin:(f=d)!=null?f:0}});return i.jsx("div",{className:(g||(g=b("stylex")))(a),ref:d})}function a(a){var c=a.children,d=a.endGlimmerRef,e=a.hasMore,f=a.isLoading,l=a.listGlimmer,m=a.onLoadMore,n=a.pageletName,o=a.revealOrder,p=a.rootMargin;a=a.triggerXStyle;var q=i.useState(0),r=q[0],s=q[1],t=i.useRef(!1);q=i.useTransition();var u=q[0],v=i.useRef(null),w=i.useRef(0),x=e,y=i.useCallback(function(){w.current=(h||(h=b("performanceNow")))(),u(function(){b("JSTracing").clear(function(){s(function(a){return a+1}),m(v)})})},[m,u,v]);i.useEffect(function(){if(b("gkx")("1475760"))return;b("cr:1142206")!=null&&b("cr:1142206").log("[useEffect]","checking if we need to load more",{hasMore:e,isGlimmerVisible:t.current,isLoading:f});e&&!f&&t.current&&(b("cr:1142206")!=null&&b("cr:1142206").log("[useEffect]","Need to load more -- calling prioritizeOnLoadMore"),y())},[y,f,e,x]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){x||(t.current=!1)},[x]);q=i.useCallback(function(){if(b("gkx")("1475760"))return;b("cr:1142206")!=null&&b("cr:1142206").log("[onVisible] fired",{wasVisible:t.current});var a=t.current;t.current=!0;b("cr:1142206")!=null&&b("cr:1142206").log("[onVisible]","checking if we need to load more",{hasMore:e,isLoading:f,wasVisible:a});!a&&e&&!f&&(b("cr:1142206")!=null&&b("cr:1142206").log("[onVisible]","calling prioritizedOnLoadMore"),y())},[e,f,y]);var z=i.useCallback(function(){if(b("gkx")("1475760"))return;b("cr:1142206")!=null&&b("cr:1142206").log("[onHidden]","marking glimmer refs as hidden",{wasVisible:t.current});t.current=!1},[]),A=b("useVisibilityObserver")({onHidden:z,onVisible:q,options:{rootMargin:(z=p)!=null?z:0}}),B=0;q=i.Children.map(c,function(a){return a?n!=null?i.jsx(b("CometPagelet.react").Placeholder,{fallback:l,name:n,position:B++,trackTailLoad:!0,children:a}):i.jsx(b("CometPlaceholder.react"),{fallback:l,children:a}):null});z=i.useState(!1);c=z[0];var C=z[1];i.useEffect(function(){return C(!0)},[]);if(b("gkx")("1475760")&&(e&&!f&&c)){z=i.jsx(k,{onLoadMore:y,rootMargin:p,triggerXStyle:a},"tailTrigger"+r);o==="backwards"?q.unshift(z):q.push(z)}c=B;var D=b("useCometTailLoadGlimmerTracker")(n,c,w.current);p=i.useMemo(function(){return b("mergeRefs")(d,v,D,A)},[d,D,A]);return i.jsxs(i.Fragment,{children:[x&&o==="backwards"?i.jsx("div",{ref:p,children:l},"glimmerBackwards"):null,i.jsx(b("CometSuspenseList.react"),{revealOrder:o||"forwards",tail:"hidden",children:q},"list"),x&&o!=="backwards"?i.jsx("div",{className:(g||(g=b("stylex")))(b("gkx")("1386096")&&j.glimmerRoot),ref:p,children:l},"glimmer"):null]})}}),null);
__d("CometInfiniteScrollSuspenseListIncrementalRenderer.react",["CometInfiniteScrollSuspenseList.react","React","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=[1,2,2,2,4];function a(a){var c=a.children,d=a.hasMore,e=a.isLoading,f=a.onLoadMore,i=a.revealOrder;i=i===void 0?"forwards":i;var j=a.pageSizes,k=j===void 0?h:j;j=babelHelpers.objectWithoutPropertiesLoose(a,["children","hasMore","isLoading","onLoadMore","revealOrder","pageSizes"]);a=g.useState(k[0]);var l=a[0],m=a[1],n=g.useRef(1),o=g.Children.count(c);a=l<o;if(i!=="forwards")throw b("unrecoverableViolation")('CometInfiniteScrollSuspenseListIncrementalRenderer currently only supports revealOrder="forwards"',"comet_feed");var p=g.useCallback(function(a){n.current=Math.min(n.current,k.length-1);var b=k[n.current];l<o?(n.current++,m(l+b)):d&&!e&&(l===o&&(n.current++,m(l+b)),f(a))},[d,e,o,l,f,k]),q=g.useMemo(function(){return g.Children.toArray(c).slice(0,l)},[c,l]);return g.jsx(b("CometInfiniteScrollSuspenseList.react"),babelHelpers["extends"]({},j,{hasMore:d||a,isLoading:e&&!a,onLoadMore:p,revealOrder:i,children:q}))}}),null);
__d("CometFeedInfiniteScrollSuspenseList.react",["CometEventListener","CometFeedGlimmer.react","CometFeedTailLoadBufferHeight","CometInfiniteScrollSuspenseList.react","CometInfiniteScrollSuspenseListIncrementalRenderer.react","CometInteractionSourceContext","FBLogger","QuickPerformanceLogger","React","WebConnectionClassServerGuess","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.hasMore,e=a.incrementalRendering;e=e===void 0?!0:e;var f=a.incrementalRenderingPageSizes,h=a.interactionSource,i=a.isLoading,j=a.onLoadMore,k=a.pageletName,l=a.revealOrder,m=a.waitOnScrollIntent;a=g.useState(!1);var n=a[0],o=a[1];g.useEffect(function(){if(!n){var a=window.scrollY,c=b("CometEventListener").capture(window,"scroll",function(b){b.target===window.document&&window.scrollY!==a&&o(!0)});return function(){c.remove()}}},[n]);a=g.useMemo(function(){return{onVisible:function(){b("QuickPerformanceLogger").markEvent(655653,"collision_happened",7,{annotations:{bool:{had_demonstrated_scroll_intent:n},"int":{interaction_source:h}}})}}},[h,n]);a=b("useVisibilityObserver")(a);var p=g.useMemo(function(){var a;if(m===!0&&!n)return 0;var c;switch(b("WebConnectionClassServerGuess").connectionClass){case"UNKNOWN":case"EXCELLENT":default:c=b("CometFeedTailLoadBufferHeight").EXCELLENT;break;case"GOOD":c=b("CometFeedTailLoadBufferHeight").GOOD;break;case"MODERATE":c=b("CometFeedTailLoadBufferHeight").MODERATE;break;case"POOR":c=b("CometFeedTailLoadBufferHeight").POOR;break}c==null&&(b("FBLogger")("comet_feed").mustfix("Found no tail load buffer height value for the connection class `%s`. Falling back to 2500px.",b("WebConnectionClassServerGuess").connectionClass),c=2500);return a={},a[l==="backwards"?"top":"bottom"]=c,a},[l,n,m]);a={endGlimmerRef:a,hasMore:d,isLoading:i,listGlimmer:g.jsx(b("CometFeedGlimmer.react"),{}),onLoadMore:j,pageletName:k,revealOrder:l,rootMargin:p};if(e&&(l==null||l==="forwards"))return g.jsx(b("CometInteractionSourceContext").Provider,{value:h,children:g.jsx(b("CometInfiniteScrollSuspenseListIncrementalRenderer.react"),babelHelpers["extends"]({pageSizes:f},a,{children:c}))});else return g.jsx(b("CometInteractionSourceContext").Provider,{value:h,children:g.jsx(b("CometInfiniteScrollSuspenseList.react"),babelHelpers["extends"]({},a,{children:c}))})}}),null);
__d("CometHideableComponent.react",["BaseView.react","ContentVisibility","HiddenSubtreeContextProvider.react","HiddenSubtreePassiveContext","React","intersectionObserverEntryIsIntersecting","qex","stylex","unrecoverableViolation","useIntersectionObserver","useMergeRefs"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=function(){var a=null;return function(){if(a===null){var c;c=(c=document)==null?void 0:c.documentElement;if(c==null)throw b("unrecoverableViolation")("Scroll anchoring feature detection called in an environment without a documentElement","comet_infra");a=c.style.overflowAnchor!=null}return a}}();function j(){var a=h.useState(null),b=a[0],c=a[1];h.useEffect(function(){b===null&&c(function(){return i()})},[b]);return(a=b)!=null?a:!1}var k={contentVisibility:{contentVisibility:"qnk6mcem",minHeight:"ededomy5"},invisible:{display:"mkhogb32"},resetBlockFormattingContext:{display:"j83agx80",flexDirection:"cbu4d94t"},shadowPadding:{paddingTop:"jwdofwj8",paddingEnd:"n8tt0mok",paddingBottom:"r8blr3vg",paddingStart:"hyh9befq"}},l=b("ContentVisibility").CONTENT_VISIBILITY_ENABLED?{bottom:0,top:0}:{bottom:4e3,top:4e3};function a(a){a=a.children;var c=h.useRef(null),d=h.useRef(null),e=h.useContext(b("HiddenSubtreePassiveContext")),f=h.useState(!0),i=f[0],m=f[1];f=h.useState(null);var n=f[0],o=f[1];h.useEffect(function(){var a=n==null&&!i;d.current!=null&&a&&o(d.current.getBoundingClientRect().height)},[i,n]);f=function(a){var c=e.getCurrentState().hiddenOrBackgrounded_FIXME;b("intersectionObserverEntryIsIntersecting")(a)?(o(null),m(!0)):c||m(!1)};f=b("useIntersectionObserver")(f,{root:null,rootMargin:l,threshold:0});f=b("useMergeRefs")(f,c);c=!i&&n!==null?b("ContentVisibility").CONTENT_VISIBILITY_ENABLED?{containIntrinsicSize:"0 "+((c=n)!=null?c:600)+"px"}:{height:n}:null;var p=!i&&n!==null,q=j();q=q&&!b("qex")._("1609699")?f:void 0;return h.jsx("div",{className:(g||(g=b("stylex")))(k.resetBlockFormattingContext,b("ContentVisibility").CONTENT_VISIBILITY_ENABLED&&k.contentVisibility),ref:q,style:c,children:h.jsx(b("BaseView.react"),{hidden:!b("ContentVisibility").CONTENT_VISIBILITY_ENABLED&&p,ref:d,xstyle:[p&&!b("ContentVisibility").CONTENT_VISIBILITY_ENABLED&&k.invisible,b("ContentVisibility").CONTENT_VISIBILITY_ENABLED&&k.shadowPadding],children:h.jsx(b("HiddenSubtreeContextProvider.react"),{isHidden:!b("ContentVisibility").CONTENT_VISIBILITY_ENABLED&&p,children:a})})})}c=a;e.exports=c}),null);
__d("CometTailLoadDebugger",[],(function(a,b,c,d,e,f){"use strict";f.dump=a;f.log=b;var g=[];function a(){return g}function b(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];g.push([new Date().toLocaleString()].concat(b))}}),null);
__d("CometHeroFeedItem.react",["CometHeroInteractionContextPassthrough.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children;a=a.position;a=a==null||a<=1;return g.jsx(b("CometHeroInteractionContextPassthrough.react"),{clear:!a,children:c})}}),null);
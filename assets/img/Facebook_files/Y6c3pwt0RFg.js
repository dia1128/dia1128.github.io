;/*FB_PKG_DELIM*/

__d("FeedsCometFilterPanelQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5042057145904511"}),null);
__d("FeedsCometFilterPanelQuery$Parameters",["FeedsCometFilterPanelQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FeedsCometFilterPanelQuery_facebookRelayOperation"),metadata:{},name:"FeedsCometFilterPanelQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FeedsCometRoot.entrypoint",["CometHomeRootEntryPointVariables","CometModernHomeFeedQuery$Parameters","FeedsCometFilterPanelQuery$Parameters","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.sk;a=a.routeProps.feedStyle;a=d("CometHomeRootEntryPointVariables").getCometFeedVariablesForSk(a,b,!1);b=(b=c("gkx")("7218"))!=null?b:!1;return{queries:{feedQueryReference:{environmentProviderOptions:{ssrBoundary:"feed"},parameters:c("CometModernHomeFeedQuery$Parameters"),variables:a},filterQueryReference:{parameters:c("FeedsCometFilterPanelQuery$Parameters"),variables:{enableFeedsFilterNux:b}}}}},root:c("JSResourceForInteraction")("FeedsCometRoot.react").__setRef("FeedsCometRoot.entrypoint")};g["default"]=a}),98);
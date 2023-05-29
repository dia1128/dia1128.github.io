;/*FB_PKG_DELIM*/

__d("reformCometComposerTextWithEntitiesForLexical_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"reformCometComposerTextWithEntitiesForLexical_textWithEntities"};e.exports=a}),null);
__d("cometLexicalTypeToNode",["CometLexicalGenericEntityNode","Lexical"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.id,c=a.text;a=a.type;switch(a){case"Actor":case"User":case"Page":case"Event":case"Hashtag":case"PageWhatsAppNumber":case"Group":case"GroupRule":case"GroupCustomSlashCommand":return d("CometLexicalGenericEntityNode").$createCometLexicalGenericEntityNode({id:b,text:c,type:a});default:return d("Lexical").$createTextNode(c)}}g.$cometLexicalTypeToNode=a}),98);
__d("reformCometComposerLexicalEditorForLexical",["Lexical","UnicodeUtils","cometComposerLexicalCreateEditor","cometLexicalTypeToNode"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=c("cometComposerLexicalCreateEditor")();e.update(function(){var c=d("Lexical").$getRoot(),e=d("Lexical").$createParagraphNode();c.append(e);h(c,e,a,b)});return e}function h(a,b,c,e){var f=0;e.forEach(function(a){var e;e=(e=a.offset)!=null?e:0;if(e>f){var g=e-f;g=d("UnicodeUtils").substr(c,f,g);i(b,g)}g=(g=a.length)!=null?g:0;var h=d("UnicodeUtils").substr(c,e,g);h=d("cometLexicalTypeToNode").$cometLexicalTypeToNode({id:a.entity.id,isWeak:a.isWeak,text:h,type:a.entity.type});h!==null&&(b.append(h),h.select());f=e+g});if(f!==d("UnicodeUtils").strlen(c)){e=d("UnicodeUtils").substr(c,f);i(b,e);a.getChildrenSize()!==0&&a.selectEnd()}}function i(a,b){var c=b.split(/\r?\n/);if(c.length===1){b=d("Lexical").$createTextNode(b);a.append(b);return}b=c.length;for(var e=0;e<b;e++){var f=c[e];f!==""&&a.append(d("Lexical").$createTextNode(f));e!==b-1&&a.append(d("Lexical").$createLineBreakNode())}}g["default"]=a}),98);
__d("reformCometComposerTextWithEntitiesForLexical",["CometRelay","reformCometComposerLexicalEditorForLexical","reformCometComposerTextWithEntitiesForLexical_textWithEntities.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,e){a=d("CometRelay").readInlineData(h!==void 0?h:h=b("reformCometComposerTextWithEntitiesForLexical_textWithEntities.graphql"),a);var f=a.ranges;a=a.text;if(a==null)return e;var g=[];f!=null&&(f.forEach(function(a){if(a!=null&&a.offset!=null&&a.length!=null&&a.entity_is_weak_reference!=null&&a.entity!=null&&a.entity.id!=null&&a.entity.__typename!=null){var b=a.entity.__typename;g.push({entity:{id:a.entity.id,type:b},isWeak:a.entity_is_weak_reference,length:a.length,offset:a.offset})}}),g.sort(function(a,b){return a.offset-b.offset}));f=c("reformCometComposerLexicalEditorForLexical")(a,g);return babelHelpers["extends"]({lexicalEditor:f},e)}g["default"]=a}),98);
__d("adjustFaceboxPosition",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.boxSize,c=a.imageDimension;a=a.originalPos;return a<0?0:a+b>c?c-b:a}f["default"]=a}),66);
__d("CometMediaViewerComposerLexicalPlugins.react",["cr:2590","createComposerDeferredPlugin","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerIsDirtyPluginForLexical.react").__setRef("CometMediaViewerComposerLexicalPlugins.react")),j=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerEmojiPluginForLexical.react").__setRef("CometMediaViewerComposerLexicalPlugins.react")),k=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerLinksPluginForLexical.react").__setRef("CometMediaViewerComposerLexicalPlugins.react")),l=c("createComposerDeferredPlugin")(c("requireDeferred")("CometComposerMisinformationLinkDetectorPluginForLexical.react").__setRef("CometMediaViewerComposerLexicalPlugins.react")),m=c("createComposerDeferredPlugin")(c("requireDeferred")("CometMediaViewerComposerMentionsPluginForLexical.react").__setRef("CometMediaViewerComposerLexicalPlugins.react"));function a(a){var c=a.alwaysShrinkText;a=a.photoID;return h.jsxs(h.Fragment,{children:[h.jsx(k,{},"linkPlugin"),h.jsx(l,{composerType:"feed"},"misinformationLinkDetectorPlugin"),h.jsx(m,{photoID:a},"mentionsPlugin"),h.jsx(b("cr:2590"),{},"hashtagsPlugin"),h.jsx(j,{alwaysShrinkText:c},"emojiPlugin"),h.jsx(i,{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerComposerLexicalEditor.react",["fbt","CometComposerEditorForLexical.react","CometMediaViewerComposerLexicalPlugins.react","FeedComposerCometTextStyleContext","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo;function a(a){a=a.photoID;var b=j(function(){return{color:"primary-text",fontSize:15}},[]);return i.jsxs(c("FeedComposerCometTextStyleContext").Provider,{value:b,children:[i.jsx(c("CometComposerEditorForLexical.react"),{autoFocus:!0,placeholder:h._("__JHASH__cr_C5nMlTqA__JHASH__").toString(),surface:"FeedComposerCometStatusArea",textAlignment:void 0}),i.jsx(c("CometMediaViewerComposerLexicalPlugins.react"),{alwaysShrinkText:!1,photoID:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerComposerMentionsPluginForLexical.react",["CometMentionsForLexical.react","CometMentionsLayoutStrategy.react","FeedComposerCometMentionsViewItemResolver.react","cometMentionsLexicalCreateNodeStrategy","react","useCometMediaViewerComposerMentionsStrategyResolverConfig","useCometTypeaheadViewListStrategy","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.editor;a=babelHelpers.objectWithoutPropertiesLoose(a,["editor"]);return b==null?null:h.jsx(j,babelHelpers["extends"]({},a,{editor:b}))}a.displayName=a.name+" [from "+f.id+"]";function j(a){var b=a.editor;a=a.photoID;a=c("useCometMediaViewerComposerMentionsStrategyResolverConfig")(a);var d=i(function(a){switch(a.rawData.type){case"MENTION_TYPE_SELECTION":return{shouldMentionSelectedEntry:!1};case"MENTION_TYPE_RESET":return{shouldMentionSelectedEntry:!1};default:return{shouldMentionSelectedEntry:!0}}},[]),e=c("useCometTypeaheadViewListStrategy")({viewItemStrategyRenderer:c("FeedComposerCometMentionsViewItemResolver.react")});return h.jsx(c("CometMentionsForLexical.react"),{createNodeStrategy:c("cometMentionsLexicalCreateNodeStrategy"),dataSourceResolverConfig:a,editor:b,layoutStrategyRenderer:c("CometMentionsLayoutStrategy.react"),mentionsHandlerForSelectedEntry:d,viewStrategyRenderer:e})}j.displayName=j.name+" [from "+f.id+"]";b=c("withComposerViewStatePart")(a,function(a){return{editor:a.lexicalEditor}});g["default"]=b}),98);
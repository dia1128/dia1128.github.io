;/*FB_PKG_DELIM*/

__d("CometUFIDefaultRepliesListRenderer_renderer$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFIDefaultRepliesListRenderer_renderer$normalization",selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"ConstituentBadgeBannerRenderer",kind:"LinkedField",name:"constituent_badge_banner_renderer",plural:!1,selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_constituentBadgeBanner",fragmentName:"CometUFICommentingAsConstituentHeader_constituentBadgeBannerRenderer",fragmentPropName:"constituentBadgeBannerRenderer",kind:"ModuleImport"}],storageKey:null},{alias:"composer_renderer",args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometDefaultCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"DefaultContentBasedCommentListRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometLiveCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveContentBasedCommentListRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometLiveVODCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveVODContentBasedCommentListRenderer",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"have_comments_been_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"are_live_video_comments_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_muted",storageKey:null},{alias:"display_comments_count",args:null,concreteType:"DisplayCommentsConnection",kind:"LinkedField",name:"display_comments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comments_disabled_notice_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometGenericCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"GeneralCommentDisableNotice",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometGroupForumCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"GroupForumParticipantDisableNotice",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometLiveVideoCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"LiveVideoCommentDisableNotice",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"have_awards_been_disabled",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"group_post_disabled_notice",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFIDefaultRepliesListRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIDefaultRepliesListRenderer_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFIComposerWrapper_feedback"}],storageKey:null}],type:"DefaultRepliesListRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFIDefaultRepliesListRenderer.react",["CometRelay","CometUFICommentGroup.react","CometUFICommentsFilterFallbackWarning.react","CometUFICommentsPager.react","CometUFIComposer.react","CometUFIComposerWrapper.react","CometUFIDefaultRepliesListRenderer_renderer.graphql","CometUFIRepliesCollapser.react","CometUFIRepliesExpander.react","UFI2ViewOption","cr:2857","gkx","qpl","react","unrecoverableViolation","useCometInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useRef,k=c("gkx")("1341692"),l={commentRowNested:{paddingTop:"x1iorvi4",paddingEnd:"x1pi30zi",paddingBottom:"xjkvuk6",paddingStart:"xurb0ha",$$css:!0},composerNested:{paddingTop:"x1iorvi4",paddingEnd:"x1pi30zi",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0},pagerWrapper:{position:"x1n2onr6",$$css:!0},root:{marginTop:"xdj266r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"x46jau6",$$css:!0}};function a(a){var e=a.actor,f=a.editingCommentID,g=a.feedbackSource,m=a.feedLocation,n=a.focusCommentID,o=a.initialLexicalPlugins,p=a.locallyComposedCommentIds,q=a.onCommitCommentCreate,r=a.onEditCommentError,s=a.onTranslateAllClick,t=a.realtimeCommentIds,u=a.renderedTranslationCommentID,v=a.renderer,w=a.repliesListRenderProps,x=a.setEditingCommentID,y=a.setRenderedTranslationCommentID,z=a.shouldRequestTranslationForAllComments,A=a.storyRenderLocation,B=a.topLevelViewOption,C=a.viewOption;if(w.depth!==1)throw c("unrecoverableViolation")("CometUFIDefaultRepliesListRenderer: Must be rendered at depth 1","ufi2");a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFIDefaultRepliesListRenderer_renderer.graphql"),v);v=a.feedback;a=w.Selectors;var D=w.depth,E=w.getComposerProps,F=w.getFilterWarningPropsForNewerComments,G=w.getFilterWarningPropsForOlderComments,H=w.getPagerPropsForNewerComments,I=w.getPagerPropsForOlderComments,J=w.getRepliesCollapserProps,K=w.getRepliesExpanderProps,L=w.listState,M=d("UFI2ViewOption").shouldDisplayInReverse(w.viewOption),N=a.getVisibleCommentsWithHiddenCommentsCollapsed({depth:D,reverse:M,state:L}),O=a.isComposerVisible({depth:D,state:L})&&B!=="ADMIN_HIDDEN",P=a.isListExpanded({depth:D,state:L}),Q=a.isRepliesExpanderLoading({depth:D,state:L});a=a.getVisibleCommentsCount({depth:D,state:L});var R=c("useCometInteractionTracing")(c("qpl")._(30605393,"1077"),"fluid","INTERACTION","comet.ufi.load_more_comments"),S=I(),T=H(),U=j(null);L=babelHelpers["extends"]({},M?S:T,{loadMoreComments:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];R(function(a){var c=U.current;c&&a.observeMutation(c);(M?S.loadMoreComments:T.loadMoreComments).apply(void 0,b)})}});I=babelHelpers["extends"]({},M?T:S,{loadMoreComments:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];R(function(a){var c=U.current;c&&a.observeMutation(c);(M?T.loadMoreComments:S.loadMoreComments).apply(void 0,b)})}});var V=B==="RANKED_THREADED";H=function(a){return M?a.reverse():a}([F(),G()].map(function(a){return V&&i.jsx(c("CometUFICommentsFilterFallbackWarning.react"),babelHelpers["extends"]({},a,{viewOption:B,xstyle:l.commentRowNested}))}));F=H[0];G=H[1];if(!P||Q)return i.jsx("div",{className:"xdj266r xexx8yu x4uap5 x18d9i69 x46jau6",children:i.jsx(c("CometUFIRepliesExpander.react"),babelHelpers["extends"]({},K()))});H=null;O&&e!=null&&(H=v!=null&&k?i.jsx(d("CometUFIComposerWrapper.react").CometUFIComposerWrapper,{commentsListRenderProps:w,feedback:v,initialLexicalPlugins:o,onCommitCommentCreate:q,xstyle:l.composerNested}):i.jsx(c("CometUFIComposer.react"),babelHelpers["extends"]({initialLexicalPlugins:o},E(),{actor:e,commentAction:"ADD",commentID:null,depth:D,onCommit:q,xstyle:l.composerNested})));return i.jsxs("div",{className:"xdj266r xexx8yu x4uap5 x18d9i69 x46jau6",ref:U,children:[i.jsx(c("CometUFIRepliesCollapser.react"),babelHelpers["extends"]({},J())),i.jsx(c("CometUFICommentsPager.react"),babelHelpers["extends"]({},L)),F,a>0?i.jsx("ul",{children:N.map(function(a,b){return i.jsx(c("CometUFICommentGroup.react"),{actor:e,commentsListRenderProps:w,editingCommentID:f,feedLocation:m,feedbackSource:g,focusCommentID:n,groupedComments:a,initialLexicalPlugins:o,locallyComposedCommentIds:p,onCommitCommentCreate:q,onEditCommentError:r,onTranslateAllClick:s,realtimeCommentIds:t,renderedTranslationCommentID:u,setEditingCommentID:x,setRenderedTranslationCommentID:y,shouldRequestTranslationForAllComments:z,storyRenderLocation:A,viewOption:C},b)})}):null,G,i.jsx("div",{className:"x1n2onr6",children:i.jsx(c("CometUFICommentsPager.react"),babelHelpers["extends"]({},I))}),H==null||b("cr:2857")==null?H:i.jsx(b("cr:2857"),{focusRingPosition:"default",children:H})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedStoryInitiallyCollapsedContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6279039935523638"}),null);
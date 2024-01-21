(function(){'use strict';var f="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};function g(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var h=g(this);
function k(a,c){if(c)a:{var b=h;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in b))break a;b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&f(b,a,{configurable:!0,writable:!0,value:c})}}var l="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};k("Object.assign",function(a){return a||l});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self;m.feedbackV2GlobalObject=Object.assign({},m.feedbackV2GlobalObject,{localizedMessages:{getIssuePageTitleWithProductName:function(a){return(a||"Google")+" \u306b\u554f\u984c\u3092\u5831\u544a\u3059\u308b"},getSuggestionPageTitleWithProductName:function(a){return(a||"Google")+" \u306b\u30a2\u30a4\u30c7\u30a2\u3092\u63d0\u6848\u3059\u308b"},getGenericIntentTitleWithProductName:function(a){return"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092 "+(a||"Google")+" \u306b\u9001\u4fe1"},getSelectChangeScreenReaderAnnouncement:function(a){return a+
"\u3092\u9078\u629e\u4e2d"},getAriaLabelForNewTabLinks:function(a){return"\u65b0\u3057\u3044\u30bf\u30d6\u3067\u958b\u304d\u307e\u3059\u3002"+a},MSG_LARGE_PSD_VALUE_TRUNCATED:"{item}\u304c\u5207\u308a\u6368\u3066\u3089\u308c\u307e\u3057\u305f\u3002{startLink}\u30ad\u30fc\u30ef\u30fc\u30c9{endLink}",MSG_ITEM:"\u30a2\u30a4\u30c6\u30e0",MSG_VALUE:"\u5024",MSG_KEY_LIST:"\u30ad\u30fc\u306e\u4e00\u89a7",MSG_SHOW_MORE:"\u3055\u3089\u306b\u8868\u793a",MSG_ADDITIONAL_INTENTS_PAGE_QUESTION:"\u4f55\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3067\u3059\u304b\uff1f",
MSG_SUBTITLE_FEEDBACK_FORM_SUMMARY:"\u304a\u77e5\u3089\u305b\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u306e\u8a73\u7d30",MSG_ISSUE_THANK_YOU_MESSAGE:"\u304a\u9001\u308a\u3044\u305f\u3060\u3044\u305f\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u3001\u554f\u984c\u306e\u89e3\u6c7a\u3068 Google \u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584\u306b\u5f79\u7acb\u3066\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002",MSG_CTL_CHECKBOX_TEXT:"\u8a73\u7d30\u3084\u6700\u65b0\u60c5\u5831\u306b\u95a2\u3059\u308b\u30e1\u30fc\u30eb\u3092\u304a\u9001\u308a\u3055\u305b\u3066\u3044\u305f\u3060\u304f\u5834\u5408\u304c\u3042\u308a\u307e\u3059",
MSG_HELP_ARTICLES_TEXT:"\u6b21\u306e\u30d8\u30eb\u30d7\u8a18\u4e8b\u3092\u3054\u89a7\u304f\u3060\u3055\u3044",MSG_ABLE_TO_COMPLETE_THE_TASK:"\u30bf\u30b9\u30af\u5b8c\u4e86",MSG_NOT_ABLE_TO_COMPLETE_THE_TASK:"\u30bf\u30b9\u30af\u672a\u5b8c\u4e86",MSG_SUGGESTION_THANK_YOU_MESSAGE:"\u304a\u9001\u308a\u3044\u305f\u3060\u3044\u305f\u63d0\u6848\u306f\u3001Google \u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584\u306b\u5f79\u7acb\u3066\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002",MSG_THANK_YOU_TRAILING_INTERNAL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u52b9\u679c\u306f\u3001\u6b21\u306e URL \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
MSG_LEGAL_TEXT:"{startInfoLink}\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3068\u30b7\u30b9\u30c6\u30e0\u60c5\u5831{endInfoLink}\u306e\u4e00\u90e8\u304c Google \u306b\u9001\u4fe1\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3044\u305f\u3060\u3044\u305f\u60c5\u5831\u306f\u3001Google \u306e{startPrivacyLink}\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc \u30dd\u30ea\u30b7\u30fc{endPrivacyLink}\u3068{startTosLink}\u5229\u7528\u898f\u7d04{endTosLink}\u306b\u57fa\u3065\u304d\u3001\u554f\u984c\u306e\u89e3\u6c7a\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584\u306b\u5f79\u7acb\u3066\u3089\u308c\u307e\u3059\u3002\u8a73\u7d30\u3084\u6700\u65b0\u60c5\u5831\u306b\u95a2\u3059\u308b\u30e1\u30fc\u30eb\u3092\u304a\u9001\u308a\u3055\u305b\u3066\u3044\u305f\u3060\u304f\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u6cd5\u7684\u306a\u7406\u7531\u3067\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u5909\u66f4\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u308b\u5834\u5408\u306f\u3001{startLegalLink}\u6cd5\u7684\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30d8\u30eb\u30d7{endLegalLink}\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002",
MSG_ISSUE_INTENT_LABEL:"\u554f\u984c\u3092\u5831\u544a",MSG_SUGGESTION_INTENT_LABEL:"\u30a2\u30a4\u30c7\u30a2\u3092\u63d0\u6848",MSG_INACCURATE_INTENT_LABEL:"\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u6b63\u78ba\u3067\u306a\u3044",MSG_IRRELEVANT_INTENT_LABEL:"\u7121\u95a2\u4fc2\u306a\u30b3\u30f3\u30c6\u30f3\u30c4",MSG_HATE_INTENT_LABEL:"\u30d8\u30a4\u30c8\u3084\u30cf\u30e9\u30b9\u30e1\u30f3\u30c8\u306b\u8a72\u5f53\u3059\u308b\u30b3\u30f3\u30c6\u30f3\u30c4",MSG_VIOLENCE_INTENT_LABEL:"\u66b4\u529b\u7684\u307e\u305f\u306f\u5371\u967a\u306a\u30b3\u30f3\u30c6\u30f3\u30c4",
MSG_FEATURE_INTENT_LABEL:"\u30b5\u30fc\u30d3\u30b9\u306e\u30c7\u30b6\u30a4\u30f3\u307e\u305f\u306f\u6a5f\u80fd",MSG_OTHER_INTENT_LABEL:"\u305d\u306e\u4ed6",MSG_SEXUAL_INTENT_LABEL:"\u30cc\u30fc\u30c9\u3084\u6027\u7684\u306a\u30b3\u30f3\u30c6\u30f3\u30c4",MSG_PII_INTENT_LABEL:"\u6a5f\u5bc6\u6027\u306e\u9ad8\u3044\u500b\u4eba\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u3066\u3044\u308b",MSG_LEGAL_INTENT_LABEL:"\u6cd5\u5f8b\u306b\u57fa\u3065\u304f\u524a\u9664\u306b\u95a2\u3059\u308b\u554f\u984c",MSG_ISSUE_FORM_LABEL:"\u3053\u306e\u554f\u984c\u304c\u8d77\u304d\u305f\u3068\u304d\u3001\u4f55\u3092\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307e\u3057\u305f\u304b\uff1f",
MSG_GENERIC_INTENT_ISSUE_FORM_LABEL:"\u4f55\u306b\u95a2\u3059\u308b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3067\u3059\u304b\uff1f",MSG_DEFAULT_DESCRIPTION_LABEL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u5185\u5bb9\u3092\u3054\u8a18\u5165\u304f\u3060\u3055\u3044",MSG_ISSUE_CATEGORY_SELECTOR_PLACEHOLDER_TEXT:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e",MSG_DEFLECTION_CATEGORY_SELECTOR_PLACEHOLDER_TEXT:"\u30ab\u30c6\u30b4\u30ea\u3092\u9078\u629e",MSG_DEFLECTION_CATEGORY_FORM_LABEL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
MSG_FEEDBACK_CATEGORY_SELECTOR_PLACEHOLDER_TEXT:"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e",MSG_FEEDBACK_CATEGORY_FORM_LABEL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u5185\u5bb9\u306b\u6700\u3082\u5408\u3046\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",MSG_URGENCY_FORM_LABEL:"\u76ee\u7684\u306e\u64cd\u4f5c\u3092\u5b8c\u4e86\u3067\u304d\u307e\u3057\u305f\u304b\uff1f",ISSUE_OTHER_DISPLAY_VALUE_IN_ENGLISH:"Other",MSG_ISSUE_OTHER_DISPLAY_VALUE:"\u305d\u306e\u4ed6",
MSG_ABLE_TO_COMPLETE_TASK:"\u306f\u3044",MSG_UNABLE_TO_COMPLETE_TASK:"\u3044\u3044\u3048",MSG_ISSUE_DESCRIPTION_HELPER_TEXT:"\u500b\u4eba\u60c5\u5831\u306f\u542b\u3081\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044",MSG_OPTIONAL_FIELD:"\uff08\u7701\u7565\u53ef\uff09",MSG_REQUIRED_FIELD:"\uff08\u5fc5\u9808\uff09",MSG_ISSUE_DESCRIPTION_PLACEHOLDER_TEXT:"\u767a\u751f\u3057\u305f\u73fe\u8c61\u3084\u3001\u60f3\u5b9a\u3068\u7570\u306a\u308b\u52d5\u4f5c\u306b\u3064\u3044\u3066\u3054\u8aac\u660e\u304f\u3060\u3055\u3044",
MSG_GENERIC_INTENT_DESCRIPTION_PLACEHOLDER_TEXT:"\u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584\u6848\u3092\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044",MSG_DEFAULT_DESCRIPTION_PLACEHOLDER_TEXT:"\u554f\u984c\u3068\u601d\u308f\u308c\u308b\u70b9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044\u3002",MSG_SUGGESTION_DESCRIPTION_PLACEHOLDER_TEXT:"\u30b5\u30fc\u30d3\u30b9\u306e\u6539\u5584\u6848\u3092\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044",MSG_ISSUE_DESCRIPTION_FORM_LABEL:"\u554f\u984c\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044",
MSG_SUGGESTION_DESCRIPTION_FORM_LABEL:"\u3054\u63d0\u6848\u306e\u5185\u5bb9\u3092\u3054\u8a18\u5165\u304f\u3060\u3055\u3044",MSG_GENERIC_INTENT_DESCRIPTION_FORM_LABEL:"\u554f\u984c\u3084\u63d0\u6848\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044",MSG_SUBMIT_BUTTON_LABEL:"\u9001\u4fe1",MSG_NEXT_BUTTON_LABEL:"\u6b21\u3078",MSG_CONTINUE_FEEDBACK_BUTTON_LABEL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u7d9a\u884c",MSG_SCREENSHOT_CHECKBOX_LABEL:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u542b\u3081\u308b",
MSG_SCREENSHOT_CHECKBOX_DESCRIPTION_SUGGESTION:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u305f\u3060\u304f\u3068\u3001\u30a2\u30a4\u30c7\u30a2\u3092\u628a\u63e1\u3059\u308b\u3046\u3048\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002",MSG_SCREENSHOT_CHECKBOX_DESCRIPTION_ISSUE:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u305f\u3060\u304f\u3068\u3001\u554f\u984c\u3092\u628a\u63e1\u3059\u308b\u3046\u3048\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002",
MSG_SCREENSHOT_CHECKBOX_DESCRIPTION_GENERIC:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u305f\u3060\u304f\u3068\u3001\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u628a\u63e1\u3059\u308b\u3046\u3048\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002",MSG_MAY_CONTACT:"\u8a73\u3057\u3044\u60c5\u5831\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u3054\u9023\u7d61\u3092\u5dee\u3057\u4e0a\u3052\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059",getSubmitWithEmail:function(a){return a+
" \u3068\u3057\u3066\u9001\u4fe1"},MSG_SUBMIT_WITHOUT_EMAIL:"\u533f\u540d\u3067\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002",MSG_INFO_PAGE_HEADER:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u3059\u308b\u60c5\u5831",MSG_PRODUCT_DATA:"\u5546\u54c1\u30c7\u30fc\u30bf",MSG_BROWSER_INFO:"\u30d6\u30e9\u30a6\u30b6\u60c5\u5831",MSG_ACCOUNT_INFO:"\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831",MSG_EMAIL_ID_LABEL_INFO_PAGE:"\u30e1\u30fc\u30eb ID",MSG_BINARY_DATA:"\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf",
MSG_PAGE_INFO:"\u30da\u30fc\u30b8\u60c5\u5831",MSG_PAGE_STRUCTURE:"\u30da\u30fc\u30b8\u69cb\u9020",MSG_NO_VALUE_SET:"\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093",MSG_SCREENSHOT:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",MSG_WARNING:"\u8b66\u544a",MSG_HELP:"\u30d8\u30eb\u30d7",MSG_REMOVE_SCREENSHOT:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u524a\u9664",MSG_ANNOUNCEMENT_DELETED_SCREENSHOT:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3057\u305f",
MSG_ANNOUNCEMENT_SUBMITTING:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002",MSG_ANNOUNCEMENT_NEXT_PAGE_NAVIGATION:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u9032\u307f\u307e\u3059",MSG_SCREENSHOT_TAKEN:"\u6dfb\u4ed8\u3055\u308c\u305f\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",MSG_CAPTURE_SCREENSHOT:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u30ad\u30e3\u30d7\u30c1\u30e3",MSG_UPLOAD_SCREENSHOT:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9",
MSG_CLOSE_FRE_TOOLTIP:"OK",MSG_CLOSE_JUNK_TOOLTIP:"OK",MSG_NEXT_FRE_TOOLTIP:"\u6b21\u3078",MSG_PREVIOUS_FRE_TOOLTIP:"\u524d\u3078",MSG_DONE:"\u5b8c\u4e86",MSG_CANCEL:"\u30ad\u30e3\u30f3\u30bb\u30eb",MSG_HIGHLIGHT:"\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a",MSG_HIGHLIGHT_OR_HIDE_INFO:"\u60c5\u5831\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u307e\u305f\u306f\u975e\u8868\u793a",MSG_HIDE:"\u975e\u8868\u793a\u306b\u3059\u308b",MSG_CLOSE:"\u9589\u3058\u308b",MSG_HIGHLIGHT_BUTTON:"\u554f\u984c\u306e\u7b87\u6240\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3057\u307e\u3059",
MSG_HIDE_BUTTON:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u60c5\u5831\u3092\u96a0\u3057\u307e\u3059",MSG_BACK:"\u623b\u308b",MSG_TOOLTIP_FOR_DISABLED_FOOTER_BUTTON:"\u300c\u7701\u7565\u53ef\u300d\u306e\u8cea\u554f\u3092\u9664\u304d\u3001\u3059\u3079\u3066\u306e\u8cea\u554f\u306f\u5fc5\u9808\u3067\u3059",MSG_ARIA_LABEL_DISABLED_FOOTER_BUTTON:"\u9001\u4fe1\u30dc\u30bf\u30f3\u306f\u7121\u52b9\u3067\u3059\u3002\u300c\u7701\u7565\u53ef\u300d\u306e\u8cea\u554f\u3092\u9664\u304d\u3001\u3059\u3079\u3066\u306e\u8cea\u554f\u306f\u5fc5\u9808\u3067\u3059",
MSG_ARIA_LABEL_DISABLED_NEXT_BUTTON:"[\u6b21\u3078]\u30dc\u30bf\u30f3\u306f\u7121\u52b9\u3067\u3059\u3002\u300c\u7701\u7565\u53ef\u300d\u306e\u8cea\u554f\u3092\u9664\u304d\u3001\u3059\u3079\u3066\u306e\u8cea\u554f\u306f\u5fc5\u9808\u3067\u3059",MSG_TOOLTIP_ON_SEND_BUTTON:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1",MSG_ARIA_LABEL_DISABLED_CONTINUE_BUTTON:"\u7d9a\u884c\u30dc\u30bf\u30f3\u3001\u73fe\u5728\u7121\u52b9\u3067\u3059\u3002\u7d9a\u884c\u3059\u308b\u306b\u306f\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
MSG_ON_DEFLECTION_PAGE_CONTINUE_FOOTER:"[\u7d9a\u884c] \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3053\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9589\u3058\u3001\u6b21\u306e\u64cd\u4f5c\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044",MSG_ON_DEFLECTION_PAGE_CONTINUE_BUTTON:"\u7d9a\u884c",MSG_ARIA_LABEL_DEFLECTION_PAGE_CONTINUE_BUTTON:"\u65b0\u3057\u3044\u30bf\u30d6\u3067\u7d9a\u884c",MSG_TOOLTIP_ON_CONTINUE_FEEDBACK_BUTTON:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u9001\u4fe1\u306b\u79fb\u52d5",
MSG_SUBMIT_FAILURE_SNACKBAR:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",MSG_NEXT_NAVIGATION_FAILURE_SNACKBAR:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u9032\u3081\u307e\u305b\u3093\u3067\u3057\u305f",MSG_SUBMIT_FAILURE_SNACKBAR_GOOGLER:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3053\u306e\u554f\u984c\u304c\u7e70\u308a\u8fd4\u3057\u767a\u751f\u3059\u308b\u5834\u5408\u306f\u3001\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af \u30c4\u30fc\u30eb\u306b\u554f\u984c\u304c\u3042\u308b\u3053\u3068\u3092 go/aloha-bug \u3067\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
MSG_TOOLTIP_ON_HELP_ICON:"\u6a5f\u5bc6\u60c5\u5831\u3068\u306f\u3001\u4fdd\u8b77\u3059\u3079\u304d\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u3092\u6307\u3057\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u30af\u30ec\u30b8\u30c3\u30c8 \u30ab\u30fc\u30c9\u756a\u53f7\u3001\u500b\u4eba\u60c5\u5831\u306f\u542b\u3081\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002",MSG_TOOLTIP_ON_HELP_ICON_PLACEHOLDER:"\u30c0\u30d6\u30eb\u30bf\u30c3\u30d7\u3059\u308b\u3068\u6a5f\u5bc6\u60c5\u5831\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
MSG_THANK_YOU_PAGE_HEADER:"\u30ec\u30dd\u30fc\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\u3002",MSG_SUGGESTION_THANK_YOU_PAGE_HEADER:"\u63d0\u6848\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\u3002",MSG_HELP_ARTICLES_HEADER:"\u304a\u3059\u3059\u3081\u306e\u30d8\u30eb\u30d7\u8a18\u4e8b",MSG_FIRST_RUN_EXPERIENCE_HEADING:"\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059",
MSG_FIRST_RUN_EXPERIENCE_SUB_HEADING:"\u7de8\u96c6\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u554f\u984c\u306e\u7b87\u6240\u306b\u30de\u30fc\u30af\u3092\u4ed8\u3051\u305f\u308a\u3001\u60c5\u5831\u3092\u96a0\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",MSG_FRE_SELECT_CONTENTS_HEADING:"[\u3053\u306e\u30bf\u30d6] \u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u9078\u629e\u3059\u308b",MSG_FRE_SELECT_CONTENTS_SUB_HEADING:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u3001[\u3053\u306e\u30bf\u30d6] \u5185\u306e\u753b\u50cf\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u9078\u629e\u3057\u307e\u3059\u3002",
MSG_FRE_SHARE_BUTTON_HEADING:"[\u5171\u6709] \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b",MSG_FRE_SHARE_BUTTON_SUB_HEADING:"\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067\u3001\u6709\u52b9\u306b\u306a\u3063\u305f [\u5171\u6709] \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u8ffd\u52a0\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002",MSG_JUNK_TOOLTIP_HEADING:"\u8a73\u7d30\u3092\u8ffd\u52a0",MSG_JUNK_TOOLTIP_SUB_HEADING:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306e\u5185\u5bb9\u3092\u9069\u5207\u306b\u628a\u63e1\u3067\u304d\u307e\u3059\u3088\u3046\u3001\u8a73\u3057\u3044\u60c5\u5831\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044",
MSG_FILE_UPLOAD_LOADER:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059...",MSG_FILE_UPLOAD_ERROR:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u308b\u305f\u3081\u3001\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3002\u30b5\u30a4\u30ba\u306e\u5c0f\u3055\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002",MSG_ATTACH_SCREENSHOT_ERROR:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u6dfb\u4ed8\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
MSG_SCREENSHOT_SCREEN_RECORD_PERMISSION_ERROR:"\u753b\u9762\u3092\u9332\u753b\u3059\u308b\u6a29\u9650\u304c\u30d6\u30e9\u30a6\u30b6\u306b\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u6a29\u9650\u3092\u6709\u52b9\u306b\u3057\u3066\u304b\u3089\u3001\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002\u3042\u308b\u3044\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 \u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u3067 1 \u500b\u306e\u30bf\u30d6\u3092\u5171\u6709\u3067\u304d\u307e\u3059\u3002",
MSG_HIGHLIGHT_DIALOG_HEADING:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u5185\u306e\u60c5\u5831\u3092\u30cf\u30a4\u30e9\u30a4\u30c8\u8868\u793a\u3059\u308b\u304b\u96a0\u3059",MSG_UNSAVED_CHANGES_CONFIRMATION:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u9001\u4fe1\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u9001\u4fe1\u3059\u308b\u524d\u306b\u79fb\u52d5\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",MSG_UNSUBMITTED_SAVED_CHANGES_CONFIRMATION:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u9001\u4fe1\u3055\u308c\u305a\u306b\u3001\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002\u9001\u4fe1\u305b\u305a\u306b\u79fb\u52d5\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f",
MSG_FORM_CLOSED:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30d5\u30a9\u30fc\u30e0\u3092\u9589\u3058\u307e\u3057\u305f",MSG_FEEDBACK_DIALOG_LABEL:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af \u30c0\u30a4\u30a2\u30ed\u30b0",MSG_UNICORN_PAGE_TITLE:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093",MSG_UNICORN_HOW_TO_PROCEED:"\u3053\u306e\u5f8c\u306e\u624b\u9806\u306b\u3064\u3044\u3066\u2026",MSG_UNICORN_SNIPPET_TITLE:"\u4fdd\u8b77\u8005\u306b\u983c\u3093\u3067\u304f\u3060\u3055\u3044",
MSG_UNICORN_SNIPPET_DESCRIPTION:"\u3053\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u306f\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u4fdd\u8b77\u8005\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u3053\u306e\u88fd\u54c1\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u3063\u3066\u3082\u3089\u3046\u3088\u3046\u3001\u4fdd\u8b77\u8005\u306e\u65b9\u306b\u983c\u3093\u3067\u304f\u3060\u3055\u3044\u3002"}});}).call(this);
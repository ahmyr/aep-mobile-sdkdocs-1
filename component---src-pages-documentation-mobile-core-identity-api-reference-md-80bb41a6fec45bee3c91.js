"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8194],{98388:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return y}});var i=a(87462),d=a(63366),n=(a(15007),a(64983)),r=a(91515),l=a(29883),p=["components"],m={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",t)}},s=o("TabsBlock"),u=o("InlineAlert"),x={_frontmatter:m},f=r.Z;function y(e){var t=e.components,a=(0,d.Z)(e,p);return(0,n.mdx)(f,(0,i.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"identity-api-reference"},"Identity API reference"),(0,n.mdx)("h2",{id:"appendtourl--appendvisitorinfoforurl"},"appendToURL / appendVisitorInfoForURL"),(0,n.mdx)("p",null,"This API appends Adobe visitor information to the query component of the specified URL."),(0,n.mdx)("p",null,"If the provided URL is null or empty, it is returned as is. Otherwise, the following information is added to the query component of the specified URL and is returned in the callback function:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("inlineCode",{parentName:"li"},"adobe_mc")," attribute is a URL encoded list that contains:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCMID")," - Experience Cloud ID (ECID)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCORGID")," - Experience Cloud Org ID"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCAID")," - Analytics Tracking ID (AID), if available from the ",(0,n.mdx)("a",{parentName:"li",href:"../../adobe-analytics/api-reference.md#gettrackingidentifier"},"Analytics extension")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"TS")," - A timestamp taken when this request was made"))),(0,n.mdx)("li",{parentName:"ul"},"The optional ",(0,n.mdx)("inlineCode",{parentName:"li"},"adobe_aa_vid")," attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the ",(0,n.mdx)("a",{parentName:"li",href:"../../adobe-analytics/api-reference.md#setvisitoridentifier"},"Analytics extension"),".")),(0,n.mdx)("p",null,"This API is designed to handle the following URL formats:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"scheme://authority/path?query=param#fragment\n")),(0,n.mdx)("p",null,"In this example, the Adobe visitor data is appended as:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"scheme://authority/path?query=param&TS=timestamp&MCMID=ecid&MCORGID=ecorgid@AdobeOrg#fragment\n")),(0,n.mdx)("p",null,"Similarly, URLs without a query component:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"scheme://authority/path#fragment\n")),(0,n.mdx)("p",null,"The Adobe visitor data is appended as:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"scheme://authority/path?TS=timestamp&MCMID=ecid&MCORGID=ecorgid@AdobeOrg#fragment\n")),(0,n.mdx)("p",null,"If your application uses more complicated URLs, such as Angular URLs, you should use ",(0,n.mdx)("a",{parentName:"p",href:"#geturlvariables"},"getUrlVariables"),"."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=append-to-url",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Identity extension that is registered with the Mobile Core extension."),(0,n.mdx)("p",null,"To get the version of the Identity extension, use the following code sample:"),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=extension-version",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"getexperiencecloudid"},"getExperienceCloudId"),(0,n.mdx)("p",null,"This API retrieves the Adobe Experience Cloud ID (ECID) that was generated when the app was initially launched and is stored in the Adobe Experience Cloud Identity Service."),(0,n.mdx)("p",null,"This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"getidentifiers"},"getIdentifiers"),(0,n.mdx)("p",null,"This API returns all customer identifiers that were previously synced with the Adobe Experience Cloud Identity Service."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=get-identifiers",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"geturlvariables"},"getUrlVariables"),(0,n.mdx)("p",null,"This API gets the Adobe Experience Cloud Identity Service variables in URL query parameter form, and these variables will be consumed by the hybrid app. This method returns an appropriately formed string that contains the Experience Cloud Identity Service URL variables. There will be no leading (&) or (?) punctuation because the caller is responsible for placing the variables in their resulting URL in the correct location."),(0,n.mdx)("p",null,"If an error occurs while retrieving the URL string, the callback handler will be called with a null value. Otherwise, the following information is added to the string that is returned in the callback:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("inlineCode",{parentName:"li"},"adobe_mc")," attribute is an URL encoded list that contains:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCMID")," - Experience Cloud ID (ECID)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCORGID")," - Experience Cloud Org ID"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"MCAID")," - Analytics Tracking ID (AID), if available from the ",(0,n.mdx)("a",{parentName:"li",href:"../../adobe-analytics/index.md"},"Analytics extension")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"TS")," - A timestamp taken when this request was made"))),(0,n.mdx)("li",{parentName:"ul"},"The optional ",(0,n.mdx)("inlineCode",{parentName:"li"},"adobe_aa_vid")," attribute is the URL-encoded Analytics Custom Visitor ID (VID), if previously set in the ",(0,n.mdx)("a",{parentName:"li",href:"../../adobe-analytics/index.md"},"Analytics extension"),".")),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=get-url-variables",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"registerExtension()")," API registers the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=register-extension",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"setadvertisingidentifier"},"setAdvertisingIdentifier"),(0,n.mdx)("p",null,"The advertising ID is preserved between app upgrades, is saved and restored during the standard application backup process, available via the ",(0,n.mdx)("a",{parentName:"p",href:"../signals/index.md"},"Signals")," extension, and is removed at uninstall."),(0,n.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"If the current SDK privacy status is ",(0,n.mdx)("inlineCode",{parentName:"p"},"optedout"),", the advertising identifier is not set or stored."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=set-advertising-identifier",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"setpushidentifier"},"setPushIdentifier"),(0,n.mdx)("p",null,"This API sets the device token for push notifications in the SDK. If the current SDK privacy status is ",(0,n.mdx)("inlineCode",{parentName:"p"},"optedout"),", the push identifier is not set."),(0,n.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"You should call ",(0,n.mdx)("inlineCode",{parentName:"p"},"setPushIdentifier")," on each application launch to ensure the most up-to-date device token is set to the SDK. If no device token is available, ",(0,n.mdx)("inlineCode",{parentName:"p"},"null"),"/",(0,n.mdx)("inlineCode",{parentName:"p"},"nil")," should be passed."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"4",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=set-push-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=set-push-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=set-push-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=set-push-identifier",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"syncidentifier"},"syncIdentifier"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"syncIdentifier()")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"syncIdentifiers()")," APIs update the specified customer IDs with the Adobe Experience Cloud Identity Service."),(0,n.mdx)("p",null,"These APIs synchronize the provided customer identifier type key and value with the authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, this ID type is updated with the new ID and the authentication state. Otherwise, a new customer ID is added."),(0,n.mdx)("p",null,"Starting with ",(0,n.mdx)("em",{parentName:"p"},"ACPIdentity v2.1.3 (iOS)")," and ",(0,n.mdx)("em",{parentName:"p"},"Identity v1.1.2 (Android)")," if the new ",(0,n.mdx)("inlineCode",{parentName:"p"},"identifier")," value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Experience Cloud Identity Service."),(0,n.mdx)("p",null,"These IDs are preserved between app upgrades, are saved and restored during the standard application backup process, and are removed at uninstall."),(0,n.mdx)("p",null,"If the current SDK privacy status is ",(0,n.mdx)("inlineCode",{parentName:"p"},"MobilePrivacyStatus.OPT_OUT"),", calling this method results in no operations being performed."),(0,n.mdx)("p",null,"This API updates or appends the provided customer identifier type key and value with the given authentication state to the Experience Cloud Identity Service. If the specified customer ID type exists in the service, the ID is updated with the new ID and authentication state. Otherwise a new customer ID is added."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=sync-identifier",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"syncidentifiers"},"syncIdentifiers"),(0,n.mdx)("p",null,"This API is an overloaded version, which does not include the parameter for the authentication state and it assumes a default value of ",(0,n.mdx)("inlineCode",{parentName:"p"},"VisitorID.AuthenticationState.UNKNOWN"),"."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=sync-identifiers",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"syncidentifiers-overloaded"},"syncIdentifiers (overloaded)"),(0,n.mdx)("p",null,"The function of this API is the same as the ",(0,n.mdx)("inlineCode",{parentName:"p"},"syncIdentifier")," API. This API passes a list of identifiers, and each identifier contains an ",(0,n.mdx)("inlineCode",{parentName:"p"},"identifier type")," as the key and an ",(0,n.mdx)("inlineCode",{parentName:"p"},"identifier")," as the value. In each identifier pair, if the ",(0,n.mdx)("inlineCode",{parentName:"p"},"identifier type")," contains a null or an empty string, the identifier is ignored by the Identity extension."),(0,n.mdx)("p",null,"Starting with ",(0,n.mdx)("em",{parentName:"p"},"ACPIdentity v2.1.3 (iOS)")," and ",(0,n.mdx)("em",{parentName:"p"},"Identity v1.1.2 (Android)")," if the new ",(0,n.mdx)("inlineCode",{parentName:"p"},"identifier")," value is null or empty, this ID type is removed from the local storage, Identity shared state and not synced with the Adobe Experience Cloud Identity Service."),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=sync-identifiers-overloaded",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"public-classes"},"Public classes"),(0,n.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(l.default,{query:"platform=android&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (AEP 3.x)"),(0,n.mdx)(l.default,{query:"platform=ios-aep&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS (ACP 2.x)"),(0,n.mdx)(l.default,{query:"platform=ios-acp&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(l.default,{query:"platform=react-native&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Flutter"),(0,n.mdx)(l.default,{query:"platform=flutter&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Cordova"),(0,n.mdx)(l.default,{query:"platform=cordova&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Unity"),(0,n.mdx)(l.default,{query:"platform=unity&api=public-classes",mdxType:"Tabs"}),(0,n.mdx)("p",null,"Xamarin"),(0,n.mdx)(l.default,{query:"platform=xamarin&api=public-classes",mdxType:"Tabs"}))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-identity-api-reference-md-80bb41a6fec45bee3c91.js.map
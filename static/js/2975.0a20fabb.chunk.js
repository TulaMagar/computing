"use strict";(self.webpackChunkcomputing=self.webpackChunkcomputing||[]).push([[2975],{2975:function(e,n,t){t.r(n),t.d(n,{mbox:function(){return p}});var r=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],a=["Date","Subject","Comments","Keywords","Resent-Date"],i=/^[ \t]/,o=/^From /,c=new RegExp("^("+r.join("|")+"): "),u=new RegExp("^("+a.join("|")+"): "),d=/^[^:]+:/,s=/^[^ ]+@[^ ]+/,m=/^.*?(?=[^ ]+?@[^ ]+)/,l=/^<.*?>/,h=/^.*?(?=<.*>)/;var p={startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:function(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(i))return null;if(n.inHeader=!1,n.header=null,e.match(o))return n.inHeaders=!0,n.inSeparator=!0,"atom";var t,r=!1;return(t=e.match(u))||(r=!0)&&(t=e.match(c))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=r,n.header=t[1],"atom"):n.inHeaders&&(t=e.match(d))?(n.inHeader=!0,n.emailPermitted=!0,n.header=t[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(s)?"link":(e.match(m)||e.skipToEnd(),"atom");if(n.inHeader){var a=function(e){return"Subject"===e?"header":"string"}(n.header);if(n.emailPermitted){if(e.match(l))return a+" link";if(e.match(h))return a}return e.skipToEnd(),a}return e.skipToEnd(),null},blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1},languageData:{autocomplete:r.concat(a)}}}}]);
//# sourceMappingURL=2975.0a20fabb.chunk.js.map
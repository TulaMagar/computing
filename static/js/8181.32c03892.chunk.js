"use strict";(self.webpackChunkcomputing=self.webpackChunkcomputing||[]).push([[8181],{8181:function(e,t,O){O.r(t),O.d(t,{completeFromSchema:function(){return X},xml:function(){return Q},xmlLanguage:function(){return z}});var r=O(7762),n=O(3144),a=O(5671),o=O(3242),s=O(4200);function d(e){return 45==e||46==e||58==e||e>=65&&e<=90||95==e||e>=97&&e<=122||e>=161}var i=null,l=null,c=0;function u(e,t){var O,r=e.pos+t;if(l==e&&c==r)return i;for(;9==(O=e.peek(t))||10==O||13==O||32==O;)t++;for(var n="";;){var a=e.peek(t);if(!d(a))break;n+=String.fromCharCode(a),t++}return l=e,c=r,i=n||null}function p(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(var O=0;O<e.length;O++)this.hash+=(this.hash<<4)+e.charCodeAt(O)+(e.charCodeAt(O)<<8)}var $=new o.IK({start:null,shift:function(e,t,O,r){return 1==t?new p(u(r,1)||"",e):e},reduce:function(e,t){return 11==t&&e?e.parent:e},reuse:function(e,t,O,r){var n=t.type.id;return 1==n||13==n?new p(u(r,1)||"",e):e},hash:function(e){return e?e.hash:0},strict:!1}),f=new o.Jq((function(e,t){if(60==e.next)if(e.advance(),47==e.next){e.advance();var O=u(e,0);if(!O)return e.acceptToken(5);if(t.context&&O==t.context.name)return e.acceptToken(2);for(var r=t.context;r;r=r.parent)if(r.name==O)return e.acceptToken(3,-2);e.acceptToken(4)}else if(33!=e.next&&63!=e.next)return e.acceptToken(1)}),{contextual:!0});function m(e,t){return new o.Jq((function(O){for(var r=0,n=0;;n++){if(O.next<0){n&&O.acceptToken(e);break}if(O.next==t.charCodeAt(r)){if(++r==t.length){n>t.length&&O.acceptToken(e,1-t.length);break}}else r=O.next==t.charCodeAt(0)?1:0;O.advance()}}))}var v=m(35,"--\x3e"),k=m(36,"?>"),g=m(37,"]]>"),h=(0,s.Gv)({Text:s.pJ.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":s.pJ.angleBracket,TagName:s.pJ.tagName,"MismatchedCloseTag/Tagname":[s.pJ.tagName,s.pJ.invalid],AttributeName:s.pJ.attributeName,AttributeValue:s.pJ.attributeValue,Is:s.pJ.definitionOperator,"EntityReference CharacterReference":s.pJ.character,Comment:s.pJ.blockComment,ProcessingInst:s.pJ.processingInstruction,DoctypeDecl:s.pJ.documentMeta,Cdata:s.pJ.special(s.pJ.string)}),T=o.WQ.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"\u26a0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:$,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[h],skippedNodes:[0],repeatNodeCount:8,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kX$rUVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kP%ZRVPOv%Uw!^%U!_~%UW%iR{WOr%dsv%dw~%d_%{]VP{WyUOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{RzYVPOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POW~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOX~Z(xWVP{WOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[U|QVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k]*uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k]+hUdSVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}`S^QVP{WOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWVP{WOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kX/xU{WOq%dqr0[sv%dw!a%d!a!b=X!b~%dX0aZ{WOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dX1XT{WOr%dsv%dw}%d}!O1h!O~%dX1oR}P{WOr%dsv%dw~%dX1}T{WOr%dsv%dw!q%d!q!r2^!r~%dX2cT{WOr%dsv%dw!e%d!e!f2r!f~%dX2wT{WOr%dsv%dw!v%d!v!w3W!w~%dX3]T{WOr%dsv%dw!{%d!{!|3l!|~%dX3qT{WOr%dsv%dw!r%d!r!s4Q!s~%dX4VT{WOr%dsv%dw!g%d!g!h4f!h~%dX4kV{WOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOiPX5jRiP{WOr%dsv%dw~%dX5xV{WOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dX6dT{WOr%dsv%dw!f%d!f!g6s!g~%dX6xT{WOr%dsv%dw!c%d!c!d7X!d~%dX7^T{WOr%dsv%dw!v%d!v!w7m!w~%dX7rT{WOr%dsv%dw!c%d!c!d8R!d~%dX8WT{WOr%dsv%dw!}%d!}#O8g#O~%dX8nR{WxPOr%dsv%dw~%dX8|T{WOr%dsv%dw#W%d#W#X9]#X~%dX9bT{WOr%dsv%dw#T%d#T#U9q#U~%dX9vT{WOr%dsv%dw#h%d#h#i:V#i~%dX:[T{WOr%dsv%dw#T%d#T#U8R#U~%dX:pT{WOr%dsv%dw#c%d#c#d;P#d~%dX;UT{WOr%dsv%dw#V%d#V#W;e#W~%dX;jT{WOr%dsv%dw#h%d#h#i;y#i~%dX<OT{WOr%dsv%dw#m%d#m#n<_#n~%dX<dT{WOr%dsv%dw#d%d#d#e<s#e~%dX<xT{WOr%dsv%dw#X%d#X#Y4f#Y~%dX=`R!PP{WOr%dsv%dw~%dZ=rUaQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_U[UVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU!OQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWVP{WOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWVP{WOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhUwQVP{WOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[f,v,k,g,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0}),P=O(1450);function b(e,t){var O=t&&t.getChild("TagName");return O?e.sliceString(O.from,O.to):""}function W(e,t){var O=t&&t.firstChild;return O&&"OpenTag"==O.name?b(e,O):""}function C(e){for(var t=e&&e.parent;t;t=t.parent)if("Element"==t.name)return t;return null}var w=(0,n.Z)((function e(t,O,r){(0,a.Z)(this,e),this.attrs=O,this.attrValues=r,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map((function(e){return{label:e,type:"text"}})):[]})),x=/^[:\-\.\w\u00b7-\uffff]*$/;function y(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function S(e){return"string"==typeof e?{label:'"'.concat(e,'"'),type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:'"'.concat(e.label,'"')})}function X(e,t){var O,n=[],a=[],o=Object.create(null),s=(0,r.Z)(t);try{for(s.s();!(O=s.n()).done;){var d=O.value,i=y(d);n.push(i),d.global&&a.push(i),d.values&&(o[d.name]=d.values.map(S))}}catch(X){s.e(X)}finally{s.f()}var l,c=[],u=[],p=Object.create(null),$=(0,r.Z)(e);try{var f=function(){var e=l.value,t=a,O=o;e.attributes&&(t=t.concat(e.attributes.map((function(e){return"string"==typeof e?n.find((function(t){return t.label==e}))||{label:e,type:"property"}:(e.values&&(O==o&&(O=Object.create(O)),O[e.name]=e.values.map(S)),y(e))}))));var r=new w(e,t,O);p[r.name]=r,c.push(r),e.top&&u.push(r)};for($.s();!(l=$.n()).done;)f()}catch(X){$.e(X)}finally{$.f()}u.length||(u=c);for(var m=0;m<c.length;m++){var v=e[m],k=c[m];if(v.children){var g,h=(0,r.Z)(v.children);try{for(h.s();!(g=h.n()).done;){var T=g.value;p[T]&&k.children.push(p[T])}}catch(X){h.e(X)}finally{h.f()}}else k.children=c}return function(e){var t,O=e.state.doc,r=function(e,t){for(var O,r=(0,P.qz)(e).resolveInner(t,-1),n=null,a=r;!n&&a.parent;a=a.parent)"OpenTag"!=a.name&&"CloseTag"!=a.name&&"SelfClosingTag"!=a.name&&"MismatchedCloseTag"!=a.name||(n=a);if(n&&(n.to>t||n.lastChild.type.isError)){var o=n.parent;if("TagName"==r.name)return"CloseTag"==n.name||"MismatchedCloseTag"==n.name?{type:"closeTag",from:r.from,context:o}:{type:"openTag",from:r.from,context:C(o)};if("AttributeName"==r.name)return{type:"attrName",from:r.from,context:n};if("AttributeValue"==r.name)return{type:"attrValue",from:r.from,context:n};var s=r==n||"Attribute"==r.name?r.childBefore(t):r;return"StartTag"==(null===s||void 0===s?void 0:s.name)?{type:"openTag",from:t,context:C(o)}:"StartCloseTag"==(null===s||void 0===s?void 0:s.name)&&s.to<=t?{type:"closeTag",from:t,context:o}:"Is"==(null===s||void 0===s?void 0:s.name)?{type:"attrValue",from:t,context:n}:s?{type:"attrName",from:t,context:n}:null}if("StartCloseTag"==r.name)return{type:"closeTag",from:t,context:r.parent};for(;r.parent&&r.to==t&&!(null===(O=r.lastChild)||void 0===O?void 0:O.type.isError);)r=r.parent;return"Element"==r.name||"Text"==r.name||"Document"==r.name?{type:"tag",from:t,context:"Element"==r.name?r:C(r)}:null}(e.state,e.pos);if(!r||"tag"==r.type&&!e.explicit)return null;var n=r.type,s=r.from,d=r.context;if("openTag"==n){var i=u,l=W(O,d);if(l){var $=p[l];i=(null===$||void 0===$?void 0:$.children)||c}return{from:s,options:i.map((function(e){return e.completion})),validFor:x}}if("closeTag"==n){var f=W(O,d);return f?{from:s,to:e.pos+(">"==O.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(t=p[f])||void 0===t?void 0:t.closeNameCompletion)||{label:f+">",type:"type"}],validFor:x}:null}if("attrName"==n){var m=p[b(O,d)];return{from:s,options:(null===m||void 0===m?void 0:m.attrs)||a,validFor:x}}if("attrValue"==n){var v=function(e,t,O){var r=t&&t.getChildren("Attribute").find((function(e){return e.from<=O&&e.to>=O})),n=r&&r.getChild("AttributeName");return n?e.sliceString(n.from,n.to):""}(O,d,s);if(!v)return null;var k=p[b(O,d)],g=((null===k||void 0===k?void 0:k.attrValues)||o)[v];return g&&g.length?{from:s,to:e.pos+('"'==O.sliceString(e.pos,e.pos+1)?1:0),options:g,validFor:/^"[^"]*"?$/}:null}if("tag"==n){var h=W(O,d),T=p[h],w=[],y=d&&d.lastChild;!h||y&&"CloseTag"==y.name&&b(O,y)==h||w.push(T?T.closeCompletion:{label:"</"+h+">",type:"type",boost:2});var S=w.concat(((null===T||void 0===T?void 0:T.children)||(d?c:u)).map((function(e){return e.openCompletion})));if(d&&(null===T||void 0===T?void 0:T.text.length)){var X=d.firstChild;X.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(X.to,e.pos))&&(S=S.concat(T.text))}return{from:s,options:S,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}var z=P.qp.define({parser:T.configure({props:[P.uj.add({Element:function(e){var t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag":function(e){return e.column(e.node.from)+e.unit}}),P.x0.add({Element:function(e){var t=e.firstChild,O=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==O.name?O.from:e.to}:null}})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new P.ri(z,z.data.of({autocomplete:X(e.elements||[],e.attributes||[])}))}}}]);
//# sourceMappingURL=8181.32c03892.chunk.js.map
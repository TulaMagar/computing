"use strict";(self.webpackChunkcomputing=self.webpackChunkcomputing||[]).push([[9738],{9738:function(e,t,n){function r(e,t,n){return function(r,i){for(;!r.eol();){if(r.match(t)){i.tokenize=u;break}r.next()}return n&&(i.tokenize=n),e}}function i(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=u,e}}function u(e,t){function n(n){return t.tokenize=n,n(e,t)}var a=e.sol(),o=e.next();switch(o){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=s,"tag";case"_":if(e.eat("_"))return n(r("strong","__",u));break;case"'":if(e.eat("'"))return n(r("em","''",u));break;case"(":if(e.eat("("))return n(r("link","))",u));break;case"[":return n(r("url","]",u));case"|":if(e.eat("|"))return n(r("comment","||"));break;case"-":if(e.eat("="))return n(r("header string","=-",u));if(e.eat("-"))return n(r("error tw-deleted","--",u));break;case"=":if(e.match("=="))return n(r("tw-underline","===",u));break;case":":if(e.eat(":"))return n(r("comment","::"));break;case"^":return n(r("tw-box","^"));case"~":if(e.match("np~"))return n(r("meta","~/np~"))}if(a)switch(o){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),n(i("header string"));case"*":case"#":case"+":return n(i("tw-listitem bracket"))}return null}var a,o,c,f;function s(e,t){var n,r=e.next(),i=e.peek();return"}"==r?(t.tokenize=u,"tag"):"("==r||")"==r?"bracket":"="==r?(o="equals",">"==i&&(e.next(),i=e.peek()),/[\'\"]/.test(i)||(t.tokenize=function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=s;break}}return"string"}),"operator"):/[\'\"]/.test(r)?(t.tokenize=(n=r,function(e,t){for(;!e.eol();)if(e.next()==n){t.tokenize=s;break}return"string"}),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function l(){for(var e=arguments.length-1;e>=0;e--)c.cc.push(arguments[e])}function k(){return l.apply(null,arguments),!0}function p(e,t){var n=c.context&&c.context.noIndent;c.context={prev:c.context,pluginName:e,indent:c.indented,startOfLine:t,noIndent:n}}function d(){c.context&&(c.context=c.context.prev)}function g(e){if("openPlugin"==e)return c.pluginName=a,k(m,(n=c.startOfLine,function(e){return"selfclosePlugin"==e||"endPlugin"==e?k():"endPlugin"==e?(p(c.pluginName,n),k()):k()}));if("closePlugin"==e){var t=!1;return c.context?(t=c.context.pluginName!=a,d()):t=!0,t&&(f="error"),k(function(e){return function(t){return e&&(f="error"),"endPlugin"==t?k():l()}}(t))}return"string"==e?(c.context&&"!cdata"==c.context.name||p("!cdata"),c.tokenize==u&&d(),k()):k();var n}function m(e){return"keyword"==e?(f="attribute",k(m)):"equals"==e?k(x,m):l()}function x(e){return"keyword"==e?(f="string",k()):"string"==e?k(h):l()}function h(e){return"string"==e?k(h):l()}n.r(t),n.d(t,{tiki:function(){return b}});var b={startState:function(){return{tokenize:u,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;f=o=a=null;var n=t.tokenize(e,t);if((n||o)&&"comment"!=n)for(c=t;;){if((t.cc.pop()||g)(o||n))break}return t.startOfLine=!1,f||n},indent:function(e,t,n){var r=e.context;if(r&&r.noIndent)return 0;for(r&&/^{\//.test(t)&&(r=r.prev);r&&!r.startOfLine;)r=r.prev;return r?r.indent+n.unit:0}}}}]);
//# sourceMappingURL=9738.3e2c0586.chunk.js.map
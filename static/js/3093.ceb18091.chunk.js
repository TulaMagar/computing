"use strict";(self.webpackChunkcomputing=self.webpackChunkcomputing||[]).push([[3093],{3093:function(e,t,n){n.r(t),n.d(t,{smalltalk:function(){return x}});var a=/[+\-\/\\*~<>=@%|&?!.,:;^]/,i=/true|false|nil|self|super|thisContext/,r=function(e,t){this.next=e,this.parent=t},o=function(e,t,n){this.name=e,this.context=t,this.eos=n},s=function(){this.context=new r(u,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};s.prototype.userIndent=function(e,t){this.userIndentationDelta=e>0?e/t-this.indentation:0};var u=function(e,t,n){var s=new o(null,t,!1),u=e.next();return'"'===u?s=c(e,new r(c,t)):"'"===u?s=l(e,new r(l,t)):"#"===u?"'"===e.peek()?(e.next(),s=h(e,new r(h,t))):e.eatWhile(/[^\s.{}\[\]()]/)?s.name="string.special":s.name="meta":"$"===u?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),s.name="string.special"):"|"===u&&n.expectVariable?s.context=new r(p,t):/[\[\]{}()]/.test(u)?(s.name="bracket",s.eos=/[\[{(]/.test(u),"["===u?n.indentation++:"]"===u&&(n.indentation=Math.max(0,n.indentation-1))):a.test(u)?(e.eatWhile(a),s.name="operator",s.eos=";"!==u):/\d/.test(u)?(e.eatWhile(/[\w\d]/),s.name="number"):/[\w_]/.test(u)?(e.eatWhile(/[\w\d_]/),s.name=n.expectVariable?i.test(e.current())?"keyword":"variable":null):s.eos=n.expectVariable,s},c=function(e,t){return e.eatWhile(/[^"]/),new o("comment",e.eat('"')?t.parent:t,!0)},l=function(e,t){return e.eatWhile(/[^']/),new o("string",e.eat("'")?t.parent:t,!1)},h=function(e,t){return e.eatWhile(/[^']/),new o("string.special",e.eat("'")?t.parent:t,!1)},p=function(e,t){var n=new o(null,t,!1);return"|"===e.next()?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n},x={startState:function(){return new s},token:function(e,t){if(t.userIndent(e.indentation(),e.indentUnit),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e,t){e.userIndent(0,t)},indent:function(e,t,n){var a=e.context.next===u&&t&&"]"===t.charAt(0)?-1:e.userIndentationDelta;return(e.indentation+a)*n.unit},languageData:{indentOnInput:/^\s*\]$/}}}}]);
//# sourceMappingURL=3093.ceb18091.chunk.js.map
"use strict";(self.webpackChunkcomputing=self.webpackChunkcomputing||[]).push([[239,667],{554:function(e,t,s){s.r(t);var n=s(9439),a=s(7313),i=s(5439),l=s(6417);t.default=function(e){var t=e.props,s=(0,a.useState)(t),c=(0,n.Z)(s,2),o=c[0],d=c[1],r=(0,a.useState)(""),h=(0,n.Z)(r,2),m=h[0],u=h[1],p=(0,a.useTransition)(),x=(0,n.Z)(p,2)[1];return(0,a.useEffect)((function(){d(t)}),[t]),(0,a.useEffect)((function(){x((function(){u(o)}))}),[o]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"pane",children:[(0,l.jsx)("div",{children:(0,l.jsx)("div",{"data-color-mode":"dark",children:(0,l.jsx)(i.Z,{value:o,language:["html"],placeholder:"Please enter html, css, js code.",onChange:function(e){return d(e.target.value)},padding:15,className:"EditorMode",spellCheck:!1})})}),(0,l.jsx)("div",{className:"EditorOutput",children:(0,l.jsx)("iframe",{srcDoc:m,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"auto",className:"EditorOutput"})})]})})}},9607:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});s(7313),s(685);var n=s(865),a=s(3657),i=s(458),l=s(554),c=s(6417);function o(){(0,n.Z)("What is HTML Heading?");return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{id:"container",children:[(0,c.jsx)("div",{id:"left",children:(0,c.jsx)(i.Z,{})}),(0,c.jsxs)("div",{id:"middle",children:[(0,c.jsx)("h1",{children:"What is HTML Heading Tag?"}),(0,c.jsx)("p",{children:"HTMl Heading Tag is used to create heading in HTML. You can have title, style, script, meta, link, and other tags in heading."}),(0,c.jsx)("h1",{children:"HTML Head Element "}),(0,c.jsxs)("p",{children:["The HTML head element is used to contain the head section of the HTML and also know as container for metadata ","(data about data)"," ","and is placed between the ",(0,c.jsx)("code",{children:"<html>"})," tag and the"," ",(0,c.jsx)("code",{children:"<body>"})," tag. HTML metadata is data about the HTML document. Metadata does not display on the page. Metadata typically define the document title, character set, styles, scripts, and other meta information."]}),(0,c.jsx)("h1",{children:"Preview HTML Example"}),(0,c.jsx)(l.default,{props:'\n  <!DOCTYPE html>\n  <html>\n    \x3c!-- HTML starting head --\x3e\n    <head>\n      <title>A Page Title</title>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n\n      \x3c!--- Bootstrap CSS --\x3e\n      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> \n\n      \x3c!--- React js --\x3e\n      <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>\n      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>\n      <style> \n        .center_red{\n          text-align: center;\n          color: red;\n        }\n      </style>\n    </head>\n    \x3c!-- HTML ending head --\x3e\n    <body>\n\n      <p class="center_red"> Hello, world! </p>\n\n    </body>\n  </html> \n  '}),(0,c.jsx)("h1",{children:"Title in Head"}),(0,c.jsx)(l.default,{props:" \n  <title>A Page Title</title>\n  "}),(0,c.jsxs)("p",{children:["The title element is used to define the title of the document.",(0,c.jsx)("code",{children:" A Page Title"})," will be displayed in the browser tab."]}),(0,c.jsx)("h1",{children:"Meta in Head"}),(0,c.jsx)(l.default,{props:' \n  <meta charset="utf-8">\n  '}),(0,c.jsx)("p",{children:"The meta element is used to define metadata about the HTML document. Meta data is not displayed on the page. Computer only understand 0 and 1. We as a human can only understand the meaning of the letters A to Z. Meta converts computer language to human language. Imagine if browser display only computer language 0 and 1. There is way no people have zero knowledge of computer language will understand the meaning of 0 and 1. So, meta converts computer language to human language."}),(0,c.jsx)("h1",{children:"Meta Viewport in Head"}),(0,c.jsx)(l.default,{props:' \n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  '}),(0,c.jsxs)("p",{children:["The width of the desktop, tablet, and phone are different so the viewport meta tag is used to control the width of the viewport."," ",(0,c.jsx)("code",{children:"100vw"})," viewport is used to make the page responsive. Responsive web design is a technique that makes the web page adapt based the width of the device screen."]}),(0,c.jsx)("h1",{children:"Link in Head"}),(0,c.jsx)(l.default,{props:' \n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\n  '}),(0,c.jsxs)("p",{children:["TThe ",(0,c.jsx)("code",{children:"<link>"})," tag defines the relationship between the current document and an external resource. The"," ",(0,c.jsx)("code",{children:"<link>"})," tag is most often used to link to external style sheets or to add a favicon to your website. You can have any types of external style sheets links such as font-family, css framework, js library and etc."]}),(0,c.jsx)("h1",{children:"Script in Head"}),(0,c.jsx)(l.default,{props:' \n  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>\n  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>\n'}),(0,c.jsxs)("p",{children:["The ",(0,c.jsx)("code",{children:"<script>"})," tag is used to add client-side JavaScript to the HTML. React is a client-side JavaScript library for building user interfaces. You can any type of client-side JavaScript libraries such as jQuery, React, Angular, and more inside the opening ",(0,c.jsx)("code",{children:"<script>"})," and closing"," ",(0,c.jsx)("code",{children:"<\/script>"})," tag."]}),(0,c.jsx)("h1",{children:"Style in Head"}),(0,c.jsx)(l.default,{props:" \n  <style> \n    .center_red{\n      text-align: center;\n      color: red;\n    }\n  </style>\n  "}),(0,c.jsxs)("p",{children:["The ",(0,c.jsx)("code",{children:"<style>"})," tag is used to add CSS to the HTML. CSS isn't part of the HTML standard. CSS is a style sheet language that describes the presentation of an HTML document. CSS is a cornerstone technology of the World Wide Web. You need to manually add CSS to the HTML head. CSS is a cornerstone technology of the World Wide Web. You need to manually add CSS to the HTML head. CSS let you control the style of your web pages."]})]}),(0,c.jsx)("div",{id:"right",children:(0,c.jsx)(a.Z,{})})]})})}},458:function(e,t,s){s.d(t,{Z:function(){return i}});s(7313),s(9510);var n=s(9466),a=s(6417);function i(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{className:"html_links",children:[(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.rU,{className:"list",to:"/",children:"Home"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.rU,{className:"list",to:"/",children:"Home"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.rU,{className:"list",to:"/",children:"Home"})})]})})}},3657:function(e,t,s){s.d(t,{Z:function(){return i}});s(7313),s(9510);var n=s(9466),a=s(6417);function i(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"topic",children:"Topic"}),(0,a.jsxs)("ul",{className:"html_links",children:[(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_home",children:"HTML Home"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_intro",children:"HTML Introduciton"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_editor",children:"HTML Editor"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_element",children:"HTML Element"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_attributes",children:"HTML Attributes"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_tags",children:"HTML Tags"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_comment",children:"HTML Comments"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_head",children:"HTML Head"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_paragraph",children:"HTML Paragraph"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_input_types",children:"HTML Input Types"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_tables",children:"HTML Tables"})}),(0,a.jsx)("li",{className:"blockShadow",children:(0,a.jsx)(n.OL,{className:"HtmlLinks",to:"/html_list",children:"HTML List"})})]})]})}},685:function(){},9510:function(){}}]);
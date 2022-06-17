import React, { useState, useEffect, useTransition } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

function EditorApp() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
        console.log(html) //gets called whenever get state changes
    }, [html]);

  useEffect(() => {
    startTransition(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    });
  }, [html, css, js]);

  return (
    <>
      <div className="pane">
        <div >
        <CodeMirror
          value={html}  
          className="EditorMode"
          spellCheck="false"
          options={{
            spellCheck:"false",
          }}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setHtml(value)}
          
        />
        </div>
        <div className="EditorOutput">
            <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="EditorOutput"
            />
        </div>
        </div>
    </>
  );
}

export default EditorApp;

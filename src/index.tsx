import * as React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

export const Snippet = (props: SnippetProps) => {
  let [code, setCode] = React.useState(props.code[0] || null);
  let languages: string[] = props.code.map(a => a.language);

  function updateCode(l: any) {
    let newCode = props.code.find(a => a.language === l) as SnippetCode;
    setCode(newCode);
    (document.getElementById('code') as HTMLElement).innerHTML = hljs.highlight(
      newCode.code,
      {
        language: newCode.language,
      }
    ).value;
  }

  React.useEffect(() => {
    updateCode(languages[0]);
  }, []);

  return (
    <div style={props.style}>
      <div
        style={{
          backgroundColor: '#DDD',
          padding: '0.5em',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <select
          style={{
            height: '25px',
            borderRadius: '3px',
            lineHeight: '25px',
            background: '#EEE',
            border: '1px solid #e0e0e0',
            padding: '0 30px 0 5px',
          }}
          onChange={e => updateCode(e.currentTarget.value)}
        >
          {languages.map((language, index) => (
            <option key={index}>{language}</option>
          ))}
        </select>
        <span
          onClick={() => {
            navigator.clipboard.writeText(code.code);
          }}
          style={{
            float: 'right',
            cursor: 'pointer',
            padding: '0.2em',
            backgroundColor: '#f0f0f0',
            borderRadius: '0.3em',
          }}
          id="copy-span"
        >
          ☑ Copy
        </span>
      </div>
      <div
        style={{
          backgroundColor: '#EFEFEF',
          padding: '0.5em',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      >
        <pre>
          <code id="code" />
        </pre>
      </div>
    </div>
  );
};

interface SnippetProps {
  code: SnippetCode[];
  style?: React.CSSProperties;
}

interface SnippetCode {
  code: string;
  language: string;
}

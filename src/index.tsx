import * as React from 'react';
//@ts-ignore
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
    <>
      <div>
        <select onChange={e => updateCode(e.currentTarget.value)}>
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
          }}
        >
          📝 Copy
        </span>
      </div>
      <div>
        <div id="code"></div>
      </div>
    </>
  );
};

interface SnippetProps {
  theme: string;
  code: SnippetCode[];
}

interface SnippetCode {
  code: string;
  language: string;
}

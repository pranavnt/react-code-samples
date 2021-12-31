import * as React from 'react';
//@ts-ignore
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

export const Snippet = (props: SnippetProps) => {
  let [code, setCode] = React.useState(props.code[0] || null);
  let languages: string[] = props.code.map(a => a.language);

  return (
    <>
      <div>
        <select
          onChange={e => {
            let newCode = props.code.find(
              a => a.language === e.currentTarget.value
            ) as SnippetCode;
            setCode(newCode);
            let el = document.getElementById('code');
            if (el) {
              el.innerHTML = hljs.highlight(newCode.code, {
                language: newCode.language,
              }).value;
            }
          }}
        >
          {languages.map((language, index) => (
            <option key={index}>{language}</option>
          ))}
        </select>
        {
          // show hljs themes select
        }
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
        <div id="code" />
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

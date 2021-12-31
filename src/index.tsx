import * as React from 'react';

export const Snippet = (props: SnippetProps) => {
  //@ts-ignore (unused var for time being)
  let [code, setCode] = React.useState(props.code[0] || null);
  let languages: string[] = props.code.map(a => a.language);

  return (
    <>
      <div>
        <select>
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
        <code>{code.code}</code>
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

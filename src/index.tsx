import * as React from 'react';

export const Snippet = (props: SnippetProps) => {
  let [code, setCode] = React.useState(props.code[0] || null);
  let languages: string[] = props.code.map(a => a.language);

  return (
    <>
      <option>
        {languages.map((language, index) => (
          <option key={index}>{language}</option>
        ))}
      </option>
      <span
        onClick={() => {
          let code = props.code.filter(a => a.language === props.language);
        }}
      >
        📝 Copy
      </span>
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

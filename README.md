# react-code-samples

usage example:

```js
import {} from 'react-code-samples';
import 'highlight.js/styles/default.css'; // or use another highlight js style

<Snippet
  code={[
    {
      code: `
            console.log("hello world");
            `,
      language: 'javascript',
    },
    {
      code: `
              println!("Hello, world!");
            `,
      language: 'rust',
    },
    {
      code: `
              fmt.Println("Hello, world!")
            `,
      language: 'go',
    },
  ]}
  style={{
    width: '100%',
    height: '100%',
  }}
/>;
```

"THIS IS GAME HANGING" – @sarthaktexas

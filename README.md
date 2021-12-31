# react-code-samples

usage example:

```js
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
/>
```

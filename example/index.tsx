import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Snippet } from '../src/index';

const App = () => {
  return (
    <div>
      <Snippet
        code={[
          {
            code: `
              console.log('Hello World');
            `,
            language: 'javascript',
          },
          {
            code: `
              println!("Hello, world!");
            `,
            language: 'rust',
          },
        ]}
        theme="nord"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

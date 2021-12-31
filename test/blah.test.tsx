import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Snippet } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
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
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

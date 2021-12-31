import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Snippet } from '../src/index';

const App = () => {
  return (
    <div style={{ marginLeft: '25%', marginRight: '25%', marginTop: '5%' }}>
      <Snippet
        code={[
          {
            code: `
            import axios from 'axios';

            let pred = (await axios.get(\`/api/predict/\${props.modelID}\`, {
              params: {
                modelType: props.modelType,
                values: vals,
                id: props.modelID
              }
            })).data.pred;
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

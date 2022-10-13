// 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

//
// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />);
// 


// 
// 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root');
);

// 


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(
//     React.createElement('button', {
//       onClick: () => console.log('CLICK')
//     }, 'Нажми на меня!')
//   );

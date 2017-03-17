import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Hello ! This is the begining of Coca-code's react appliction ... </h1>
    </div>
  );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);

import React from './react';
import ReactDOM from './react-dom';

let styles = { border:'3px solid red', margin: '5px' }

let element = (
  <div id='A1' style={styles}>
    A1
    <div id='B1' style={styles}>
      B1
      <div id='C1' style={styles}>C1</div>
      <div id='C2' style={styles}>C2</div>
    </div>
    <div id='B2' style={styles}>B2</div>
  </div>
)
console.log(element);
// ReactDOM.render(element, document.getElementById('root'));

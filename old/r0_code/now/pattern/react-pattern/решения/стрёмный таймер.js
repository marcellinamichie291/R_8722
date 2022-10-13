import React from 'react';
import ReactDOM from 'react-dom';

const INTERVAL = 100; let total = 0;

// function Timer(props) {
//   const value=props.value
//   return (<div><p>Таймер:</p><p>
//         <span>{Math.round(value/INTERVAL/60/60)} : </span>
//         <span>{Math.round(value/INTERVAL/60)} : </span>
//         <span>{Math.round(value/INTERVAL)} . </span>
//         <span>{value % INTERVAL}</span>
//       </p></div>);}

class Timer extends React.Component {
  render() {
    const value = this.props.value
    return (<div><p>Таймер:</p><p>
        <span>{Math.round(value/INTERVAL/60/60)} : </span>
        <span>{Math.round(value/INTERVAL/60)} : </span>
        <span>{Math.round(value/INTERVAL)} . </span>
        <span>{value % INTERVAL}</span>
      </p>
    </div>);}}

function increment() {
  total++;
  ReactDOM.render(<Timer value={total}/>, 
  document.getElementById('root'));
}

setInterval(increment, 1000/INTERVAL);
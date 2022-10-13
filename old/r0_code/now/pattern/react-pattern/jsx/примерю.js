const INTERVAL = 100;
let total = 0;

//
function increment() {total++;
  const element = (
    <div><p>Таймер:</p><p>
      <span>{Math.round(total/INTERVAL/60/60)} : </span>
      <span>{Math.round(total/INTERVAL/60)} : </span>
      <span>{Math.round(total/INTERVAL)} . </span>
      <span>{total % INTERVAL}</span>
      </p></div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(increment, 1000/INTERVAL);

//
function Timer(props) {
  const value = props.value;
  return (
    <div><p>Таймер:</p><p>
        <span>{Math.round(value/INTERVAL/60/60)} : </span>
        <span>{Math.round(value/INTERVAL/60)} : </span>
        <span>{Math.round(value/INTERVAL)} . </span>
        <span>{value % INTERVAL}</span>
      </p></div>
  );
}
function increment() {
  total++;
  ReactDOM.render(<Timer value={total}/>, 
  document.getElementById('root'));
}
setInterval(increment, 1000/INTERVAL);
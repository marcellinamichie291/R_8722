function ИмяФункции() {
  const имяПеременной = () => {
    document.getElementById('r_block2').innerHTML += `дада`
  };
  return (
    <button 
      type="" 
      className="" 
      id="" 
      onClick={()=>{имяПеременной()}}
      > Create new event </button>
  );
}

export default ИмяФункции;


// 



ReactDOM.render(
  React.createElement('button', {
    onClick: () => console.log('CLICK') }
  ),
  document.getElementById('root')
);
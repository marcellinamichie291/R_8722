import Box2Create from './Box2Create';

function Box1BtnBoxCreate() {
  function CreateNewEvent() {
    document.getElementById('r_block2').innerHTML = <Box2Create/>
  };
  
  return (
    <div className="r_box1BtnBoxCreate">
      <a href="#r_block2">
        <button 
          type="button" 
          className="btn btn-default btn-primary" 
          id="r_box1CreateNewBtn" 
          onClick={()=>{CreateNewEvent}}
        > Create new event </button>
      </a>
    </div>
  );
}

export default Box1BtnBoxCreate;

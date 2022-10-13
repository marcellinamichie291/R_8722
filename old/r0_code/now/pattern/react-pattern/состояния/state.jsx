class Компонент extends React.Component {
  constructor(props){
    super(props);
    // инициализация state в constructor
    this.state = {свойство: значение};
    // привязывание метода к зыс
    this.метод1 = this.метод1.bind(this);
  };

  // задать изменение состояния_свойства у метода по клику
  метод1(){this.setState(state=>{
    if(state.свойство===true){return {свойство: false}}
    else {return {свойство: true}}
    // или свойство: !state.свойство
  });}

  render () { if (this.state.свойство) { return (
    <div>
      <button onClick={this.метод1}>{this.state.свойство}</button>
    </div>
  );} else { return (
    <div>
      <button onClick={this.метод1}>Click Me R1</button>
    </div>
  );}
}};

//toggleVisibility()


// const r_hClick = this.метод();
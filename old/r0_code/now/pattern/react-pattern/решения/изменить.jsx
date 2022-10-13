// инкремент декремент сброс
class Компонент extends React.Component {
  constructor(props) {
    super(props);
    this.state = {свойство1: значение0};
    // Змініть код під цим рядком
    this.метод1 = this.метод1.bind(this);
    this.метод2 = this.метод2.bind(this);
    this.метод3 = this.метод3.bind(this);
    // Змініть код над цим рядком
  }
  // Змініть код під цим рядком
метод1(){this.setState(state=>{return {свойство1: state.свойство1+1}});}
метод2(){this.setState(state=>{return {свойство1: state.свойство1-1}});}
метод3(){this.setState(state=>{return {свойство1: значение0}});}
  // Змініть код над цим рядком
  render() { return (
      <div>
        <button className='inc' onClick={this.метод1}>метод1!</button>
        <button className='dec' onClick={this.метод2}>метод2!</button>
        <button className='метод3' onClick={this.метод3}>метод3</button>
        <h1>Current свойство1: {this.state.свойство1}</h1>
      </div>
    );
  }
};


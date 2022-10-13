// ввод в инпут и вывод копии снаружи
class Компонент extends React.Component {
  constructor(props) {
    super(props);
    this.state = {свойство: ''};
    this.метод = this.метод.bind(this);
  }
  метод(event){this.setState({свойство: event.target.value});}
  render() { return (
    <div>
      <input value={this.state.свойство} onChange={this.метод}></input>
      <h4>Controlled свойство:</h4>
      <p>{this.state.свойство}</p>
    </div>
  );}};

// ввод в инпут и вывод по клику 
class Компонент extends React.Component {
  constructor(props) {
    super(props);
    this.state = {свойство1: '', свойство2: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {this.setState({свойство1: event.target.value});}
  handleSubmit(event) {event.preventDefault(); this.setState({свойство2: this.state.свойство1});}
  render() {return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.свойство1} onChange={this.handleChange}></input>
        <button type='submit'>Submit!</button>
      </form>
    <h1>{this.state.свойство2}</h1>
    </div>
);}}

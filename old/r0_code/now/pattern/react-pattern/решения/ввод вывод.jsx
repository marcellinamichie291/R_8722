class Компонент1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {свойство1: ''}
    this.handleChange = this.handleChange.bind(this);
  }
handleChange(event) {this.setState({свойство1: event.target.value});}
  render() { return (<div>
    <Компонент2 
      input={this.state.свойство1}
      handleChange={this.handleChange}/>
    <Компонент3 input={this.state.свойство1} />
</div>);}};

class Компонент2 extends React.Component {
  constructor(props) {super(props);}
  render() { return (<div>
    <h3>Get Input:</h3>
    <input
      value={this.props.input}
      onChange={this.props.handleChange}/>
</div>);}};

class Компонент3 extends React.Component {
  constructor(props) {super(props);}
  render() {return (<div>
    <h3>Input Render:</h3>
    <p>{this.props.input}</p>
</div>);}};
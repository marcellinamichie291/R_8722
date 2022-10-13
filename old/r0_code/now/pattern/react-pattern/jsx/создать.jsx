// создать\объявить компонент
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
// создать\объявить компонент
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}

// создать заголовок с именем в виде переменной
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);




// база
       
class Имя extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  } 
  render() { 
    const переменная1 = this.state.value
    return(<div>{Math.round(переменная1/переменная2)}</div>);}}

ReactDOM.render(<Имя/>, document.getElementById('root'));



// ??????????

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
<ChildComponent /> 

        { /* Change code above this line */ }
      </div>
    );
  }
};




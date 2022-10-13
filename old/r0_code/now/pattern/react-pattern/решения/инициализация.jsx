// доступ permission подвязывание
class Компонент1 extends React.Component {
  constructor(props) {
    super(props);
// в компонент1 инициализируем состояние свойства 
    this.state = {свойство: 'CamperBot'}
  }
  render() { return (
    <div>
{/* из компонент1 подвязываем свойство в компонент2  */}
      <Компонент2 свойство={this.state.свойство} />
    </div>
);}};
class Компонент2 extends React.Component {
  constructor(props) {super(props);}
  render() { return (
    <div>
{/* в компонент2 применяем свойство из конструктора компонент1 */}
      <h1>Hello, my свойство is: {this.props.свойство} </h1>
    </div>
);}};
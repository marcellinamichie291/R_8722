
// props
const КомпонентПростой1 = (props) => {return (
  <div><p>R0:{props.свойство1.метод()}</p></div>
);};

class КомпонентСложний extends React.Component {
  constructor(props) {super(props);}
  render() { return (
    <div>
      {/* <КомпонентПростой свойство={[Date(), 'r2']} /> */}
      {/* изменение реквизита по умолчанию */}
      <КомпонентПростой1 свойство1={НовоеЗначение} />
      {/* определение  */}{this.props.свойства}
    </div>
);}};

//реквизиты по умолчанию
КомпонентПростой1.defaultProps = {свойство1:значение}

// PropTypes.func перевіряє, чи є handleClick функцією
import PropTypes from 'prop-types';
Компонент.propTypes = { свойство: PropTypes.тип.isRequired }

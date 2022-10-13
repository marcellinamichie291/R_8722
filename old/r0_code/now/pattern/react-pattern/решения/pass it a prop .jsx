// значение(value) из <input
  value={this.props.input}
  onChange={this.props.handleChange}/>
// присваивается к состоянию(state) inputValue в Компонент1 через 
handleChange(event){this.setState({inputValue: event.target.value});}
// inputValue вкладывается в input из <Компонент2
  input={this.state.inputValue}
  handleChange={this.handleChange}/>

// Также создайте prop с именем handleChange и передайте ему обработчик ввода handleChange.
// Also create a prop called handleChange and pass the input handler handleChange to it.

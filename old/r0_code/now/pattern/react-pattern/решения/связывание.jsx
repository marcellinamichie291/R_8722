
// двухсторонее связывание 
// содержимое инпута в переменную 
import React, { useState } from 'react'; // в каждый создаваемый файл

function App() {
  const [r_value, setValue] = useState('текст в инпуте');
  return (
    <div className="App">
      <h1>{r_value}</h1>
      <input 
        type="text" 
        value={r_value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
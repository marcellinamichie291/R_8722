import React, { useState } from 'react'; // в каждый создаваемый файл

function App() {
  const [likes, setLikes] = useState(0);
  const increment = () => {
    setLikes(likes+1)
  }
  const decriment = () => {
    setLikes(likes-1)
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decriment}>Decrement</button>
    </div>
  );
}

export default App;

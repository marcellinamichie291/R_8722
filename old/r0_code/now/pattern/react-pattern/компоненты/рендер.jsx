class MyPage extends React.Component {
  constructor(props){super(props);}
  render () {return(
    <div id='challenge-node'>
    <h1 className="header">hi r0 react test4</h1>
    <p>text test5</p>
  </div>
);}};

ReactDOM.render(
  <MyPage />,
  document.getElementById('challenge-node')
);

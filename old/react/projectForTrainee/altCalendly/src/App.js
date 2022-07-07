import BookSyncUp from './components/r_Book/BookSyncUp';
import BookDiscovery from './components/r_Book/BookDiscovery';
import BookDemo from './components/r_Book/BookDemo';
import Box1BtnBoxCreate from './components/btn/Create/Box1BtnBoxCreate';


// import Box2Preview from './components/btn/Preview/Box2Preview';
// import Box2FormSave from './components/btn/Preview/PreviewNewEvent';
// import PreviewNewEvent from './components/btn/Preview/PreviewNewEvent';
// import CreateNewEvent from './btn-script';

function App() {
  return (
    <div className="App App-header">
      <div className="rContainer">
        <p className="r_box1Paragraf">Welcome to our scheduling page. Please follow the instructions to add an event to our calendar.</p>

        <div className="r_block1">
          <div className="rRow" id="r_block1">
            <BookSyncUp />
            <BookDiscovery />
            <BookDemo />
          </div>
          <Box1BtnBoxCreate />
        </div>

        <div className="RBlockCreate r_block2 rRow" id="r_block2">
          {/* <Box2Create /> */}
          {/* <Box2Preview /> */}
        </div>
      
      </div>
    </div>
  );
}

export default App;

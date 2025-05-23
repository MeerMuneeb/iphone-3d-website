import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
function App() {

  return (
    <div className="App">
      <Nav/>
      <WebgiViewer/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
    </div>
  );
}

export default App;

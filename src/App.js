import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Shaded from './components/Shaded/Shaded'
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main/>
      <Shaded />
    </div>
  );
}

export default App;

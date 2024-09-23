import Home from "./components/screens/Home";
import Headers from "./components/includes/Header";
import "./App.css";
import About from "./components/screens/About";

function App() {
  return (
    <>
      <Headers />
      <div className="wrapper">
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;

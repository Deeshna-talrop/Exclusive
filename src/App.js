import Home from "./components/screens/Home";
import Headers from "./components/includes/Header";
import "./App.css";

function App() {
  return (
    <>
      <Headers />
      <div className="wrapper">
        <Home />
      </div>
    </>
  );
}

export default App;

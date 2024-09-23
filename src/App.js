import Home from "./components/screens/Home";
import Headers from "./components/includes/Header";
import "./App.css";
import About from "./components/screens/About";
import Footer from "./components/includes/Footer";

function App() {
  return (
    <>
      <Headers />
      <div className="wrapper">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/:name/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

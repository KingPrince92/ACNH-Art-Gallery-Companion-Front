import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Collection from "./components/Collection";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/:name/details" element={<Details />} />
          <Route path="/mycollection" element={<Collection />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

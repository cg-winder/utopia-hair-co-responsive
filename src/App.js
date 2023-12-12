import "./css/App.css";
import "./css/PopUp.css"
import "./css/Navigation.css"
import "./css/normalize.css";
import "./css/maxwidth575.css";
import "./css/minwidth576.css"
import "./css/minwidth768.css";
import "./css/minwidth992.css";
import "./css/minwidth1200.css"
import "./css/minwidth1349.css";
import "./css/minwidth1800.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Salon from "./components/Salon";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="app-container">
      <div className="content-wrap">
        <Navigation/>
        <div id="page-components-wrap">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
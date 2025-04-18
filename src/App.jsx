import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Summary from "./pages/Summary";
import OptionsForm from "./pages/OptionsForm";
import ThanksPage from "./pages/ThanksPage";

function App() {
  return (
    <Router>
          <div className="min-h-screen flex flex-col relative">
              <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/background.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
              >
                  <div className="absolute inset-0 bg-white opacity-80"></div>
              </div>

              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/home-page" element={<><HomePage /><Footer /></>} />
                  <Route path="/main-page" element={<><MainPage /><Footer /></>} />
                  <Route path="/summary-page" element={<><Summary /><Footer /></>} />
                  <Route path="/options-form" element={<><OptionsForm /><Footer /></>} />
                  <Route path="/thanks-page" element={<><ThanksPage /><Footer /></>} />
                </Routes>
              </div>
          </div>
      </Router>
  )
}

export default App

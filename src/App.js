import { Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import ImcPage from "./pages/ImcPage.jsx";
import EdadPage from "./pages/EdadPage.jsx";
import ClockPage from "./pages/ClockPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import './styles/estilos.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/imc' element={<ImcPage />} />
          <Route path='/edad' element={<EdadPage />} />
          <Route path='/clock' element={<ClockPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

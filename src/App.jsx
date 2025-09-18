import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudioPage from "./pages/StudioPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import FooterSection from "./components/FooterSection";
import "./index.css"


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;

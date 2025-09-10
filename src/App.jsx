import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudioPage from "./pages/StudioPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";

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
      {/* <Footer /> */}
    </>
  );
}

export default App;

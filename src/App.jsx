import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ExtraActivities from "./Pages/Progress/Extra.jsx";
import Quran from "./Pages/Progress/Quran.jsx";
import Linguistics from "./Pages/Progress/Linguistics.jsx";
import It from "./Pages/Progress/IT.jsx";
import Projects from "./Pages/Projects.jsx";
import Diniyyah from "./Pages/Progress/diniyyah";
import About from "./Pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/progress/ekstrakurikuler" element={<ExtraActivities />} />
        <Route path="/progress/quran" element={<Quran />} />
        <Route path="/progress/linguistik" element={<Linguistics />} />
        <Route path="/progress/it" element={<It />} />
        <Route path="/progress/diniyyah" element={<Diniyyah />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ExtraActivities from "./Pages/Progress/Extra.jsx";
import Quran from "./Pages/Progress/Quran.jsx";
import Linguistics from "./Pages/Progress/Linguistics.jsx";
import It from "./Pages/Progress/IT.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress/ekstrakurikuler" element={<ExtraActivities />} />
        <Route path="/progress/quran" element={<Quran />} />
        <Route path="/progress/linguistik" element={<Linguistics />} />
        <Route path="/progress/it" element={<It />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import NavBar from "./components/NavBar";

import ActivePage from "./pages/Active";
import CompleatedPage from "./pages/Compleated";
import HomePage from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/active" element={<ActivePage />} />
          <Route path="/compleated" element={<CompleatedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

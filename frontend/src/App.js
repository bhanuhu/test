import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create/Create1";
import Inside from "./Inside/Inside1";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/inside" element={<Inside />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
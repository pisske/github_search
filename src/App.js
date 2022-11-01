import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Error } from "./components/Index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

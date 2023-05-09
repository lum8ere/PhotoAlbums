import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<DefaultLayout />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

import Platform from "./TestPlatform/Platform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createtest from "./CreateTest/Createtest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Platform/>}></Route>
        <Route path="/create" element={<Createtest/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

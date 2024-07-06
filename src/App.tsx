import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Editor from "./page/Editor";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;

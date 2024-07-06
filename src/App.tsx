import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./page/Home/Home";
import Editor from "./page/Editor";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<Editor />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

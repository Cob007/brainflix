import "./App.scss";
import {  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./pages/Videos/Videos";
import UploadVideo from "./pages/UploadVideo/UploadVideo";

const App = () => {
  

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Videos />}/>
        <Route path="/videos/:videoId" element={<Videos />}/>
        <Route path="/upload" element={<UploadVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

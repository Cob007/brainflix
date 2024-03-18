import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./pages/Videos/Videos";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import Header from "./components/Header/Header";

const App = () => {

  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Videos />}/>
        <Route path="/videos/:videoId" element={<Videos />}/>
        <Route path="/upload" element={<UploadVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

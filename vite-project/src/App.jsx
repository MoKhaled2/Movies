import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import InfoPage from "./components/infoPage";
    import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movie/:id" element={<InfoPage />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

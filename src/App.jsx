import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import BlogPostPage from "./pages/Blog/BlogPostPage";
import Blog from "./pages/Blog/blog";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import DefaultFooter from "./components/FooterGeral/DefaultFooter";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import "animate.css";
import LocaisDeColeta from "./pages/LocaisDeColeta/LocaisDeColeta";
import MaintenancePage from './components/MaintenancePage'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <div className="animate__animated animate__fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/locais-de-coleta" element={<LocaisDeColeta />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
          </Routes>
        </div>
      </ScrollToTop>
      <DefaultFooter /> {/* Exibe o DefaultFooter */}
      <ScrollToTopButton />
    </>
  );
}

export default App;

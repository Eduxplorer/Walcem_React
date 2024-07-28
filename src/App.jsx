import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import BlogPostPage from './pages/Blog/BlogPostPage.jsx';
import Blog from './pages/Blog/blog.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Header from './components/Header/Header.jsx';
import DefaultFooter from './components/FooterGeral/DefaultFooter.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import 'animate.css';

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop>
        <div className="animate__animated animate__fadeIn">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </div>
      </ScrollToTop>
      <DefaultFooter /> {/* Exibe apenas HomeFooter */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;

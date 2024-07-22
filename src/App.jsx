import Header from "./components/Header/Header";

import WelcomeSection from "./components/Welcome/Welcome";
import "./App.css";
import MissionSection from "./components/Mission/Mission";
import InformationSection from "./components/Information/Information";
import ImpactSection from "./components/Impact/Impact";
import AboutSection from "./components/About/About";
import FAQSection from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <WelcomeSection />
      <MissionSection />
      <InformationSection />
      <ImpactSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;

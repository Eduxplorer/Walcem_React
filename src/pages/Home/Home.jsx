
import Header from '../../components/Header/Header'
import WelcomeSection from './components/Welcome/Welcome'
import Mission from './components/Mission/Mission'
import InformationSection from './components/Information/Information'
import ImpactSection from './components/Impact/Impact'
import FAQSection from './components/FAQ/Faq'
import ContactFooter from '../../components/Footer/ContactFooter'
import AboutUs from './components/About/About'

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <Mission />
      <InformationSection />
      <ImpactSection />
      <AboutUs />
      <FAQSection />
      <ContactFooter />
    </div>
  )
}

export default Home;
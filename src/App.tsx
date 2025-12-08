import './App.css'
import Chat from './components/chatbot/Chat'
import PremiumHero from './components/HeroSection'
import Navbar from './components/NavBar'
import PremiumContact from './components/PremiumContact'
import PremiumFeatures from './components/PremiumFeatures'
import PremiumFooter from './components/PremiumFooter'

function App() {

  return (
     <>
     <Navbar/>
     <PremiumHero />
     <PremiumFeatures/>
     <PremiumContact/>
     <PremiumFooter/>
     <Chat/>
     </>
  )
}

export default App

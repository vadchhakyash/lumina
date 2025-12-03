import './App.css'
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
     </>
  )
}

export default App

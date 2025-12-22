import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicyPage from './pages/Privacy'

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>

    <Footer />
    </>
  )
}

export default App

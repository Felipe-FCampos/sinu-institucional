import '../App.css'
import Hero from '../components/hero'
import Resources from '../components/resources'
import Workflow from '../components/workflow'
import Security from '../components/security'
import Faq from '../components/faq'
import SupportForm from '../components/contact'

function Home() {

  return (
    <>
      <main>
        <Hero />

        <Resources />

        <Workflow />

        <Security />

        <SupportForm />

        <Faq />
      </main>
    </>
  )
}

export default Home

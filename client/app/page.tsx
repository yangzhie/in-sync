import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Languages from "./components/Languages/Languages"
import Nav from "./components/Nav/Nav"
import Sponsors from "./components/Sponsors/Sponsors"
import Support from "./components/Support/Support"
import Tools from "./components/Tools/Tools"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Sponsors />
      <Support />
      <Languages />
      <Tools />
      <Footer />
    </>
  )
}

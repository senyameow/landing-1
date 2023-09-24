import Head from "./components/Head"
import BannerMain from "./components/BannerMain"
import Section_2 from "./components/sections/Section_2"
import Section_3 from "./components/sections/Section_3"
import Section_4 from "./components/sections/Section_4"
import Section_5 from "./components/sections/Section_5"
import Section_6 from "./components/sections/Section_6"
import Footer from "./components/sections/Footer"
function App() {

  return (
    <div className="h-full w-full relative overflow-x-hidden">
      <Head />
      <BannerMain />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Footer />
    </div>
  )
}

export default App

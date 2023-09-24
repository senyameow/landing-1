import Head from "./components/Head"
import { banner_1 } from "./assets"
import BannerMain from "./components/BannerMain"
import Section_2 from "./components/sections/Section_2"
import Section_3 from "./components/sections/Section_3"
import Section_4 from "./components/sections/Section_4"
function App() {

  return (
    <div className="h-full w-full relative">
      <Head />
      <BannerMain />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </div>
  )
}

export default App

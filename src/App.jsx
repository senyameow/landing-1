import Head from "./components/Head"
import { banner_1 } from "./assets"
import BannerMain from "./components/BannerMain"
import Section_2 from "./components/sections/Section_2"
function App() {

  return (
    <div className="h-full w-full relative">
      <Head />
      <BannerMain />
      <Section_2 />
    </div>
  )
}

export default App

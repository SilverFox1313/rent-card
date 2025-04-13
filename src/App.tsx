import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import PopularCar from "./sections/PopularCar"

const App = () => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto sm:px-16 px-6">
        <Hero />
        <PopularCar />
        <Footer />
      </div>
    </div>
  )
}

export default App
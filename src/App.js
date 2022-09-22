import './App.css';
import Hero from './components/hero';
import Programs from "./components/programs"
import Reasons from "./components/Reasons"
import Plans from "./components/plans"
import Testimonials from './components/Testimonials'
import Join from "./components/Join"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plans></Plans>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;

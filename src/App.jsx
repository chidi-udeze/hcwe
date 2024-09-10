import About from './components/About';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Insights } from './components/Insights';
import { Special } from './components/Special';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Home/> 
      <About/> 
      <Special/> 
      <Testimonial/>
      <Insights/>
      <Footer/>
    </div>
  );
}

export default App;

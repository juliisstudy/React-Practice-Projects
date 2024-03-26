import './App.css';
import Accordian from './components/accordion';
import MultiSelection from './components/accordion/MultiSelection';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from "./components/Slideshow";

function App() {
  return (
    <div className="App">
     {/* <Accordian /> */}
     {/* <MultiSelection /> */}
     {/* <RandomColor/> */}
     {/* <StarRating nuOfStars={10}/> */}
     <ImageSlider url ={"https://picsum.photos/v2/list"} />
    </div>
  );
}

export default App;

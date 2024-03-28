import './App.css';
import Accordian from './components/accordion';
import MultiSelection from './components/accordion/MultiSelection';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from "./components/Slideshow";
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code'
import LightDarkMode from './components/light-dark-mode'

function App() {
  return (
    <div className="App">
     {/* <Accordian /> */}
     {/* <MultiSelection /> */}
     {/* <RandomColor/> */}
     {/* <StarRating nuOfStars={10}/> */}
     {/* <ImageSlider url ={"https://picsum.photos/v2/list"} /> */}
     {/* <LoadMoreData /> */}
     {/* <TreeView menus={menus}/> */}
     {/* <QRCodeGenerator/> */}
     <LightDarkMode />
    </div>
  );
}

export default App;

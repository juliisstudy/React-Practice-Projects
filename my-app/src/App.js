import "./App.css";
import Accordian from "./components/accordion";
import MultiSelection from "./components/accordion/MultiSelection";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/Slideshow";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/tab/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlags from "./components/featureFlags";
import FeatureFlagGlobalState from "./components/featureFlags/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-bottom/index";
import ScrollToSection from "./components/scroll-to-top-bottom/scroll-to-section";

import { Routes, Route } from "react-router-dom";

//food
import Navbar from "./components/food/components/navbar";
import Home from "./components/food/home";
import Favorites from "./components/food/favorites";
import Detail from "./components/food/detail";

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
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}

      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Accordion from "@/app/components/accordion/Accordion";
import RandomColor from "@/app/components/randomColor/RandomColor";
import StarRating from "@/app/components/star/StarRating";
import ImageSlider from "../components/imageSlider/ImageSlider";
import LoadData from "../components/loaddata/LoadData";
import TabTest from "../components/tab/tab-test";
import ModelTest from "../components/modal/model-test";
import GithubProfileFinder from "../components/github-profile-finder/index";
import SearchAutocomplete from "../components/searchComplete/index";

// import TreeView from "../components/tree-view/menu-list";
export default function practiceII() {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStart={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}
      {/* <LoadData /> */}
      <TabTest />
      {/* <TreeView /> */}
      <ModelTest />
      {/* <GithubProfileFinder /> */}
      <SearchAutocomplete />
    </div>
  );
}

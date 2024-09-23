import React from "react";
import Accordion from "@/app/components/accordion/Accordion";
import RandomColor from "@/app/components/randomColor/RandomColor";
import StarRating from "@/app/components/star/StarRating";
import ImageSlider from "../components/imageSlider/ImageSlider";
import LoadData from "../components/loaddata/LoadData";
// import TreeView from "../components/tree-view/menu-list";
export default function page() {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStart={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}
      <LoadData />
      {/* <TreeView /> */}
    </div>
  );
}

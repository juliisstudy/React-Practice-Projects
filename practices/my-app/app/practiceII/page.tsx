import React from "react";
import Accordion from "@/app/components/accordion/Accordion";
import RandomColor from "@/app/components/randomColor/RandomColor";
import StarRating from "@/app/components/star/StarRating";
import ImageSlider from "../components/imageSlider/ImageSlider";
export default function page() {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStart={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </div>
  );
}

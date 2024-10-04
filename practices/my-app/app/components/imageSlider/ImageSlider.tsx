"use client";
import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";
import "./style.css";

type Image = {
  id: number;
  download_url: string;
};

export default function ImageSlider({
  url,
  limit,
  page,
}: {
  url: string;
  limit: number;
  page: number;
}) {
  const [currIndex, setCurrIndex] = useState(0);
  const [images, setImages] = useState<Image[]>([]);
  const [errorMsg, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrIndex(currIndex === 0 ? images.length - 1 : currIndex - 1);
  }

  function handleNext() {
    setCurrIndex(currIndex === images.length - 1 ? 0 : currIndex + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <div onClick={handlePrevious} className="arrow arrow-left">
        <BsArrowLeftCircleFill />
      </div>

      {images && images.length
        ? images.map((imageItem, index) => (
            <Image
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currIndex === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              width={200}
              height={200}
            />
          ))
        : null}
      <div onClick={handleNext} className="arrow arrow-right">
        <BsArrowRightCircleFill />
      </div>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currIndex === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrIndex(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

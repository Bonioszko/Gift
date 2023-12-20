import { useParams } from "react-router-dom";
import { useState } from "react";

const Images = () => {
  const images = [];

  const { location } = useParams();
  const path = `./Images/${location}`;
  images.push(path + "/Image1.jpg");
  console.log(images);

  return (
    <>
      <div className="main">
        <div className="content">
          {location}
          <img src={images[0]} alt="pozdro" />
        </div>
      </div>
    </>
  );
};
export default Images;

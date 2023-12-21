import { useParams } from "react-router-dom";
import { useState } from "react";

import "./Image.css";
const Images = () => {
  const images = [];
  const [selectedImage, setSelectedImage] = useState("");
  const [clicked, setClicked] = useState(false);
  const { location } = useParams();
  const path = `./Images/${location}`;
  images.push(path + "/Image1.jpg");
  images.push(path + "/Image2.jpg");
  images.push(path + "/Image3.jpg");
  images.push(path + "/Image4.jpg");
  images.push(path + "/Image5.jpg");
  images.push(path + "/Image6.jpg");
  images.push(path + "/Image7.jpg");
  images.push(path + "/Image8.jpg");

  const handleImageClick = (event) => {
    const src = event.target.src;
    setSelectedImage(src);
    setClicked(true);
  };
  const handlePageClick = () => {
    setClicked(false);
  };
  return (
    <>
      <div className="main-content">
        <div className={"gallery" + (clicked ? " blur" : "")}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="pozdro"
              onClick={handleImageClick}
            />
          ))}
        </div>
      </div>
      <img
        src={selectedImage}
        alt="do not have"
        className={clicked ? "clicked" : "hide"}
        onClick={handlePageClick}
      ></img>
    </>
  );
};
export default Images;

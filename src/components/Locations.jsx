import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./location.css";
function Location({ location }) {
  let iframeUrl = "";
  if (location == "Berlin") {
    iframeUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603731414!2d13.25992854961276!3d52.506938616330274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1703098523363!5m2!1spl!2spl";
  } else if (location == "Promnice") {
    iframeUrl =
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13460.382260851544!2d16.955235573790986!3d52.55621736437912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704685e53b715c1%3A0xec1fcd5529c06198!2sLe%C5%9Bna%20112%2C%2062-005%20Promnice!5e0!3m2!1spl!2spl!4v1703099712363!5m2!1spl!2spl";
  } else if (location == "Praga") {
    iframeUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81965.53403375752!2d14.38322495254!3d50.05964048567831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraga%2C%20Czechy!5e0!3m2!1spl!2spl!4v1703100035120!5m2!1spl!2spl";
  } else if (location == "Poznań") {
    iframeUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77899.03511218326!2d16.745787785931473!3d52.400426047807485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d2ece10ab7%3A0xa4ea31980334bfd1!2zUG96bmHFhA!5e0!3m2!1spl!2spl!4v1703100090900!5m2!1spl!2spl";
  }

  return (
    <>
      <div className="location">
        <iframe src={iframeUrl} style={{ border: "0" }} loading="lazy"></iframe>
        <Button location={location}></Button>
      </div>
    </>
  );
}

export default Location;

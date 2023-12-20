import { useParams } from "react-router-dom";
const Images = () => {
  const { location } = useParams();
  return <div>{location}</div>;
};
export default Images;

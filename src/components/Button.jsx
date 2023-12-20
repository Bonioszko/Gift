import "./Button.css";
import { Link } from "react-router-dom";
function Button({ location }) {
  return (
    <Link to={location} className="custom-link">
      {location}
    </Link>
  );
}
export default Button;

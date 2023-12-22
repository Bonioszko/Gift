import { Link } from "react-router-dom";
import "./Present.css";
const Present = () => {
  return (
    <div className="present">
      <div className="lid">
        <span></span>
      </div>
      <div className="promo">
        <Link to="/Gift/Maps" className="link">
          <h2>Mały prezent</h2>
        </Link>
      </div>
      <div className="box">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Present;

import { ReactComponent as RatingStar } from "assets/images/rating-star.svg";

import "./styles.css";

const RatingCard = () => {
  return (
    <div className="rating-card-container">
      <span className="star-wrapper"><RatingStar /></span>
      <span className="rating-username"><b>Maria Silva</b></span>
      <div className="comment-box">
        Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
      </div>
    </div>
  );
};

export default RatingCard;

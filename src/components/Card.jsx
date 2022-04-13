import { useState } from 'react';

import images from '../constants/images';
import './Card.scss';

const content = {
  title: 'How did we do?',
  description:
    'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!',
  maxRating: 5,
};

const RatingComponent = ({ num, handler, rating }) => (
  <button
    type="button"
    className={`rating-btn${rating === num ? ' active' : ''}`}
    onClick={() => handler(num)}
  >
    {num}
  </button>
);

const Card = ({
  title = content.title,
  description = content.description,
  maxRating = content.maxRating,
}) => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const clickHandler = (num) => {
    if (rating !== num) {
      setRating(num);
    }
  };

  const submitHandler = () => {
    setSubmitted(true);
  };

  const ratingArr = [];

  for (let i = 0; i < maxRating; i++) {
    ratingArr.push(
      <RatingComponent
        num={i + 1}
        key={i}
        handler={clickHandler}
        rating={rating}
      />
    );
  }

  return (
    <div className="card__container">
      <div className={`card__content${submitted ? ' back' : ''}`}>
        <div className="card__rating">
          <div className="icon">
            <div className="image__container">
              <img src={images.icon} alt="icon-star" />
            </div>
          </div>
          <div className="content">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <div className="rating-btn__container">{ratingArr}</div>
          </div>
          <button
            type="button"
            className="card__cta"
            onClick={submitHandler}
            disabled={!rating}
          >
            submit
          </button>
        </div>
        <div className={`card__thanks${submitted ? ' active' : ''}`}>
          <div className="illustration">
            <div className="image__container">
              <img src={images.thankYouIllus} alt="thank you" />
            </div>
          </div>
          <div className="rating__result">
            <div className="rating">
              You selected {rating} out of {maxRating}
            </div>
          </div>
          <div className="thankyou__container">
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

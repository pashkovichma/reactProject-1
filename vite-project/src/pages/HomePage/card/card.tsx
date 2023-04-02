import { ICarData } from 'data/data';
import './card.css';

function Card() {
  return (
    <div className="card">
      <img className="card__image" src={img} alt={name} />
      <div className="card__info">
        <div className="card__name">{name}</div>
        <div className="card__year">{year}</div>
        <div className="card__color">{color}</div>
        <div className="card__km">{km}</div>
        <div className="card__price">{price}</div>
        <div className="card__description">{description}</div>
      </div>
    </div>
  );
}

export default Card;

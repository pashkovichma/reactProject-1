import { ICarData } from 'data/data';
import './card.css';

function Card(car: ICarData) {
  return (
    <div className="card">
      <img className="card__image" src={car.img} alt={car.name} />
      <div className="card__info">
        <div className="card__name">{car.name}</div>
        <div className="card__year">{car.year}</div>
        <div className="card__color">{car.color}</div>
        <div className="card__km">{car.km}</div>
        <div className="card__price">{car.price}</div>
        <div className="card__description">{car.description}</div>
      </div>
    </div>
  );
}

export default Card;

import { ICar } from '../../../types/interfaces';
import { NotFound } from './NotFound';
import './Modal.scss';

interface IProps {
  card: ICar | null;
}

export const ModalCard = ({ card }: IProps) => {
  const result = card ? (
    <div className="container">
      <img className="img" src={card.urls.regular} alt="picture" />
      <div className="card__name">Made by: {card.user}</div>
      <div className="card__likes">likes: {card.likes}</div>
      <div className="card__description">{card.description}</div>
    </div>
  ) : (
    <NotFound />
  );
  return result;
};

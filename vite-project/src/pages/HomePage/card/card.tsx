import { ICar } from '../../../types/interfaces';
import './card.css';
import { MyButton } from '../MyButton/MyButton';

interface IProps {
  picture: ICar;
  setCard: (card: ICar) => void;
}

export const Card = ({ picture, setCard }: IProps) => {
  return (
    <div className="card">
      <img className="card__image" src={picture.urls.small} alt="picture" />
      <div>{picture.user.name}</div>
      <MyButton onClick={setCard}>Show more</MyButton>
    </div>
  );
};

export default Card;

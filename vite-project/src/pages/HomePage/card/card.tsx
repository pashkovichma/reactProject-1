import { ICard } from '../../../types/interfaces';
import './card.css';
import { MyButton } from '../MyButton/MyButton';

interface IProps {
  picture: ICard;
  setCardActive: (text: string) => void;
  setModalActive: (text: boolean) => void;
}

export function Card({ picture, setModalActive, setCardActive }: IProps) {
  const handleClick = () => {
    setCardActive(picture.id);
    setModalActive(true);
    console.log('click');
  };

  return (
    <div className="card">
      <img className="card__image" src={picture.urls.small} alt="picture" />
      <div>likes: {picture.likes}</div>
      <div>{picture.user.name}</div>
      <MyButton onClick={handleClick}>Show more</MyButton>
    </div>
  );
}

export default Card;

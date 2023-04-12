import Card from '../card/card';
import './cardList.css';
import { ICar } from '../../../types/interfaces';
import { NotFound } from '../../HomePage/Modal/NotFound';
import { MyLoader } from '../MyLoader/MyLoader';

interface IProps {
  list: ICar[];
  isLoading: boolean;
  setCard: (card: ICar) => void;
}

export const CardList = ({ list, isLoading, setCard }: IProps) => {
  if (isLoading) return <MyLoader />;
  if (!list.length) return <NotFound />;
  return (
    <div className="cards cards__list">
      {list.map((item) => (
        <Card picture={item} key={item.id} setCard={() => setCard(item)} />
      ))}
    </div>
  );
};

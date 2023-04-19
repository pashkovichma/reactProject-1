import CloseModal from './CloseModal';
import './Modal.scss';
import { useSearchPhotoByIdQuery } from '../../../store/apiSlice';

interface IProps {
  cardVisible: string;
  setModalVisible: (text: boolean) => void;
}

export function Modal({ cardVisible, setModalVisible }: IProps) {
  const { data } = useSearchPhotoByIdQuery(cardVisible);

  const hanldeClick = () => {
    setModalVisible(false);
  };

  return (
    <div className="modal">
      <div className="content">
        <div className="container">
          <img className="img" src={data?.urls.regular} alt="picture" />
          <div className="card__user">Made by: {data?.user.name}</div>
          <div className="card__likes">likes: {data?.likes}</div>
          <div className="card__created">likes: {data?.created_at}</div>
          <div className="card__description">{data?.description}</div>
        </div>
        <span className="close" onClick={hanldeClick}>
          <CloseModal />
        </span>
      </div>
      <div className="back"></div>
    </div>
  );
}

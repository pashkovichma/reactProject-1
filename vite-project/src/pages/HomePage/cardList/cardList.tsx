import { useState } from 'react';
import Card from '../card/card';
import './cardList.css';
import { NotFound } from '../../HomePage/Modal/NotFound';
import { MyLoader } from '../MyLoader/MyLoader';
import { Modal } from '../Modal/Modal';
import { useAppSelector } from '../../../store/hooks/redux';
import { useSearchPhotosQuery } from '../../../store/apiSlice';

export function CardList() {
  const query = useAppSelector((state) => state.search.query);
  const { data = [], isLoading } = useSearchPhotosQuery(query);
  const [cardActive, setCardActive] = useState('');
  const [modalAcitve, setModalActive] = useState(false);

  if (isLoading) return <MyLoader />;
  if (!data.length) return <NotFound />;
  return (
    <>
      {isLoading && <MyLoader />}
      {!isLoading && (
        <div className="cards cards__list">
          {data.map((item) => (
            <Card
              key={item.id}
              picture={item}
              setCardActive={setCardActive}
              setModalActive={setModalActive}
            />
          ))}
        </div>
      )}
      {modalAcitve && <Modal cardVisible={cardActive} setModalVisible={setModalActive} />}
    </>
  );
}

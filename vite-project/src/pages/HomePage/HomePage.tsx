// import CardList from './cardList/cardList';
// import Search from './Search/search';

// const HomePage = () => {
//   return (
//     <div>
//       <Search />
//       <CardList />
//     </div>
//   );
// };

// export default HomePage;

import { useState, useEffect } from 'react';
import { ICar } from '../../types/interfaces';
import { CardList } from './cardList/cardList';
import { Modal } from './Modal/Modal';
import Search from './Search/search';
import { ModalCard } from './Modal/ModalCard';
import Unsplash from '../../API/Unsplash';
import { useFetching } from './useFetching';

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState<ICar[]>([]);
  const [modal, setModal] = useState<ICar | null>(null);
  const [search, setSearch] = useState('');

  const setFetchList = async (str: string) => {
    const list = await Unsplash(str);
    setList(list);
  };

  const useDebounce = (func: (str: string) => Promise<void>) => {
    let isDebounce: NodeJS.Timeout | null = null;
    return function (str: string) {
      if (isDebounce) {
        clearTimeout(isDebounce);
        isDebounce = null;
      }
      isDebounce = setTimeout(func, 500, str);
    };
  };

  const { fetching, isLoading } = useFetching(setFetchList);

  useEffect(() => {
    const value = localStorage.getItem('value') || '';
    setSearch(value);
    fetching(value);
  }, []);

  const handleSearch = async (str: string) => {
    setSearch(str);
    await fetching(str);
  };

  //const handleWithinDebounce = useDebounce(handleSearch);

  const hanleCardClick = (card: ICar) => {
    setModal(card);
    setVisible(true);
  };

  return (
    <div>
      <Modal visible={visible} setVisible={setVisible}>
        <ModalCard card={modal} />
      </Modal>
      <Search />
      <CardList list={list} isLoading={isLoading} setCard={hanleCardClick} />
    </div>
  );
};

export default HomePage;

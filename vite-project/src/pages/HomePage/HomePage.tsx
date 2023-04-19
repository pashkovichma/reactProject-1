import { CardList } from './cardList/cardList';
import SearchInput from './Search/search';

const HomePage = () => {
  return (
    <div>
      <SearchInput />
      <CardList />
    </div>
  );
};

export default HomePage;

const LSName = 'searchValue';
interface IProps {
  setSearch: (str: string) => void;
  value?: string;
  [key: string]: unknown;
}

// const getInitialValue = () => {
//   return localStorage.getItem(LSName) || '';
// };

const SearchInput = ({ setSearch, value }: IProps) => {
  // const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  // const searchValueRef = useRef('');

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem(LSName, searchValueRef.current || '');
  //   };
  // }, []);

  // useEffect(() => {
  //   searchValueRef.current = searchValue;
  // }, [searchValue]);

  // const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSearchValue(value);
  // };

  return (
    <div className="search">
      <input
        className="input search__input"
        type="text"
        //value={searchValue}
        placeholder="..."
        onChange={(event) => setSearch(event.target.value)}
        defaultValue={value}
      />
    </div>
  );
};

export default SearchInput;

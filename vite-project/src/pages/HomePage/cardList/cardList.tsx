import data from '../../../data/data';
import Card from '../card/card';
import './cardList.css';

function CardList(data: ) {
  return (
    <div className="cards cards__list">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            year={item.year}
            color={item.color}
            km={item.km}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default CardList;

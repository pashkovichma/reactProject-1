import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import data from '../../../data/data';
import Card from '../card/card';
import './cardList.css';
class CardList extends Component {
    render() {
        return (_jsx("div", { className: "cards cards__list", children: data.map((item) => {
                return (_jsx(Card, { name: item.name, year: item.year, color: item.color, km: item.km, img: item.img, price: item.price, description: item.description }, item.id));
            }) }));
    }
}
export default CardList;

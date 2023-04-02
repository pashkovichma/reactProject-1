import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import './card.css';
class Card extends Component {
    render() {
        return (_jsxs("div", { className: "card", children: [_jsx("img", { className: "card__image", src: this.props.img, alt: this.props.name }), _jsxs("div", { className: "card__info", children: [_jsx("div", { className: "card__name", children: this.props.name }), _jsx("div", { className: "card__year", children: this.props.year }), _jsx("div", { className: "card__color", children: this.props.color }), _jsx("div", { className: "card__km", children: this.props.km }), _jsx("div", { className: "card__price", children: this.props.price }), _jsx("div", { className: "card__description", children: this.props.description })] })] }));
    }
}
export default Card;

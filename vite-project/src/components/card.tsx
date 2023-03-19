import React, { Component } from 'react';
import { ICarData } from 'data/data';
import './card.css';

class Card extends Component<ICarData> {
    render() {
        return (
            <div className="card">
                <img className="card__image" src={this.props.img} alt={this.props.name} />
                <div className="card__info">
                    <div className="card__name">{this.props.name}</div>
                    <div className="card__year">{this.props.year}</div>
                    <div className="card__color">{this.props.color}</div>
                    <div className="card__km">{this.props.km}</div>
                    <div className="card__price">{this.props.price}</div>
                    <div className="card__description">{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default Card;
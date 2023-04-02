import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Form from './form/form';
import FormCard from './formCard/formCard';
class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formCards: [],
            isCardHidden: true,
        };
    }
    addFormCard = (formCard) => {
        const formCards = [...this.state.formCards, formCard];
        this.setState({ formCards, isCardHidden: false });
        setTimeout(() => {
            this.setState({ isCardHidden: true });
        }, 10000);
    };
    render() {
        return (_jsxs("main", { children: [_jsx("h2", { children: "Form page" }), _jsx(Form, { addFormCard: this.addFormCard }), _jsx("h2", { hidden: this.state.isCardHidden, children: "Card added" }), _jsx("div", { className: "form-cards", children: this.state.formCards.map((card, index) => {
                        return (_jsx(FormCard, { name: card.name, surname: card.surname, date: card.date, country: card.country, gender: card.gender, photo: card.photo, consent: card.consent }, index));
                    }) })] }));
    }
}
export default FormPage;

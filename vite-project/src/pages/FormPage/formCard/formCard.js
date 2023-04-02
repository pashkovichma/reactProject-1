import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
class FormCard extends React.Component {
    render() {
        return (_jsxs("div", { className: "form-card", children: [_jsx("img", { src: URL.createObjectURL(this.props.photo), alt: "photo" }), _jsxs("p", { children: ["Name: ", this.props.name] }), _jsxs("p", { children: ["Surname: ", this.props.surname] }), _jsxs("p", { children: ["Birthday: ", this.props.date] }), _jsxs("p", { children: ["Country: ", this.props.country] }), _jsxs("p", { children: ["Gender: ", this.props.gender] }), _jsx("p", { children: "I consent to my personal data" })] }));
    }
}
export default FormCard;

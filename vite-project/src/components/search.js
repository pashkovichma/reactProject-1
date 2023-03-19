import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
//import './search.css';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: localStorage.getItem('searchValue') || '' };
    }
    componentWillUnmount = () => {
        localStorage.setItem('searchValue', this.state.value);
    };
    componentDidUpdate = () => {
        localStorage.setItem('searchValue', this.state.value);
    };
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };
    handleClearClick = () => {
        this.setState({ value: '' });
    };
    render() {
        return (_jsxs("div", { className: "search", children: [_jsx("input", { className: "input search__input", type: "search", value: this.state.value, placeholder: "...", onChange: this.handleChange }), _jsx("button", { className: "button search-button", children: "search" }), _jsx("button", { className: "button clear-button", onClick: this.handleClearClick, children: "clear" })] }));
    }
}
export default Search;

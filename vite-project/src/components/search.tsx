import React from 'react';
//import './search.css';

class Search extends React.Component<{ text?: string }, { value: string }> {
    constructor(props: { text?: string }) {
        super(props);
        this.state = { value: localStorage.getItem('searchValue') || '' };
    }

    componentWillUnmount = () => {
        localStorage.setItem('searchValue', this.state.value);
    };

    componentDidUpdate = () => {
        localStorage.setItem('searchValue', this.state.value);
    };

    handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ value: event.target.value });
    }

    handleClearClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        this.setState({ value: '' });
    };

    render() {
        return (
            <div className="search">
                <input
                    className="input search__input"
                    type="search"
                    value={this.state.value}
                    placeholder="..."
                    onChange={this.handleChange}
                />
                <button className="button search-button">search</button>
                <button className="button clear-button" onClick={this.handleClearClick}>clear</button>
            </div>
        );
    }
}

export default Search;
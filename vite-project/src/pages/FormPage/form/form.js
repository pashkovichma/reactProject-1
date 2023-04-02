import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './form.css';
class Form extends React.Component {
    form;
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            isNameInputValid: true,
            isSurnameInputValid: true,
            isDateInputValid: true,
            isCountrySelectValid: true,
            isGenderInputValid: true,
            isFileInputValid: true,
            isConsentInputValid: true,
        };
    }
    validateNameInput() {
        const nameInputValue = this.form.current?.nameInput.value;
        const isNameInputValid = nameInputValue.length >= 2 &&
            nameInputValue[0].toLocaleUpperCase() &&
            nameInputValue.trim() !== '';
        this.setState({ isNameInputValid });
        return isNameInputValid;
    }
    validateSurnameInput() {
        const surnameInputValue = this.form.current?.nameInput.value;
        const isSurnameInputValid = surnameInputValue.length >= 2 &&
            surnameInputValue[0].toLocaleUpperCase() &&
            surnameInputValue.trim() !== '';
        this.setState({ isSurnameInputValid });
        return isSurnameInputValid;
    }
    validateDateInput() {
        const dateInputValid = this.form.current?.dateInput.value;
        const isDateInputValid = dateInputValid !== '';
        this.setState({ isDateInputValid });
        return isDateInputValid;
    }
    validateCountrySelect() {
        const countrySelectValue = this.form.current?.country.value;
        const isCountrySelectValid = countrySelectValue !== 'Select country';
        this.setState({ isCountrySelectValid });
        return isCountrySelectValid;
    }
    validateGenderInput() {
        const genderInputValue = this.form.current?.genderInput.value;
        const isGenderInputValid = genderInputValue !== '';
        this.setState({ isGenderInputValid });
        return isGenderInputValid;
    }
    validateFileInput() {
        const fileInputValue = this.form.current?.fileInput.files[0];
        const isFileInputValid = fileInputValue !== undefined;
        this.setState({ isFileInputValid });
        return isFileInputValid;
    }
    validateConsentInput() {
        const isConsentInputValid = this.form.current?.consentInput.checked;
        this.setState({ isConsentInputValid });
        return isConsentInputValid;
    }
    validateForm() {
        return [
            this.validateNameInput(),
            this.validateSurnameInput(),
            this.validateDateInput(),
            this.validateCountrySelect(),
            this.validateGenderInput(),
            this.validateFileInput(),
            this.validateConsentInput(),
        ].every((value) => value === true);
    }
    handleSubmitClick = () => {
        const data = {
            name: this.form.current?.nameInput.value,
            surname: this.form.current?.surnameInput.value,
            date: this.form.current?.dateInput.value,
            country: this.form.current?.country.value,
            gender: this.form.current?.genderInput.value,
            photo: this.form.current?.fileInput.files[0],
            consent: this.form.current?.consentInput.checked,
        };
        if (this.validateForm()) {
            this.props.addFormCard(data);
            this.form.current?.reset();
        }
    };
    render() {
        return (_jsxs("form", { className: "form", ref: this.form, children: [_jsxs("div", { className: "form-group__item", children: [_jsx("label", { htmlFor: "nameInput", className: "form-group__label", children: "Name" }), _jsx("input", { className: "form-group__input", id: "nameInput", type: "text", name: "nameInput" }), _jsx("span", { className: "error-message", hidden: this.state.isNameInputValid, children: "Please enter correct name" })] }), _jsxs("div", { className: "form-group__item", children: [_jsx("label", { htmlFor: "surnameInput", className: "form-group__label", children: "Surname" }), _jsx("input", { className: "form-group__input", id: "surnameInput", type: "text", name: "surnameInput" }), _jsx("span", { className: "error-message", hidden: this.state.isSurnameInputValid, children: "Please enter correct surname" })] }), _jsxs("div", { className: "form-group__item", children: [_jsx("label", { htmlFor: "dateInput", className: "form-group__label", children: "Birthday" }), _jsx("input", { className: "form-group__input", id: "dateInput", type: "date", name: "dateInput" }), _jsx("span", { className: "error-message", hidden: this.state.isDateInputValid, children: "Please enter your birthday" })] }), _jsxs("div", { className: "form-group__item", children: [_jsx("label", { htmlFor: "country", className: "form-group__label", children: "Country" }), _jsxs("select", { className: "form-group__select", id: "country", name: "country", defaultValue: "select your country", children: [_jsx("option", { value: "Select country", disabled: true, children: "Select country" }), _jsx("option", { value: "Belarus", children: "Belarus" }), _jsx("option", { value: "Poland", children: "Poland" }), _jsx("option", { value: "Lithuania", children: "Lithuania" }), _jsx("option", { value: "Ukrain", children: "Ukrain" }), _jsx("option", { value: "Another", children: "Another" })] }), _jsx("span", { className: "error-message", hidden: this.state.isCountrySelectValid, children: "Please enter your country" })] }), _jsxs("div", { className: "form-group__item", children: [_jsx("legend", { className: "form-group__legend", children: "Gender" }), _jsxs("div", { className: "form-group__item-box", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "male", children: "Male" }), _jsx("input", { id: "male", type: "radio", name: "genderInput", value: "man" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "female", children: "Female" }), _jsx("input", { id: "female", type: "radio", name: "genderInput", value: "female" })] })] }), _jsx("span", { className: "error-message", hidden: this.state.isGenderInputValid, children: "Please select your gender" })] }), _jsxs("div", { className: "form-group__item", children: [_jsx("label", { htmlFor: "fileInput", className: "form-gourp__label", children: "Upload file" }), _jsx("input", { className: "form-group__input", id: "fileInput", type: "file", name: "fileInput" }), _jsx("span", { className: "error-message", hidden: this.state.isFileInputValid, children: "Please select photo" })] }), _jsxs("div", { className: "form-group__item", children: [_jsxs("div", { className: "form-goup__item-box", children: [_jsx("label", { htmlFor: "consentInput", className: "form-group__label", children: "I consent to my personal data" }), _jsx("input", { className: "form-group__input", id: "consentInput", type: "checkbox", name: "consentInput" })] }), _jsx("span", { className: "error-message", hidden: this.state.isConsentInputValid, children: "Please consent to proceed" })] }), _jsx("button", { className: "form__button", type: "button", name: "submitButton", onClick: this.handleSubmitClick, children: "Submit" })] }));
    }
}
export default Form;

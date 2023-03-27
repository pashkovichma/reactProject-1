import React from 'react';
import './form.css';
import { IFormCard } from '../../types/interfaces';

interface IFormProps {
  addFormCard: (key: IFormCard) => void;
}

interface IFormState {
  isNameInputValid: boolean;
  isSurnameInputValid: boolean;
  isDateInputValid: boolean;
  isCountrySelectValid: boolean;
  isGenderInputValid: boolean;
  isFileInputValid: boolean;
  isConsentInputValid: boolean;
}

class Form extends React.Component<IFormProps, IFormState> {
  form: React.RefObject<HTMLFormElement>;

  constructor(props: IFormProps) {
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
    const isNameInputValid =
      nameInputValue.length >= 2 &&
      nameInputValue[0].toLocaleUpperCase() &&
      nameInputValue.trim() !== '';
    this.setState({ isNameInputValid });
    return isNameInputValid;
  }

  validateSurnameInput() {
    const surnameInputValue = this.form.current?.nameInput.value;
    const isSurnameInputValid =
      surnameInputValue.length >= 2 &&
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

  handleSubmitClick = (): void => {
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
    return (
      <form className="form" ref={this.form}>
        <div className="form-group__item">
          <label htmlFor="nameInput" className="form-group__label">
            Name
          </label>
          <input className="form-group__input" id="nameInput" type="text" name="nameInput" />
          <span className="error-message" hidden={this.state.isNameInputValid}>
            Please enter correct name
          </span>
        </div>

        <div className="form-group__item">
          <label htmlFor="surnameInput" className="form-group__label">
            Surname
          </label>
          <input className="form-group__input" id="surnameInput" type="text" name="surnameInput" />
          <span className="error-message" hidden={this.state.isSurnameInputValid}>
            Please enter correct surname
          </span>
        </div>

        <div className="form-group__item">
          <label htmlFor="dateInput" className="form-group__label">
            Birthday
          </label>
          <input className="form-group__input" id="dateInput" type="date" name="dateInput" />
          <span className="error-message" hidden={this.state.isDateInputValid}>
            Please enter your birthday
          </span>
        </div>

        <div className="form-group__item">
          <label htmlFor="country" className="form-group__label">
            Country
          </label>
          <select
            className="form-group__select"
            id="country"
            name="country"
            defaultValue="select your country"
          >
            <option value="Select country" disabled>
              Select country
            </option>
            <option value="Belarus">Belarus</option>
            <option value="Poland">Poland</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Ukrain">Ukrain</option>
            <option value="Another">Another</option>
          </select>
          <span className="error-message" hidden={this.state.isCountrySelectValid}>
            Please enter your country
          </span>
        </div>

        <div className="form-group__item">
          <legend className="form-group__legend">Gender</legend>
          <div className="form-group__item-box">
            <div>
              <label htmlFor="male">Male</label>
              <input id="male" type="radio" name="genderInput" value="man" />
            </div>
            <div>
              <label htmlFor="female">Female</label>
              <input id="female" type="radio" name="genderInput" value="female" />
            </div>
          </div>
          <span className="error-message" hidden={this.state.isGenderInputValid}>
            Please select your gender
          </span>
        </div>

        <div className="form-group__item">
          <label htmlFor="fileInput" className="form-gourp__label">
            Upload file
          </label>
          <input className="form-group__input" id="fileInput" type="file" name="fileInput" />
          <span className="error-message" hidden={this.state.isFileInputValid}>
            Please select photo
          </span>
        </div>

        <div className="form-group__item">
          <div className="form-goup__item-box">
            <label htmlFor="consentInput" className="form-group__label">
              I consent to my personal data
            </label>
            <input
              className="form-group__input"
              id="consentInput"
              type="checkbox"
              name="consentInput"
            />
          </div>
          <span className="error-message" hidden={this.state.isConsentInputValid}>
            Please consent to proceed
          </span>
        </div>

        <button
          className="form__button"
          type="button"
          name="submitButton"
          onClick={this.handleSubmitClick}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

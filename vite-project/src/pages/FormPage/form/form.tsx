import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';
import { IFormCard } from '../../../types/interfaces';
import './form.css';

interface IFormProps {
  addFormCard: (key: IFormCard) => void;
}

function Form({ addFormCard }: IFormProps) {
  const [statusValid, setStatusValid] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      date: '',
      country: '',
      gender: '',
      photo: '',
      consent: false,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const Confirmation = () => {
    return <h2 className="confirmation">Card confirmed!</h2>;
  };

  const handleClickSubmitButton = (inputData: FieldValues) => {
    setStatusValid(true);
    addFormCard({
      name: inputData.name,
      surname: inputData.surname,
      date: inputData.date,
      country: inputData.country,
      gender: inputData.gender,
      photo: URL.createObjectURL(inputData.photo[0]),
      consent: inputData.consent,
    });
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 2000);
  };

  const validDate = (value: string) => {
    const inputDate = new Date(value);
    const currentDate = new Date();

    return inputDate < currentDate;
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleClickSubmitButton)}>
      <div className="form-group__item">
        <label htmlFor="nameInput" className="form-group__label">
          Name
        </label>
        <input
          className="form-group__input"
          id="nameInput"
          type="text"
          {...register('name', {
            required: 'your name',
            pattern: /^[A-ZА-Я]{1,}.*$/,
            minLength: { value: 2, message: 'Please, enter at list 2 letters' },
          })}
        />
        {errors?.name && (
          <p className="error-message">
            Please, enter name. At list 2 letters, the first is capital
          </p>
        )}
      </div>
      <div className="form-group__item">
        <label htmlFor="surnameInput" className="form-group__label">
          Surname
        </label>
        <input
          className="form-group__input"
          id="surnameInput"
          type="text"
          {...register('surname', {
            required: 'your surname',
            pattern: {
              value: /^[A-ZА-Я]{1,}.*$/,
              message: 'Please, enter the first letter capital',
            },
            minLength: { value: 2, message: 'Please, enter at list 2 letters' },
          })}
        />
        {errors.surname && (
          <p className="error-message">
            Please, enter surname. At list 2 letters, the first is capital
          </p>
        )}
      </div>
      <div className="form-group__item">
        <label htmlFor="dateInput" className="form-group__label">
          Birthday
        </label>
        <input
          className="form-group__input"
          id="dateInput"
          type="date"
          {...register('date', {
            required: 'your birthday',
            validate: {
              validate: (value) => validDate(value) || 'Please, enter past date',
            },
          })}
        />
        {errors.date && <p className="error-message">{errors.date.message}</p>}
      </div>
      <div className="form-group__item">
        <label htmlFor="country" className="form-group__label">
          Country
        </label>
        <select
          className="form-group__select"
          id="country"
          defaultValue="your country"
          {...register('country', {
            required: true,
          })}
        >
          <option value="Select country" disabled>
            Country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Poland">Poland</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Ukrain">Ukrain</option>
          <option value="Another">Another</option>
        </select>
        {errors.country && <p className="error-message">Please, select your country</p>}
      </div>
      <div className="form-group__item">
        <legend className="form-group__legend">Gender</legend>
        <div className="form-group__item-box">
          <div>
            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              value="man"
              {...register('gender', {
                required: true,
              })}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              id="female"
              type="radio"
              value="female"
              {...register('gender', {
                required: true,
              })}
            />
          </div>
        </div>
        {errors.gender && <p className="error-message">Please, select your gender</p>}
      </div>
      <div className="form-group__item">
        <label htmlFor="fileInput" className="form-gourp__label">
          Upload file
        </label>
        <input
          className="form-group__input"
          id="fileInput"
          type="file"
          {...register('photo', {
            required: true,
          })}
        />
        {errors.photo && <p className="error-message">Please, select your photo</p>}
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
            {...register('consent', {
              required: true,
            })}
          />
        </div>
        {errors.consent && <p className="error-message">Please, consent</p>}
      </div>
      <button className="form__button" type="submit">
        Submit
      </button>
      {statusValid && <Confirmation />}
    </form>
  );
}

export default Form;

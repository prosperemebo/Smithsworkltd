import { useState } from 'react';
import classes from './Input.module.scss';

const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_VALIDATION = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

const Input = ({ type, placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(null);

  const changeHandler = (event) => {
    setValue(event.target.value);

    if (type === 'tel' && PHONE_VALIDATION.test(event.target.value)) {
      setIsValid(true);
      onChange(event.target.value);
      return;
    }

    if (type === 'email' && EMAIL_VALIDATION.test(event.target.value)) {
      setIsValid(true);
      onChange(event.target.value);
      return;
    }

    if (event.target.value.trim().length > 3 && type === 'text') {
      setIsValid(true);
      onChange(event.target.value);
      return;
    }

    setIsValid(false);
  };

  return (
    <input
      className={`${classes.Input} ${isValid === false ? classes.error : ''}`}
      value={value}
      onChange={changeHandler}
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;

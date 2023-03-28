import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(value);

  const hasError = !valueIsValid && isTouched;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return {
    value,
    valueIsValid,
    hasError,
    handleChange,
    handleBlur,
    reset,
  };
};

export default useInput;

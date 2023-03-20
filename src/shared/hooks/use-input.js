import { useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }

  if (action.type === "RESET") {
    return { value: "" };
  }
};

const useInput = () => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: "",
  });
  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };
  const reset = () => {
    dispatch({ TYPE: "RESET" });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
    reset,
  };
};

export default useInput;

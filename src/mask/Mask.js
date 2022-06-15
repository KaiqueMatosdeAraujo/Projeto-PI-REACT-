import React from "react";
import InputMask from "react-input-mask";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskedInput = ({ placeholder, mask, id, maxLength, onChange, value, name,  }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: { ...event.target, name, value: onlyNumbers(event.target.value) },
    });
  }

  return (
    <InputMask
      className="form-control"
      id={id}
      maxLength={maxLength}
      mask={mask}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
    

    ></InputMask>
  );
};

export default MaskedInput
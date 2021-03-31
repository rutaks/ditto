import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  label,
  error,
  handleChange,
  setFieldTouched,
  defaultValue,
  name,
  type,
}) => {
  return (
    <div class={`form-group ${error && "has-danger"}`}>
      <label class={`form-control-label ${error && "text-danger"}`}>
        {label}
      </label>
      <input
        name={name}
        defaultValue={defaultValue || ""}
        type={type}
        onChange={handleChange(name)}
        onClick={setFieldTouched(name)}
        class={`form-control ${error && "is-invalid"}`}
      />
      {error && <div class="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func,
  setFieldTouched: PropTypes.func,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;

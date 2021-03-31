import React from "react";
import PropTypes from "prop-types";
import { ImpulseSpinner } from "react-spinners-kit";

const Button = ({ onClick, isDisabled, label, isLoading, type }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      type="button"
      className={`btn ${type}`}
    >
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <ImpulseSpinner frontColor="#ffffff" />{" "}
        </div>
      ) : (
        label
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;

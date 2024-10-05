import { useRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/close-icon.svg";
import "./input.css";

/** Primary UI component for user interaction */
export const Input = ({
  onChange,
  customStyling = {},
  type = "text",
  size = "medium",
  withResetIcon = false,
  ...props
}) => {
  const input = useRef();
  const handleResetInput = () => {
    input.current.value = "";
  };
  return (
    <>
      <input
        ref={input}
        style={customStyling}
        type={type}
        className={[
          "storybook-input",
          `storybook-input--${size}`,
          `storybook-input--${type}`,
          `${withResetIcon ? "spacing" : ""}`,
        ].join(" ")}
        onChange={onChange}
        {...props}
      />
      {withResetIcon && (
        <button className="storybook-reset--icon" onClick={handleResetInput}>
          <img src={CloseIcon} alt="Reset icon" />
        </button>
      )}
    </>
  );
};

Input.propTypes = {
  /** Custom styling */
  customStyling: PropTypes.object,
  /** Optional change handler */
  onChange: PropTypes.func,
  /** Support reset input */
  withResetIcon: PropTypes.bool,
  /** Which type of the input? */
  type: PropTypes.string,
  /** How large should the input be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

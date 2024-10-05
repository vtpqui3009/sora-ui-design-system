import PropTypes from "prop-types";
import "./button.css";

/** Primary UI component for user interaction */
export const Button = ({
  customStyling = {},
  type = "primary",
  size = "medium",
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`,
      ].join(" ")}
      style={customStyling}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  /** Custom styling */
  customStyling: PropTypes.object,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Which type of the button? */
  type: PropTypes.oneOf(["primary", "outline", "text"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

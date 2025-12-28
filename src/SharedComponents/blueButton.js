import "../Styles/GlobalStyles.css";

export default function BlueButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`custom-button ${className}`}
    >
        {children}
    </button>
  );
}
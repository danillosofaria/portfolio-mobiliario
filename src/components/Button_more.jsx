import './Button_more.css';

function Button_more({ variant = "primary", size = "md"}) {
  return (
    <button
      className={`button-more button-${variant} button-${size}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="button-icon"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  );
}

export default Button_more;

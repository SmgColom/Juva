import styles from './Button.module.scss';

function Button({
  onClick,
  children,
  href,
  target = "_self",
  type = "button", 
}) {
  
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={styles.button}
      >
        {children}
      </a>
    );
  }

  
  return (
    <button
      type={type}        
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;





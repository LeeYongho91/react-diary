const Button = ({ text, color = 'blue', children }) => {
  const handleTest = (e) => {
    console.log(e);
    console.log('test');
  };

  return (
    <button
      style={{ color: color }}
      onClick={handleTest}
      // onMouseEnter={handleTest}
    >
      {text} - {color} - {children}
    </button>
  );
};

export default Button;

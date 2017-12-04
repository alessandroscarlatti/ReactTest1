const squareBuilder = (id, text) => {
    return { id, text }
}

const toggleSquare = (text) => {
    switch (text) {
      case ' ': return 'x';
      case 'x': return 'o';
      case 'o': return ' ';
      default: return ' ';
    }
  };
  
export {
    squareBuilder,
    toggleSquare
}  
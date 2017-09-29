const toggleSquare = (text) => {
  switch (text) {
    case '_': return 'x';
    case 'x': return 'o';
    case 'o': return '_';
    default: return '_';
  }
}

export default toggleSquare;

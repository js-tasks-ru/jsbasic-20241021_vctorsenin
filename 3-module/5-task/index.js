function getMinMax(str) {
  const a ={
    min : 0,
    max : 0,
  }
  str = str.split(" ");
  str = str.map(elem => +elem);
  str = str.filter(elem => elem)
  a.min = Math.min(...str);
  a.max = Math.max(...str);
  return a
}

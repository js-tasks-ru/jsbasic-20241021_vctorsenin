function camelize(str) {
  str = str.split("-");
  str.forEach((elem,b) => {
    if (b>0){
      elem=elem[0].toUpperCase() + elem.substr(1);
      str[b]=elem;
    }
  });
  str=str.join("");
  return str
}

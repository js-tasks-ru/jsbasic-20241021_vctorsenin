function camelize(str) {
  str = str.split("-");
  const str2 = str.map((item, index) => {
    if (index>0){
      item=item[0].toUpperCase() + item.substr(1);
    }
    str[index]=item; 
  })
  str = str.join("")
  return str 
}

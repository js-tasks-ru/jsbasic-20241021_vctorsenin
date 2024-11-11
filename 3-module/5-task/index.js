function getMinMax(str) {
  const a ={
    min : 0,
    max : 0,
  }
  str = str.split(" ");
  for (let i = 0; i <str.length; i++){
    str[i] = +str[i]; 
    }   
  str.sort();
  for (let i = 0; i <str.length; i++){
    if(isNaN(str[i])){
      str.splice(i)
    }
  }
  a.min = Math.min(...str);
  a.max = Math.max(...str);
  
  return a
  // return`({ min: ${Math.min(...str)}, max: ${Math.max(...str)} })`
}

function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries){
    if(isFinite(salaries[key]) && salaries[key]){
      console.log(salaries[key]);
      sum+=salaries[key];
    } 
  }
  return sum
}

function factorial(n) {
  let s = 1;
  if (n == 0){
    return 1
  }
  do{
    s = s * (n);
    n-=1;
  }while (n>0)
  return s
}

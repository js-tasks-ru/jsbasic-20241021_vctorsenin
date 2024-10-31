function checkSpam(str) {
  str = str.toUpperCase();
  let a = ( str.indexOf('1XBET') != -1 || str.indexOf('XXX') != -1) ? true : false;
  return a
}

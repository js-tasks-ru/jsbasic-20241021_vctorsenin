function filterRange(arr, a, b) {
  let arr2 = [];
    (arr.forEach((x) => {if (x >= a && x <= b){
      arr2.push(x);
    } 
    }));
    return arr2;
}

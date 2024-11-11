function namify(users) {
  let arr = [];
  for (let key of users){
    console.log(key)
    for (let name in key){
      if (name === 'name'){
        arr.push(key.name);
      }
    }
  }
  return arr
}

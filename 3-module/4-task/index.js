function showSalary(users, age) {
  let nam = [];
  for (let key of users){
    if (key.age <= age){
      nam.push (`${key.name}, ${key.balance}`);
    }
  }
  nam = nam.join("\n");
  return nam;
}

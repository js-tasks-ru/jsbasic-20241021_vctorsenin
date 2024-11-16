function showSalary(users, age) {
  users= users.filter((elem) => elem.age<=age)  
  users = users.map(elem => `${elem.name}, ${elem.balance}`  )
  users = users.join("\n");
  return users;
}

function makeFriendsList(friends) {
  const list = document.createElement("ul");
  friends.forEach((elem, index) => {
    let str = document.createElement("li");
    str.textContent = `${elem.firstName} ${elem.lastName}`;
    list.append(str);
  });
  
  return list;
}

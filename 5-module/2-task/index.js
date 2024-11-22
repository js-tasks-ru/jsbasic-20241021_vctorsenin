function toggleText() {
  const but = document.querySelector(".toggle-text-button");
  console.log(but);
  but.addEventListener('click', (elem) =>  {
    const closeText = document.getElementById("text");
    if (!closeText.hidden){
      closeText.hidden = true;
    }else{
      closeText.hidden = false;
    }
  })
}

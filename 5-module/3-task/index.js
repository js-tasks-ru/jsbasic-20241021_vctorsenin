function initCarousel() {
  let translate = 0;
  const butRight = document.querySelector(".carousel__arrow_right");
  const butLeft = document.querySelector(".carousel__arrow_left");
  const line = document.querySelector(".carousel__inner");
  lineweight = line.offsetWidth ;
  butRight.addEventListener("click", (elem) => {
    translate -= lineweight;
    line.style.transform = `translateX(${translate}px)`;
    if (-translate == 3*lineweight){
      butRight.style.display = 'none';
    }else{
      butLeft.style.display = '';
    }
  })
  butLeft.addEventListener("click", () => {
    translate += lineweight;
    line.style.transform = "translateX(" + translate + "px" + ")";
    if (translate == 0){
      butLeft.style.display = 'none';
    }else{
      butRight.style.display = '';
    }
  })
  butLeft.style.display = 'none';
  
  
}

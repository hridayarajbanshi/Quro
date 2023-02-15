let popUpContent = document.querySelector(".popUp-content");
let popUpBtn = document.getElementById("moreBtn");
let closeBtn = document.getElementById("closepop");
popUpBtn.addEventListener("click",function openModal(e){
  e.preventDefault();
  popUpContent.classList.add("openpop");
});
closeBtn.addEventListener("click", function closeModal(){
  popUpContent.classList.remove("openpop");
})
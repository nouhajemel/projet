let heart_btn=document.getElementsByClassName("heart_btn")
let closee=document.getElementsByClassName("close")
let more=document.getElementsByClassName("more")
let btnmore=document.getElementsByClassName("btnmore")
var colors = [
  "rgb(67, 44, 122)",
  "rgb(128, 72, 156)",
  "rgb(255, 143, 177)",
  "rgb(252, 226, 219)",
];
var pink = colors[2];
var purple=colors[0];
for (let index = 0; index < more.length; index++) {
  heart_btn[index].addEventListener("click", function(){
    var thecolor=heart_btn[index].style.color;
    if (thecolor===pink){
      heart_btn[index].style.color=purple
    }
    else{
      heart_btn[index].style.color=pink
    }
    
  })
 
  btnmore[index].addEventListener("click",function(){
    more[index].style.display="flex"
  })
  closee[index].addEventListener("click",function(){
    more[index].style.display="none"
  })
}

for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",handclick);
  function handclick(){
var n1=this.innerHTML;
switch (n1) {

  case "w":
  var tom1 = new Audio("Chaand Baaliyan - Aditya A.mp3");
  tom1.play();
 break;
 
case "a":

var tom2 = new Audio("Qaafirana Kedarnath.mp3");
tom2.play();
 break;

    case "s":
    var tom3 = new Audio("Aankhon Ke Darmiya.mp3");
    tom3.play();
    break;


  default:console.log(n1);

}
  }
}

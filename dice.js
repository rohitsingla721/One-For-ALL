var n=prompt("Enter number between 1 and 6")
var n1= "dice"+n+".png"
var n3 = document.querySelectorAll("img")[0];
n3.setAttribute("src",n1);



var n4= Math.random()
var n5=Math.floor(n4*6)+1
var n6= "dice"+n5+".png"
var n7 = document.querySelectorAll("img")[1];
n7.setAttribute("src",n6);

if(n>n5){
  document.querySelector("h1").innerHTML="You wins";
}
else if(n<n5){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

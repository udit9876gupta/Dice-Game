function run(){
    const arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
    
    var tmp = rand();
    var tmp2 = rand();
    console.log(tmp,tmp2);
    if(tmp > tmp2)
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
    else if(tmp == tmp2)
    document.querySelector("h1").innerHTML = "Draw☹";
    else
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
document.querySelector(".dice .img1").setAttribute("src",arr[tmp]);
document.querySelector(".dice .img2").setAttribute("src",arr[tmp2]);
}
function rand(){
   var temp = Math.abs(Math.floor((Math.random() * 10)-4));
  return temp;
}

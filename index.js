var rand=Math.floor(Math.random()*6+1);
var rand2=Math.floor(Math.random()*6+1);
console.log(rand);
console.log(rand2);
document.querySelector("img.img1 ").setAttribute("src","./images/dice"+rand+".png");
document.querySelector("img.img2 ").setAttribute("src","./images/dice"+rand2+".png");

if(rand>rand2)
{
 document.querySelector("h1").innerHTML=" Player1 won";
}
else if(rand<rand2)
{
    document.querySelector("h1").innerHTML="Player2 won";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}

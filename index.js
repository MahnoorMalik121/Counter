let counter=0;
document.getElementById("resetbtn").onclick=function(){
counter=0;
document.getElementById("counter1").innerHTML=counter;
}

document.getElementById("incbutton").onclick=function(){
    counter++;
    document.getElementById("counter1").innerHTML=counter;
}
document.getElementById("decbutton").onclick=function(){
    counter--;
    document.getElementById("counter1").innerHTML=counter;
}

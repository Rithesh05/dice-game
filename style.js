var player1=prompt("enter player 1 name");
document.querySelectorAll(".game div h2")[0].innerText=player1.toUpperCase();
var player2=prompt("enter player 2 name");
document.querySelectorAll(".game div h2")[1].innerText=player2.toUpperCase();
function randomgenerator(var1,player){
    switch(var1){
        case 1:
            document.querySelectorAll(".game div img")[player].src="dice1.png";
            break;
        case 2:
            document.querySelectorAll(".game div img")[player].src="dice2.png";
            break;
        case 3:
            document.querySelectorAll(".game div img")[player].src="dice3.png";
            break;
        case 4:
            document.querySelectorAll(".game div img")[player].src="dice4.png";
            break;
        case 5:
            document.querySelectorAll(".game div img")[player].src="dice5.png";
            break;
        case 6:
            document.querySelectorAll(".game div img")[player].src="dice6.png";
            break;

    }
}

function clicksay(){
    var val=Math.floor((Math.random()*6)+1);
    var val1=Math.floor((Math.random()*6)+1);
    if(val>val1){
        document.getElementById("win").innerText=player1.toUpperCase()+" won game yayy!...";
    }else if(val<val1){
        document.getElementById("win").innerText=player2.toUpperCase()+" won game yayy!...";
    }else{
        document.getElementById("win").innerText="TIE";
    }
    randomgenerator(val,0);
    randomgenerator(val1,1);

}


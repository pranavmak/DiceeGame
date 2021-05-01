// -------------------for image ---1

var randomNumber1 = Math.random();                       //0 to 0.9999999999999999

randomNumber1 = randomNumber1 * 6;                       // 0 to 5.99999999999999

randomNumber1 = Math.floor(randomNumber1);               // 0 to 5

randomNumber1 = Math.floor(randomNumber1) + 1;           // 1 to 6

// var randomNumber1 = Math.floor(Math.random() *6) + 1;      //1-6

var randomDiceImage = "dice"+randomNumber1+".png";      // dice1.png - dice6.png

var randomImageSource = "images/"+randomDiceImage;       // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);



//--------------------for image ---2

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

var randomNumber2 = Math.random();                       //0 to 0.9999999999999999

randomNumber2 = randomNumber2 * 6;                       // 0 to 5.99999999999999

randomNumber2 = Math.floor(randomNumber2);               // 0 to 5

randomNumber2 = Math.floor(randomNumber2) + 1;           // 1 to 6

var randomDiceImage2 = "dice"+randomNumber2+".png";      // dice1.png - dice6.png

var randomImageSource2 = "images/"+randomDiceImage2;       // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player-1 Wins";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player-2 Wins";
}

else{
    document.querySelector("h1").innerHTML="Drawwww !!";
}
    var randomDice = new Array ();

    randomDice[0] = "images/dice1.png";
    randomDice[1] = "images/dice2.png";
    randomDice[2] = "images/dice3.png";
    randomDice[3] = "images/dice4.png";
    randomDice[4] = "images/dice5.png";
    randomDice[5] = "images/dice6.png";


    var number1 = Math.floor(Math.random() * 5);
    var number2 = Math.floor(Math.random() * 5);

    
    var image1 = document.querySelector(".img1");

    image1.src = randomDice[number1];

    var image2 = document.querySelector(".img2");

    image2.src = randomDice[number2];

    function getRandomDice(){
        if (number1>number2){
        return document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }

    else if (number1<number2){
        return document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }

    else {
        return document.querySelector("h1").innerHTML = "Drawn!";
    }
    }

    getRandomDice();

   
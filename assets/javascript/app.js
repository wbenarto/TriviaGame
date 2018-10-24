//Set global variables
var timer;
var questions;
var answers;
var result;

//set up questions and answers
var questions= [
    {
        q: "What planet was Goku born?",
        a: "Vegeta",
        b: "Earth",
        c: "Namek",
        d: "Pluto",
        correct:"c",
        imageURL: ""
    }, {
        q: "What is Goku's original birth name?",
        a: "Wukong",
        b: "Kakarot",
        c: "Son",
        d: "Son Goku",
        correct: "b",
        imageURL: ""
    }, {
        q: "What was master Roshi's first gift to Goku?",
        a: "He taught him Kamehameha",
        b: "Scouter",
        c: "Senzu Bean",
        d: "Flying Nimbus",
        correct: "d",
        imageURL:""
    }, {
        q: "Who is Gohan's first master?",
        a: "King Kai",
        b: "Master Roshi",
        c: "Picollo",
        d: "Krillen",
        correct: "c",
        imageURL: ""
    }, {
        q: "Which of these half saiyans was the only one to be born with a tail?",
        a: "Goten.",
        b: "Trunks.",
        c: "Gohan.",
        d: "Vegeta",
        correct: "c",
        imageURL: ""
    }, {
        q: "How did Gohan and Krillen get a power boost on planet Namek?",
        a: "Senzu Bean.",
        b: "Guru unleashed their hidden power.",
        c: "Goku shared his Chi to both of them.",
        correct: "b",
        imageURL: ""
    }, {
        q: "What is the equipment used to find the dragon balls?",
        a: "Dragon Scouter",
        b: "Dragon Radar",
        c: "DBZ GPS system",
        d: "Iphone-X",
        correct: "b",
        imageURL:""
    }, {
        q: "Which opponent did Goku use the Spirit Bomb to for the first time?",
        a: "Frieza",
        b: "Jiren",
        c: "Vegeta",
        d: "Cell",
        correct: "a",
        imageURL:""
    }, {
        q: "How did Vegeta finally attain the legendary form of Super Saiyan?",
        a: "He trained so hard",
        b: "A chemical reaction",
        c: "With a pure heart",
        d: "with a heart of pure evil",
        correct:"d",
        imageURL:""
    },{
        q: "What is Goku's highest saiyan form he attained?",
        a: "Mastered Ultra Instinct",
        b: "Super Saiyan God",
        c: "Super Saiyan Rose",
        d: "Super Saiyan Blue",
        correct: "a",
        imageURL: "assets/images/Mastered_Ultra_Instinct.jpg"
}];


//Function to generate countdown timer 
//set timer counter to 10 
var number = 15;

//variable that will hold our interval ID when we execute the function
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//Decrement function
function decrement() {

    //decrease number by one
    number--;

    //show timer in the #timer tag
    $("#timer").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        alert("times up!");
    }
}

//stop function
function stop() {
    clearInterval(intervalId);
}

run();



//Function to generate random questions

//Function to generate answer list
//Function to start game
function start () {};
    //Game starts, countdown starts
    //Generate questions and display in page
    //Generate list of possible answers and display in page
    
//set up rules for the game
    //start game, hide all elements and only show start button
    //press start to start game
        //run questions function
            //if statement 
    //game starts and when user click on the answer
        //show right or wrong 
        //adds score 
        //show the right answer
        //if timer runs out and no clicks, increment wrong answer
        //go to another question
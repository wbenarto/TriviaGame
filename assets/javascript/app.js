var card = $("#content");

var questions = [{
    q: "What planet was Goku born?",
    choices: ["Vegeta", "Earth", "Namek", "Pluto"],
    answer: "Vegeta",
}, {
    q: "What is Goku's original birth name?",
    choices: ["Wukong", "Kakarot", "Son", "Son Goku"],
    answer: "Kakarot",
}, {
    q: "What was master Roshi's first gift to Goku?",
    choices: ["He taught him Kamehameha", "Scouter", "Senzu Bean", "Flying Nimbus"],
    answer: "Flying Nimbus",
}, {
    q: "Who is Gohan's first teacher?",
    choices: ["King Kai", "Master Roshi", "Picollo", "Krillen"],
    answer: "Picollo",
}, {
    q: "Which of these half saiyans was the only one to be born with a tail?",
    choices: ["Goten", "Trunks", "Gohan", "Vegeta"],
    answer: "Gohan",
}, {
    q: "How did Gohan and Krillen get a power boost on planet Namek?",
    choices: ["Senzu Bean", "Guru unleashed their hidden power", "Goku shared his Chi to both of them", "ShenLong gave him the boost"],
    answer: "Guru unleashed their hidden power",
}, {
    q: "What is the equipment used to find the dragon balls?",
    choices: ["Dragon Scouter", "Dragon Radar", "DBZ GPS system", "Iphone-X",],
    answer: "Dragon Radar",
}, {
    q: "Which opponent did Goku use the Spirit Bomb to for the first time?",
    choices: ["Frieza", "Jiren", "Vegeta", "Cell"],
    answer: "Frieza",
}, {
    q: "How did Vegeta finally attain the legendary form of Super Saiyan?",
    choices: ["He trained so hard", "A chemical reaction", "With a pure heart", "With a heart of pure evil"],
    answer: "With a heart of pure evil",
}, {
    q: "What is Goku's highest saiyan form he attained?",
    choices: ["Mastered Ultra Instinct", "Super Saiyan God", "Super Saiyan Rose", "Super Saiyan Blue"],
    answer: "Mastered Ultra Instinct",
}];

var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        //show timer in the #timer tag
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);


        $("#content").prepend("<h2>Time Remaining: <span id='counter-number'></span> Seconds</h2>");
        $("#start").remove();

        //theme song and buttons
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "C:/Users/wbena/Documents/Homeworks/HW5/TriviaGame/assets/images/audio.mp3");
        audioElement.play();

        var playButton = $("<button id='theme-button'>Play Audio</button>");
        $(playButton).on("click", function () {
            audioElement.play();
        });
        card.append($(playButton));

        // Pause Button
        var pauseButton = $("<button id='pause-button'>Pause Audio</button>");
        $(pauseButton).on("click", function () {
            audioElement.pause();
        });
        card.append($(pauseButton));


        for (var i = 0; i < questions.length; i++) {
            card.append("<h3>" + questions[i].q + "</h3>");
            for (var j = 0; j < questions[i].choices.length; j++) {
                card.append("<input class='form-radio' type='radio' name='question-" + i +
                    "' value='" + questions[i].choices[j] + "''>" + "<span class='choices'>" + questions[i].choices[j] + "</span>");
            }

        }
        $("</br>");
        card.append("<button id='done'> Submit Answers </button>");
    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() === questions[8].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() === questions[9].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        
    },

    result: function () {
        clearInterval(timer);

        $("#container h2").remove();

        card.html("<h2>Game Over!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

};


//Click Events
$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});

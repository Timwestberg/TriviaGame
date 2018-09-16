$('#start-button').on('click', function(){
    $('#start-button').remove();
    game.loadQuestion();
})

$(document).on('click','.answer-button', function(e){
    game.clicked(e);
})

$(document).on('click', '#reset', function(){
    game.reset();
})

let questions = [{
    question:"What fast food restaurant is credited with introducing the first modern-day drive-thru window?",
    answer: ["sonic", "McDonald's", "Wendy's", "Burger King"],

    correctAnswer:"Wendy's",
    image:"../images/Wendy's.gif"
},

{
    question:"Which of the following fast food restaurants was founded first??",
    answer: ["In-n-out", "McDonald's", "Wendy's", "Subway"],

    correctAnswer:"In-n-out",
    image:"../images/in-n-out.jpg"
},

{
    question:"What did McDonald's restaurants first introduce in 1968?",
    answer: ["Big-Mac", "Mc-Rib", "Egg Mcmuffin", "Kid's Meal"],

    correctAnswer:"Big-Mac",
    image:"../images/bmac.jpg"
},

{
    question:"What fast food restaurant introduced a popular advertising campaign in 1997 that featured a talking chihuahua?",
    answer: ["chiptole", "Taco Bell", "McDonald's", "Del Taco"],

    correctAnswer:"Taco Bell",
    image:"../images/Wendy's.gif"
},

{
    question:"What fast food restaurant boasts that you can 'Have it your way'?",
    answer: ["sonic", "McDonald's", "Wendy's", "Burger King"],

    correctAnswer:"Burger King",
    image:"../images/burgerking.jpg"
},

{
    question:"What fast food restaurant aired ads featuring Jared Fogle, a man who lost 245 pounds eating only their products?",
    answer: ["carl's Jr", "McDonald's", "Chiptole", "Subway"],

    correctAnswer:"Subway",
    image:"../images/subway.gif"
},

{
    question:"What fast food restaurant was originally founded in the small town of Guasave on Mexico's Pacific Coast?",
    answer: ["El Pollo Loco", "Taco Bell", "Chiptole", "Del Taco"],

    correctAnswer:"El Pollo Loco",
    image:"../images/pollo.jpg"
},

{
    question:"How many herbs and spices make up the secret blend used on Colonel Harland Sanders' most famous creation: his Original KFC Recipe?",
    answer: ["11", "9", "16", "6"],

    correctAnswer:"11",
    image:"../images/kfc.gif"
},

{
    question:"What fast food restaurant was literally founded in a broom closet?",
    answer: ["Pizza Hut", "McDonald's", "Papa John's", "Burger King"],

    correctAnswer:"Papa John's",
    image:"../images/papaj.png"
},

{
    question:"Where was the first Pizza Hut built?",
    answer: ["Los Angeles, California", "Wichita, Kansas", "Albany, New York", "Austin, Texas"],

    correctAnswer:"Wichita, Kansas",
    image:"../images/wichita.jpg"
}]

let game = {
    questions: questions,
    currentQuestion: 0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countDown: function(){
        game.counter--;
        $("#counter").html(game.counter)
        if(game.counter <= 0){
            console.log("TIMEs UP!");
            game.timeUp();
        }
    },
    timeUp: function(){
        clearInterval(timer);
        this.unanswered++
        $("#game-area").html("<h1>Out of time!</h1>")
        $("#game-area").append("<h2>"+questions[game.currentQuestion].correctAnswer+"</h2>")
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000)
        } else {
            setTimeout(game.nextQuestion, 3*1000)
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countDown, 1000)
        $("#game-area").html("<h2> Time Left: <span id='counter'>30</span> </h2>")
        $("#game-area").append("<h1>"+questions[game.currentQuestion].question + "</h1>");
        for(let i = 0; i<questions[game.currentQuestion].answer.length;i++){
            let button = $("<button>");

            button = button.attr('id',"button-"+i).addClass("answer-button").attr('data-name',questions[game.currentQuestion].answer[i]).addClass("hvr-float-shadow").text(questions[game.currentQuestion].answer[i])
            
            $("#game-area").append(button)
        }
    },
    nextQuestion: function(){
        game.counter = 30;
        $("#counter").html(game.counter)
        game.currentQuestion++;
        game.loadQuestion()

    },
    results: function(){
        clearInterval(timer);
        $("#game-area").html("<h1>ALL DONE!<h1>");
        $("#game-area").append("<h2>Correct:"+game.correct+"</h2>");
        $("#game-area").append("<h2>Incorrect:"+ game.incorrect+"</h2>");
        $("#game-area").append("<h2>Unanswered:"+game.unanswered+"</h2>");
        $("#game-area").append("<button id='reset'>RESET</button>");

    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrect();
        } else {
            game.answeredIncorrect();
        }
    },
    answeredCorrect: function() {
        console.log("you got it!")
        clearInterval(timer);
        game.correct++;
        $("#game-area").html("<h2>You got it!</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000)
        } else {
            setTimeout(game.nextQuestion,3*1000)
        }
    },
    answeredIncorrect: function() {
        console.log("WRONG!");
        game.incorrect++;
        $("#game-area").html("<h2>WRONG!</h2>");
        $("#game-area").append("<h2>"+questions[game.currentQuestion].correctAnswer+"</h2>");
        // I cant get the picture to show when the answer is correct not quite sure whatim doing wrong
        $("#game-area").append("<img>").attr("src",questions[game.currentQuestion].image);
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    reset: function(){
        game.currentQuestion = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.counter = 0;
        game.unanswered = 0;
        game.loadQuestion();


    }
}
var x;

$('#start-button-fastFood').on('click', function() {
	// $('#start-buttons').remove();
	x = $('#start-buttons').detach();

	questionsSelector('fastFood');
	game.loadQuestion();
});

$(document).ready(function() {
	var x;
	$('#btn1').click(function() {
		x = $('#start-buttons').detach();
	});
	$('#btn2').click(function() {
		$('body').prepend(x);
	});
});

$('#start-button-onePiece').on('click', function() {
	$('#start-buttons').remove();
	questionsSelector('onePiece');
	game.loadQuestion();
});

$('#start-button-Marvel').on('click', function() {
	$('#start-buttons').remove();
	questionsSelector('Marvel');
	game.loadQuestion();
});

$(document).on('click', '.answer-button', function(e) {
	game.clicked(e);
});

$(document).on('click', '#reset', function() {
	$('#game-area').prepend(x);
	game.reset();
});

let questions = [];

function questionsSelector(selection) {
	switch (selection) {
		case 'fastFood':
			return (questions = FastFoodQuestions);
		case 'onePiece':
			return (questions = OnePieceQuestions);
		case 'Marvel':
			return (questions = MarvelQuestions);
		case 'Programmer':
			return (questions = ProgrammerQuestions);
		case 'History':
			return (questions = HistoryQuestions);
	}
}

let FastFoodQuestions = [
	{
		question: 'What fast food restaurant is credited with introducing the first modern-day drive-thru window?',
		answer: [ 'sonic', "McDonald's", "Wendy's", 'Burger King' ],

		correctAnswer: "Wendy's",
		image: "../images/Wendy's.gif"
	},

	{
		question: 'Which of the following fast food restaurants was founded first??',
		answer: [ 'In-n-out', "McDonald's", "Wendy's", 'Subway' ],

		correctAnswer: 'In-n-out',
		image: '../images/in-n-out.jpg'
	},

	{
		question: "What did McDonald's restaurants first introduce in 1968?",
		answer: [ 'Big-Mac', 'Mc-Rib', 'Egg Mcmuffin', "Kid's Meal" ],

		correctAnswer: 'Big-Mac',
		image: '../images/bmac.jpg'
	},

	{
		question:
			'What fast food restaurant introduced a popular advertising campaign in 1997 that featured a talking chihuahua?',
		answer: [ 'chiptole', 'Taco Bell', "McDonald's", 'Del Taco' ],

		correctAnswer: 'Taco Bell',
		image: "../images/Wendy's.gif"
	},

	{
		question: "What fast food restaurant boasts that you can 'Have it your way'?",
		answer: [ 'sonic', "McDonald's", "Wendy's", 'Burger King' ],

		correctAnswer: 'Burger King',
		image: '../images/burgerking.jpg'
	},

	{
		question:
			'What fast food restaurant aired ads featuring Jared Fogle, a man who lost 245 pounds eating only their products?',
		answer: [ "Carl's Jr", "McDonald's", 'Chiptole', 'Subway' ],

		correctAnswer: 'Subway',
		image: '../images/subway.gif'
	},

	{
		question:
			"What fast food restaurant was originally founded in the small town of Guasave on Mexico's Pacific Coast?",
		answer: [ 'El Pollo Loco', 'Taco Bell', 'Chiptole', 'Del Taco' ],

		correctAnswer: 'El Pollo Loco',
		image: '../images/pollo.jpg'
	},

	{
		question:
			"How many herbs and spices make up the secret blend used on Colonel Harland Sanders' most famous creation: his Original KFC Recipe?",
		answer: [ '11', '9', '16', '6' ],

		correctAnswer: '11',
		image: '../images/kfc.gif'
	},

	{
		question: 'What fast food restaurant was literally founded in a broom closet?',
		answer: [ 'Pizza Hut', "McDonald's", "Papa John's", 'Burger King' ],

		correctAnswer: "Papa John's",
		image: '../images/papaj.png'
	},

	{
		question: 'Where was the first Pizza Hut built?',
		answer: [ 'Los Angeles, California', 'Wichita, Kansas', 'Albany, New York', 'Austin, Texas' ],

		correctAnswer: 'Wichita, Kansas',
		image: '../images/wichita.jpg'
	}
];

let OnePieceQuestions = [
	{
		question: 'What is the name of the sword Zoro receives from Ryuma on Thriller Bark?',
		answer: [ 'Meito', 'Shusui', 'Wado Ichimonji', 'Sandai Kitetsu' ],

		correctAnswer: 'Shusui'
	},

	{
		question: 'Who created the Sun Pirates??',
		answer: [ 'Hatchan', 'Arlong', 'Jinbei', 'Fisher Tiger' ],

		correctAnswer: 'Fisher Tiger'
	},

	{
		question: 'Where was Chopper Born?',
		answer: [ 'Torino Kingdom', 'Drum Island', 'Sweet Island', 'Boyn Island' ],

		correctAnswer: 'Drum Island'
	},

	{
		question: "What is Franky's real name?",
		answer: [ 'Iceberg', 'Joku', 'Pluton', 'Cutty Flam' ],

		correctAnswer: 'Cutty Flam'
	},

	{
		question: 'What is the card that Ace gives Luffy during the Alabasta arc?',
		answer: [ 'Calling Card', 'Life Card', 'Fire Card', 'Vivre Card' ],

		correctAnswer: 'Vivre Card'
	},

	{
		question: 'When Emporio Ivankov healed Luffy, how many years of his life did he say he would lose?',
		answer: [ '1 year', '5 years', '10 years', '20 years' ],

		correctAnswer: '10 years'
	},

	{
		question:
			'Who is the mountain bandit that is responsible for taking care of Ace and Luffy when they were children?',
		answer: [ 'Charlotte Linlin', 'Alvida', 'Garp', 'Curly Dadan' ],

		correctAnswer: 'Curly Dadan'
	},

	{
		question: 'Who robbed pirates before he/she met Monkey D. Luffy?',
		answer: [ 'Nami', 'Franky', 'Zoro', 'Coby' ],

		correctAnswer: '11'
	},

	{
		question:
			'Monkey D. Luffy was given his straw hat, a treasure to him by __________, who is also his idol and wanted to prove to him that he will be the King of Pirates.',
		answer: [ '"Red-Haired" Shanks', 'Zoro', 'Gol D. Roger', 'Portgas D. Ace' ],

		correctAnswer: '"Red-Haired" Shanks'
	},

	{
		question: "Who was the Merry Go's carpenter?",
		answer: [ 'Franky', 'Brooke', 'Ussop', 'Tony Tony Chopper' ],

		correctAnswer: 'Ussop'
	}
];

let MarvelQuestions = [
	{
		question: 'How many played Spider-Man on the big screen in the U.S. BEFORE Tom Holland?',
		answer: [ '1', '2', '3', '4' ],

		correctAnswer: '2'
	},

	{
		question: "In Guardians of the Galaxy, what is the name of the dog in the Collector Taneleer Tivan's museum?",
		answer: [ 'Cosmo', 'Sparky', 'Astro', 'Spud' ],

		correctAnswer: 'Cosmo'
	},

	{
		question: 'How many versions of the Iron Man armor has Tony Stark made?',
		answer: [ '10', '23', '56', '47' ],

		correctAnswer: '47'
	},

	{
		question: 'How many Infinity Stones are there in the MCU?',
		answer: [ '4', '5', '6', '7' ],

		correctAnswer: '6'
	},

	{
		question: 'What is the name of the Super Soldier project in Captain America: The First Avenger?',
		answer: [ 'Project Afterlife', 'Project Rebirth', 'Project Alchemy', 'Project Phoenix' ],

		correctAnswer: 'Project Rebirth'
	},

	{
		question: 'Who did Tony Stark think Stan Lee was during his Iron Man cameo?',
		answer: [ 'Stan Lee', 'Hugh Hefner', 'His Doctor', 'George Romero' ],

		correctAnswer: 'Hugh Hefner'
	},

	{
		question: 'What movie did Thanos first appear in?',
		answer: [ "Marvel's Avengers", 'Avengers:Age of Ultron', 'Iron Man 2', 'Guardians of the Galaxy' ],

		correctAnswer: "Marvel's Avengers"
	},

	{
		question: 'What does Tony Stark call the machine that assists him in Iron Man?',
		answer: [ 'Braniac', 'Dummy', 'Einstein', 'Moron' ],

		correctAnswer: 'Dummy'
	},

	{
		question: "What did Peggy Carter promise to Steve Rogers (Captain America) before he crashed Red Skull's bomber?",
		answer: [ 'A Dance', 'A Kiss', 'Marriage', 'A higher clearance level' ],

		correctAnswer: 'A Dance'
	},

	{
		question: "Thor's hammer MJÖLNIR is made of metal from the heart of a dying what?",
		answer: [ 'Black Hole', 'Comet', 'Asteroid', 'Star' ],

		correctAnswer: 'Star'
	}
];

let game = {
	questions: questions,
	currentQuestion: 0,
	counter: 30,
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	countDown: function() {
		game.counter--;
		$('#counter').html(game.counter);
		if (game.counter <= 0) {
			console.log('TIMEs UP!');
			game.timeUp();
		}
	},

	timeUp: function() {
		clearInterval(timer);
		this.unanswered++;
		$('#game-area').html('<h1>Out of time!</h1>');
		$('#game-area').append('<h2>' + questions[game.currentQuestion].correctAnswer + '</h2>');
		if (game.currentQuestion == questions.length - 1) {
			setTimeout(game.results, 2 * 1000);
		} else {
			setTimeout(game.nextQuestion, 2 * 1000);
		}
	},

	loadQuestion: function() {
		timer = setInterval(game.countDown, 1000);
		$('#game-area').html("<h2> Time Left: <span id='counter'>30</span> </h2>");
		$('#game-area').append('<h1>' + questions[game.currentQuestion].question + '</h1>');
		for (let i = 0; i < questions[game.currentQuestion].answer.length; i++) {
			let button = $('<button>');

			button = button
				.attr('id', 'button-' + i)
				.addClass('answer-button')
				.attr('data-name', questions[game.currentQuestion].answer[i])
				.addClass('hvr-float-shadow')
				.text(questions[game.currentQuestion].answer[i]);

			$('#game-area').append(button);
		}
	},

	nextQuestion: function() {
		game.counter = 30;
		$('#counter').html(game.counter);
		game.currentQuestion++;
		game.loadQuestion();
	},

	results: function() {
		clearInterval(timer);
		$('#game-area').html('<h1>ALL DONE!<h1>');
		$('#game-area').append('<h2>Correct:' + game.correct + '</h2>');
		$('#game-area').append('<h2>Incorrect:' + game.incorrect + '</h2>');
		$('#game-area').append('<h2>Unanswered:' + game.unanswered + '</h2>');
		$('#game-area').append("<button id='reset'>RESET</button>");
	},

	clicked: function(e) {
		clearInterval(timer);
		if ($(e.target).data('name') == questions[game.currentQuestion].correctAnswer) {
			game.answeredCorrect();
		} else {
			game.answeredIncorrect();
		}
	},

	answeredCorrect: function() {
		console.log('you got it!');
		clearInterval(timer);
		game.correct++;
		$('#game-area').html('<h2>You got it!</h2>');
		if (game.currentQuestion == questions.length - 1) {
			setTimeout(game.results, 2 * 1000);
		} else {
			setTimeout(game.nextQuestion, 2 * 1000);
		}
	},

	answeredIncorrect: function() {
		console.log('WRONG!');
		game.incorrect++;
		$('#game-area').html('<h2>WRONG!</h2>');
		$('#game-area').append('<h2>' + questions[game.currentQuestion].correctAnswer + '</h2>');
		// I cant get the picture to show when the answer is correct not quite sure whatim doing wrong
		// $('#game-area').append('<img>').attr('src', questions[game.currentQuestion].image);
		if (game.currentQuestion == questions.length - 1) {
			setTimeout(game.results, 2 * 1000);
		} else {
			setTimeout(game.nextQuestion, 2 * 1000);
		}
	},

	reset: function() {
		game.currentQuestion = 0;
		game.correct = 0;
		game.incorrect = 0;
		game.counter = 0;
		game.unanswered = 0;
	}
};

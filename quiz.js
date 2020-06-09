(function () {
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
		//var to store d HTML ouptut
		const output = [];
		//For each question
			myQuestions.forEach(currentQuestion, questionNumber) =>{
		//To store list of answers
				const answers = [];
		//and also available answers
		for (letter in currentQuestion.answers){
		//to add a HTML radio btn
answers.push(
	'<label>
			<input type ="radio" name="question${questionNumber}" value="{$letter}">
			${letter}:
			${currentQuestion.answers[letter]}
			</label>'
		);
	} 
	//add this quest.nd its answers to d output
		answers.push(
			'<div class ="question">${currentQuestion.question}</div>'
			'<div class="answers">${answers.join(' ')}</div>'
				);
		} 
	);
//Combine the output list into one HTML string and load up in page
	quizContainer.innerHTML = output.join(' ');
}

myQuestion.forEach((currentQuestion, questionNumber) => {
	//To store list answer choices
	const answers = [];
		
	for (letter in currentQuestion.answers){
		//adding radio btn
				answers.push(
		'<label>
				<input type ="radio" name ="question${questionNumber}" value ="${letter}"></label>'
	${letter}:
	${currentQuestion.answers[letter]} 
		);
		} 
	//addin this quest nd its ans to d output
	output.push(
	'<div class ="question">
	{currentQuestion.question}</div>
		<div class ="answers">${answers.join(' ')} </div>'
		);
		
function showResults() {
	//Gather answer containers from our quiz			
		const answerContainers = quizContainer.querySelectorAll('.answers');
	//Keep track of user's answers
		let numCorrect = 0;	
		//For each question
		myQuestions.forEach((currentQuestion, questionNumber) => {
		//Find selected answer 
		const answerContainer = answerContainers[questionNumber];
		const selector = 'input[name=question${questionNumber}]:checked';
		const userAnswer = (answerContainer.querySelectorAll(selector)||{}).value;
		//If answer is correct
		 if (userAnswer === currentQuestion.correctAnswer)
		 { //Add to d num of correct answers
		 				numCorrect++;
		 	//Color correct answer lightgreen 
	answerConatiner[questionNumber].style.color ="lightgreen";
	} 
	//If answer is wrong or blank
	else {
//Color wrong answer red	
answerContainer[questionNumber].style.color="red"; 				
			} 
	});
	//Show num of correct ans out of total	
resultContainers.innerHTML = '${numCorrect} out of ${myQuestions.length}';
} 

//Display the quiz right away
buildQuiz;
 output.push(
			'<div class = "slide">
			<div class="question">${currentQuestion.question}</div>
			<div class="answers">${answer.join(" ")} </div>
			</div>'
 );
 //Pagination
 const previousButton = document.getElementById("Previous");
 const nextButton = document.getElementById("Next");
 const slides = document.querySelectorAll(".slide");
 let currentSlide = 0;
 
 showSlide = (currentSlide);
 function showNextSlide() {
 			showSlide = (currentSlide + 1);
 			} 	
 function showPreviousSlide(){
 				showSlide = (previousSlide - 1);
 				} 
 		//Event Listener 
	previouButton.addEventListener("click", showPreviousSlide);
	nextButton.addEventListener("click", showNextSlide);
	
//on Submit show results
submitButton.addEventListener('click', showReFunction
				
//Slide Function
function showSlide(n) {
	slides[	currentSlide].classList.remove('active-slide');
slides[n].classList.add(	'active-slide');
currentSlide = n;
  if (currentSlide === 0){
			previousButton.style.display ="none";
			} 
		else{
			previousButton.slide.display ="inline-block";
			} 
			
		if (currentSlide === 	slides.length-1){
				nextButton.style.display ="none";
				submitButton.style.display ="inline-block";
				} 
			else{
					nextButton.style.display ="inline-block";
					submitButton.style.display ="none";
					} 
				} 
		
const myQuestions [
{
			question: 'Who killed Osama Bin Laden?';
			answer: {
				a: 'Donald Trump', 
				b: 'Barrack Obama', 
				c: 'Muhammadu Buhari'
			}, 
				correctAnswer: 'b'
	}, 

{
   question: 'When and Where did Corona Virus originated from?'; 
   answer: {
   a: 'In 2020, from Japan', 
   b: 'In 2019, from Spain', 
   c: 'In 2019, from China'
 }, 
   correctAnswer: 'c'
}, 

{
  question: 'What started the Social Media Trend, #BlackLivesMatter in 2020?';
  answer: {
  a: 'The killing of George Floyd by a White US Cop', 
  b: 'The raping of a girl in a church in Nigeria', 
  c: 'No Idea'
   },   
  correctAnswer: 'a'
  }
];
} 
)();

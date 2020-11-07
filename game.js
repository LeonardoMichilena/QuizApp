//Create an Array containing arrays of 1 Question, 4 Answers and the number of the right answer (1-4)
let questions = [
                    ['Wer hat HTML erfunden?','Robbie Williams','Lady Gaga','Tim Berners-Lee','Justin Bieber',3],
                    ['Was bedeutet &lt\a\&gt in HTML?','Text Fett','Container','Ein Link','Kursiv',3],
                    ['Wie Bindet man eine Website in eine Website?','&lt;iframe&gt;,&lt;frame&gt;, and &lt;frameset&gt;','&lt;iframe&gt;','&lt;frame&gt;','&lt;frameset&gt;',2],
                    ['Wie definiert man in Javascrip eine Variable?','let 100 = rate;','100 = let rate;','rate = 100;','let rate = 100;',4]
//Add question here--> ,['Question','Answer1','Answer2','Answer3','Answer4',1-4(Num right answer)]               
                ];

// Keep track of the question number for the array questions[], starting from 0
let questionNum = 0;

// Keep track of the bar progress number, the percentage of progress for each right answer depends on the total number of questions
let progressNum = 0;
let questionPercent = 100 / questions.length;

// Keep track of number of wrong answers 
let questionsWrong = 0;

// "add" or "remove" class 'd-none' by Id
function displayYes(id){
    let iden= id;
    document.getElementById(iden).classList.remove('d-none');
}
function displayNo(id){
    let iden= id;
    document.getElementById(iden).classList.add('d-none');
}

//When button Start is pressed, game starts
function startQuiz() {
    displayNo('startBtn');
    displayYes('card');
    displayYes('answers');
    nextQuestion();
}

// Next question appears (when clicking 'Start' or 'Naechste Frage' buttons)
function nextQuestion () {
    displayYes('answers')
    displayNo('right-answer');
    displayNo('next-question');

    // Change question and answers from HTML with a for loop and an array for the IDs
    for (i=0;i<5;i++){
    let questionAnswers = ['question','answer1','answer2','answer3','answer4'];
    document.getElementById(questionAnswers[i]).innerHTML = questions[questionNum][i];
    }
}

//Actions when answer is right and wrong, or game finishes
function answer(a) {
    let selected_answer = a;
    //If selected_answer is equals to the last number in the array is a right answer
    if (selected_answer == questions[questionNum][5]){
        displayNo('wrong-answer');
        displayNo('answers')
        displayYes('right-answer');
        //Every right answer increases evenly X% of the progress bar
        progressNum+= questionPercent;
        document.getElementById('progress-num').classList.add('w-' + progressNum);
        document.getElementById('progress-num').innerHTML= progressNum + '%';
        
        //Finish Quiz on the last question available - else - show next question
        if(questionNum+1 == questions.length ){
            displayYes('finish-quiz');
        }
        else {
            questionNum++;
            displayYes('next-question');
        }
    
    // By wrong answer, show alert and increase counter   
    } else {
        questionsWrong++;
        displayYes('wrong-answer');
    }
}
//End of the Quiz, show results
function finishQuiz() {
    displayNo('card');
    displayNo('answers');
    displayNo('right-answer');
    displayNo('finish-quiz');
    displayYes('end-panel');
    document.getElementById('mistakes').innerHTML = "Fehler: " + questionsWrong;
}

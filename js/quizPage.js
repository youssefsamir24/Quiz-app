export class QuizPage{
    constructor(quetsions){
        // console.log("hello world");
        this.quetsions = quetsions;
        this.currentQuestion = 0;
        this.totalNumberOfQuestions = quetsions.length;
        this.score=0;
        document.getElementById('next').addEventListener('click',this.nextQuestion.bind(this))
        document.getElementById('tryBtn').addEventListener('click',this.finishTryAgain)
        this.showQuiz();
    }

     randomaizer(answers){
        let current = answers.length , randomer;
        while(current!=0){
            randomer = Math.floor(Math.random()*current);//0 => 0.9999999 0.42 0.66*2 1.9
            /*
            3.99999
            1-math.floor => 3
            2-math.round => 4
            3-math.ceil => 4
            */
            current--;
            //swap 
            [answers[current],answers[randomer]] = [answers[randomer],answers[current]]
        }

        // return array
       
        // console.log(array);
        // for(let i =0 ; i)
    }



    showQuiz(){
        document.getElementById('currentQuestion').innerHTML =  this.currentQuestion+1;
        document.getElementById('totalNumberOfQuestions').innerHTML = this.totalNumberOfQuestions;
        document.getElementById('question').innerHTML = this.quetsions[this.currentQuestion].question;
        let answers = [this.quetsions[this.currentQuestion].correct_answer,...this.quetsions[this.currentQuestion].incorrect_answers]
        // console.log(answers);
        this.randomaizer(answers)
        // console.log(answers);
        // let finalAnswers = this.randomaizer(answers);
        // console.log(finalAnswers);
        // console.log(answers);
        let answersContainer = '';
        for(let i = 0 ; i<answers.length ; i++){
            // console.log(finalAnswers);
            answersContainer+=` <label class="form-check-label mb-2">
                                <input type="radio" class="form-check-input" name="answer" value="${answers[i]}">
                                     ${answers[i]}
                                </label>`
        }
        document.getElementById('rowAnswer').innerHTML = answersContainer;

    }

    nextQuestion(){
        // console.log('hello');
        if(Array.from(document.getElementsByName('answer')).find(e=>e.checked)!=undefined){
            $('#alert').hide(100);
            let correctAnswer = this.quetsions[this.currentQuestion].correct_answer;
            let userAnswer = Array.from(document.getElementsByName('answer')).find(e=>e.checked).value;
            // console.log(userAnswer);
            this.correctCheck(correctAnswer,userAnswer)
            this.currentQuestion++;
            if(this.currentQuestion<this.totalNumberOfQuestions){
                this.showQuiz();
            }else{
                // console.log('finished');
                $('#quiz-page').slideUp(100);
                $('#quiz-finish').slideDown(100);
                document.getElementById('score').innerHTML = this.score;
            }

        }else{
            $('#alert').show(100);
        }
    }


    correctCheck(coreectAnswer,userAnswer){
        if(coreectAnswer==userAnswer){
            $('#Correct').show(1000).hide(1000)
            this.score++;
        }else{
            $('#inCorrect').show(1000).hide(1000)
        }
    }


    finishTryAgain(){
        $('#quiz-finish').slideUp(100);
        $('#quiz-app').slideDown(100);

    }








}
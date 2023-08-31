import { QuizPage } from "./quizPage.js";

export class QuizSettings{
    /*
    1- inputs
    2- fetch data
    3 - quiz start
    */
    constructor(){
        $('#quiz-finish').slideUp(0);
        $('#quiz-page').slideUp(0);
        $('#alert1').hide(0);
        $('#inCorrect').hide(0);
        $('#Correct').hide(0);
        this.category = document.getElementById('category');
        // console.log(this.category);
        this.difficulty = document.getElementsByName("difficulty");
        this.numberOfQuestions = document.getElementById('numberOfQuestions');
        // console.log(this.difficulty);
        // console.log(this.numberOfQuestions);
        document.getElementById('startBtn').addEventListener('click',this.startQuiz.bind(this))
    }


    async startQuiz() {
        // console.log(this);
        let category =  this.category.value;
        let difficulty = Array.from(this.difficulty).find(s=>s.checked).value;
        let numberOfQuestions = this.numberOfQuestions.value;
        const api = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`
        const quetsions = await this.fetchData(api)
        // console.log(quetsions);
        if(quetsions.length>0&&this.numberOfQuestions<40){
            $('#alert1').hide(0);
            $('#quiz-app').slideUp(100);
            $('#quiz-page').slideDown(200);
            let quiz = new QuizPage(quetsions);
        }else{
            $('#alert1').show(100);
        }
        
        // console.log(numberOfQuestions);

        // let difficulty = document.querySelector('[name="difficulty"]:checked');
        // console.log(this.difficulty);
        // console.log(difficulty);
        
    }
    async fetchData(api){
        let resposne = await fetch(api);
        resposne = await resposne.json();
        return resposne.results

    }


}
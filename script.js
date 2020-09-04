class altp{
    constructor(){
        this.ui = new ui();
        this.ui.showScreen('welcome');
        
        this.startSound = new sound('start.mp3');
        this.bgSound = new sound('bg.mp3');

        this.questionBgSound = new sound('question_bg.mp3');
        this.waitAnswerSound = new sound('wait-answer.mp3');
        this.correctSound = new sound('correct.mp3');
        this.wrongSound = new sound('wrong.mp3');

        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.questions = this.ui.data();
        this.finished = true;

        this.ui.onClickBtnStart( () => {
            this.start()
        });

    }

    start(){
        this.resetColor();
        this.ui.showScreen('questions');
        this.ui.showQuestion(this.currentQuestion);
        this.startSound.start( () => {
            this.ui.countDown(() => {
                this.questionBgSound.stop();
                this.ui.showScreen('welcome');
                this.resetColor;
                this.reset();
            });
            this.questionBgSound.start();
            this.ui.onClickAnswer((answer) => {
            this.ui.finished = true;
            this.currentAnswer = answer;
            this.questionBgSound.stop();
            this.ui.setColor(answer);
            this.waitAnswerSound.start( ()=> {
                    this.checkAnSwer();
                });
            });
        });
    }

    checkAnSwer(){
        if(this.currentAnswer == this.questions[this.currentQuestion].correct){
            this.ui.styleCorrect(this.currentAnswer);
            this.startSound = new sound('');
            this.currentQuestion++;
            this.correctSound.start( () => {
                this.start();
                this.questionBgSound.start();
            });
        }else{
            this.ui.wrongCorrect(this.currentAnswer, this.questions[this.currentQuestion].correct);
            this.wrongSound.start( () => {
                this.startSound = new sound('start.mp3');
                this.ui.showScreen('welcome');
                this.resetColor();
                this.reset();
            });
        }
    }

    resetColor(){
        this.ui.resetColor(this.questions[this.currentQuestion].correct);
        document.getElementById('countDown').innerHTML = '';
        this.ui.finished = false;
        document.getElementById('countDown').style.color = 'black';
    }

    reset(){
        this.currentAnswer = null;
        this.currentQuestion = 0;
    }
}

let game = new altp();

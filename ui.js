const questions = [
    {
        question: "Quê Hiếu Nguyễn ở đâu ?",
        answers: ["Cần Thơ", "Bình Minh - Vĩnh Long", "TP. Hồ Chí Minh", "Sóc Trăng"],
        correct: 1
    },
    {
        question: "Bóng Ma là biệt danh đội bóng nào ?",
        answers: ["Barca", "Manchester United", "Juventus", "Real Madrid"],
        correct: 3
    },
    {
        question: "Điền vào chỗ khuyết: \"4 + 3 + 16 = ...\" bao nhiêu? (Mẹo)",
        answers: ["23", "100", "69", "84"],
        correct: 1
    },
    {
        question: "Đông Nam Á có bao nhiêu nước thành viên ?",
        answers: ["12", "11", "9", "10"],
        correct: 1
    }
]

class ui{
    constructor(){
        this.finished = false;
    }
    data(){
        return questions;
    }

    showScreen(currentScreen){
        let screens = document.querySelectorAll('#wrapper > div');
        screens.forEach((screen) => {
            screen.style.display = 'none';
        });
        
        document.getElementById('countDown').display='block';
        document.getElementById(currentScreen).style.display = 'block';
    }

    onClickBtnStart(callBack){
        let startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click', callBack);
    }

    showQuestion(index){
        document.getElementById('question').innerHTML = questions[index].question;
        document.getElementById('answer_0').innerHTML = questions[index].answers[0];
        document.getElementById('answer_1').innerHTML = questions[index].answers[1];
        document.getElementById('answer_2').innerHTML = questions[index].answers[2];
        document.getElementById('answer_3').innerHTML = questions[index].answers[3];
    }

    onClickAnswer(answer){
        document.getElementById('answer_0').addEventListener('click',() => answer(0));
        document.getElementById('answer_1').addEventListener('click',() => answer(1));
        document.getElementById('answer_2').addEventListener('click',() => answer(2));
        document.getElementById('answer_3').addEventListener('click',() => answer(3));
    }

    setColor(index){
        document.getElementById('answer_' + index).style.backgroundColor = 'lavender';
    }

    styleCorrect(index){
        document.getElementById('answer_' + index).style.backgroundColor = 'green';
        document.getElementById('answer_' + index).style.color = 'white';
    }

    wrongCorrect(wrongIndex, corectIndex){
        document.getElementById('answer_' + wrongIndex).style.backgroundColor = 'red';
        document.getElementById('answer_' + wrongIndex).style.color = 'white';

        document.getElementById('answer_' + corectIndex).classList.add('blink');
        document.getElementById('answer_' + corectIndex).style.color = 'white';
    }

    resetColor(index){
        let divAnswer = document.querySelectorAll('#answers > div');
        divAnswer.forEach((div) =>{
            div.style.backgroundColor = 'rgb(230, 213, 176)';
            div.style.color='black'
        });
        document.getElementById('question').style.backgroundColor='powderblue';
        document.getElementById('answer_' + index).classList.remove('blink');
    }

    countDown(callBack){
        let time = 21;
        let count = setInterval(() =>{
            time--;
            if(time == 0){
                document.getElementById('countDown').innerHTML='';
                clearInterval(count);
                callBack();
            }

            else if(this.finished){
                document.getElementById('countDown').innerHTML=time;
                clearInterval(count);
            }

            else if(time == 5){
                document.getElementById('countDown').innerHTML = time;
                document.getElementById('countDown').style.color= 'red';
                document.getElementById('countDown').classList.add('scale');
            }

            else if(time == 4){
                document.getElementById('countDown').innerHTML = time;
                document.getElementById('countDown').classList.remove('scale');
            }

            else if(time == 3){
                document.getElementById('countDown').innerHTML = time;
                document.getElementById('countDown').classList.add('scale');
            }

            else if(time == 2 ){
                document.getElementById('countDown').innerHTML = time;
                document.getElementById('countDown').classList.remove('scale');
            }

            else if(time == 1){
                document.getElementById('countDown').innerHTML = time;
                document.getElementById('countDown').classList.add('scale');
            }

            else{
                document.getElementById('countDown').innerHTML = time;
            document.getElementById('countDown').innerHTML = time;
            }
        },1000);
    }
}
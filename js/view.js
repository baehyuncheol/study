const main = document.querySelector("#main");
const view = document.querySelector("#view");
const result = document.querySelector("#result");
const pPage = 9;
const select = [];

function go_Start() {
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        view.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            view.style.display = "block";
        }, 200);
        let pIdx = 0;
        go_Next(pIdx);
    }, 200);

}

function go_Next(pIdx) {

    if(pIdx == pPage)
    {
        go_result();
        return;
    }

    const q = document.querySelector(".questionBox");
    q.innerHTML = questionList[pIdx].question;
    
    for (var i in questionList[pIdx].anwer) {
        anwerAdd(questionList[pIdx].anwer[i].a, pIdx, questionList[pIdx].anwer[i].type);
    }
    
    const status = document.querySelector('.statusBar');
    status.style.width = (100/pPage) * (pIdx + 1) + "%";
}

function anwerAdd(anwerText, pIdx, type) {
    const a = document.querySelector(".answerBox");

    var a_Botton = document.createElement('button');
    a_Botton.classList.add("answerList");
    a_Botton.classList.add("my-2");
    a_Botton.classList.add("py-3");

    a.appendChild(a_Botton);
    a_Botton.innerHTML = anwerText;
    a_Botton.setAttribute("data", type);

    a_Botton.addEventListener('click', function (event) {
        var answer_Obj = document.querySelectorAll('.answerList');
        for (var i = 0; i < answer_Obj.length; i++) {
            answer_Obj[i].disabled = true;
            answer_Obj[i].style.display = "none";
            answer_Obj[i].style.display = "none";
        }

        select.push(this.getAttribute("data"));

        go_Next(++pIdx);
    }, false);
}

function go_result()
{
    var res = 0;
    for(var i = 0; i < select.length; i++)
    {
        res += select[i] * 11.2;
    }
    
    var reObj = document.getElementById('resultVal');
    reObj.innerText = (res > 100 ? 100 : res) + "%";

    var reObj = document.getElementById('resultTxt');
    for(var j = 0; j < resultList.length; j++)
    {
        if(resultList[j].resultVal <= res)
            resultTxt.innerHTML = resultList[j].resultText;
    }

    view.style.animation = "fadeOut 1s";

    setTimeout(() => {
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            view.style.display = "none";
            result.style.display = "block";
        }, 300)});

    
}
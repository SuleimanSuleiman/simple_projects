let current = 0,
    right = 0,
    bullets = document.querySelectorAll('.bullets span');

function getQuestion(){
    let Question = new XMLHttpRequest()
    Question.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){

            let myQustion = JSON.parse(Question.responseText)
            let countMyQustion = myQustion.length

            createQuetion(myQustion[current])

            myQu = myQustion

            function suleiman(){

                    chickTheAnswer(myQustion[current])
    
                    current++
    
                    if(current < myQustion.length){
                        
                        removeOldQuetion()
    
                        createQuetion(myQustion[current])
    
                    }else{
    
                        let theDiv = document.createElement('div')
                        theDiv.style = `position: fixed ; 
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background-color: rgba(3 169 244 / 0.9);
                                    z-index: 100000;
                                    `;

                        let DivContainer = document.createElement('div')
                        DivContainer.append(`You Answer ${right} from ${myQustion.length}`)
                        DivContainer.style = `  width: fit-content;
                                                background: #fff;
                                                border-radius: 14px;
                                                padding: 15px 30px;
                                                font-size: 22px;
                                                color: currentcolor;
                                                font-family: monospace;
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                transform: translate(-50%,-50%);
                                                font-weight: bold;`
                        let theSpan = document.createElement('span')
                        theSpan.className = 'a reload'
                        theSpan.style = `    position: absolute;
                                            top: 60%;
                                            left: 50%;
                                            transform: translate(-50%,-60%);
                                            cursor: pointer;`
                        theSpan.append(`Reload ?`)
                        theDiv.appendChild(theSpan)
                        theDiv.appendChild(DivContainer)
                        document.body.appendChild(theDiv)

                        document.querySelector('.reload').onclick = () => location.reload()
                    }
            }
        
            
            document.querySelector('footer .submit').onclick = suleiman
            document.querySelector('footer .theskip').onclick = suleiman
        }
    }

    Question.open('GET' , './html_quesition.json',true)
    Question.send()
}

getQuestion()


function createQuetion(obj){

    let numberQuestion = document.createElement('span')
    numberQuestion.className ='numberQuestion'
    numberQuestion.append(current+1 + ` - `) 

    let questionContainer = document.createElement('span')
    questionContainer.className = 'questionContainer'
    questionContainer.append(obj.title)

    document.querySelector('.theQuestion').appendChild(numberQuestion)
    document.querySelector('.theQuestion').appendChild(questionContainer)

    for(let i = 1 ; i <=4 ;i++){

        let section = document.createElement('section')

        let theInput = document.createElement('input')
        theInput.type = 'radio'
        theInput.name = 'answer'
        theInput.id = `answer_${i}`
        theInput.dataset.answer = obj[`answer_${i}`]

        let theLabel = document.createElement('label')
        theLabel.htmlFor = `answer_${i}`
        theLabel.append(obj[`answer_${i}`])

        section.appendChild(theInput)
        section.appendChild(theLabel)
        document.querySelector('.the-anwers').appendChild(section)
    }
}

function chickTheAnswer(obj){

    //yourAnswer
    let inputs = document.querySelectorAll('.container .the-anwers section input'),
        yourAnswer;

    inputs.forEach((ele) =>{

        if(ele.checked){
            yourAnswer = ele.dataset.answer
        }
    })

    if(yourAnswer === obj['right_answer']){

        right++;
        bullets[current].style = 'background-color:aqua; border:1px solid aqua'

    }else{

        bullets[current].style = 'background-color: #FF5656;border:1px solid #FF5656'
    }
}

function removeOldQuetion(){

    document.querySelector('.theQuestion').innerHTML = ''
    document.querySelector('.the-anwers').innerHTML = ''

}

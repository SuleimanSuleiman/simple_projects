let imageArray    = Array.from(document.querySelectorAll('.container img')),
    currentNumber = 0,
    listCount    = imageArray.length,
    ul           = document.createElement('ul'),
    nextButton   = document.getElementById('nextButton'),
    prevButton   = document.getElementById('prevButton');

function createUl(){

    ul.className = 'list-ul'

    ul.setAttribute('id' , 'list-ul')

    for(let i = 1 ; i <= listCount ;i++){

        let listItem = document.createElement('li')

        listItem.setAttribute('data-index' , i-1)

        listItem.textContent = i

        ul.appendChild(listItem)
    }

    document.querySelector('.lists').appendChild(ul)
}


createUl()

function removeAllActive(){

    imageArray.forEach((element) =>{
        element.classList.remove('active')
    })

    document.querySelectorAll('#list-ul li').forEach((element) =>{
        element.classList.remove('active')
    })
}

function addActive(){

    removeAllActive()

    imageArray[currentNumber].classList.add('active')

    document.querySelector('#list-ul').children[currentNumber].classList.add('active')
}

function addNoDrepp(){
    if(currentNumber == 0){
        prevButton.classList.add('soso')
    }else{
        prevButton.classList.remove('soso')
    }
    if(currentNumber == listCount-1){
        nextButton.classList.add('soso')
    }else{
        nextButton.classList.remove('soso')
    }
}

addActive()
addNoDrepp()

function funnextButton(){

    if(nextButton.classList.contains('soso')){
        return false
    }else{
        currentNumber++
        addActive()
        addNoDrepp()
    }
}
function funprevButton(){

    if(prevButton.classList.contains('soso')){
        return false
    }else{
        currentNumber--
        addActive()
        addNoDrepp()
    }
}

function changeLink(){
    
    document.querySelectorAll('#list-ul li').forEach((ele) =>{

        ele.addEventListener('click' , (e) =>{

            currentNumber = e.target.dataset.index
            addActive()
            addNoDrepp()
        })
    })
}
changeLink()
prevButton.onclick = funprevButton
nextButton.onclick = funnextButton
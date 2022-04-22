let allSpan = document.querySelectorAll('.container .buttons span'),
    theInput = document.querySelector('.container input'),
    results = document.querySelector('.results > span');

allSpan.forEach((element) =>{

    element.addEventListener('click' , (e) =>{

        results.innerHTML =''

        if(e.target.className === 'chick'){
            if(theInput.value.match(/[0-9a-zA-Z]/ig) === null){
                results.innerHTML = `place input Iteam`
            }else{
                if(localStorage.getItem(theInput.value)){
                    results.innerHTML = `Found local Iteam called <span class="key">${theInput.value}</span>`
                }else{
                    results.innerHTML = `No local Iteam called <span class="key">${theInput.value}</span>`
                }
            }
        }
        if(e.target.className === 'add'){
            let theKey = theInput.value
            let theValue = window.prompt(`write the value for ${theKey}`)
            localStorage.setItem(theKey,theValue)
            results.innerHTML = `the item <span class="key">${theKey} </span> added (value : <span class="value">${theValue}</span>)`
            theInput.value = ''
        }
        if(e.target.className === 'delete'){
            if(localStorage.getItem(theInput.value) === null){
                results.innerHTML = `<span class="key">${theInput.value}</span> didnt find in local storage`
            }else{
                localStorage.removeItem(theInput.value)
                results.innerHTML = `the item <span class="key">${theInput.value} </span> removed `
                theInput.value = ''
            }
            theInput.value = ''
        }
        if(e.target.className === 'show'){
            if(localStorage.length === 0){
                results.innerHTML = `<span>local storage is empty !!</span> `
            }else{

                let objectlocalstorage = Object.entries(localStorage)
                for(let [key,value] of objectlocalstorage){
                    let span = document.createElement('span')
                    span.className = 'mainspan'
                    span.innerHTML = `Item : <span class="key">${key}</span> the Value : <span class="value">${value}</span>`
                    results.appendChild(span)
                }
            }
            theInput.value = ''
        }
    })
})

document.querySelector('.removeall').onclick = () => {
    localStorage.clear()
    location.reload()
}




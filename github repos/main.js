let theInput = document.querySelector('.get-repos input'),
    theButton = document.querySelector('.get-repos .git-bitton'),
    showData = document.querySelector('.show-data')

theInput.oninput = function(){
    if(theInput.value.match(/[0-9a-zA-z]/ig) !== null){
        theButton.style = 'opacity: 1;transform: translateX(-19px) skewX(-30deg);'
    }
}
theButton.onclick = () =>{

    theButton.style = 'opacity: 0.5;transform: translateX(-150px) skewX(-30deg);'
    getRepos()    
    theInput.value = null
}


function getRepos(){
    let theName = theInput.value
    fetch(`https://api.github.com/users/${theName}/repos`)
    .then(response => response.json())
    .then(data => {
        showData.innerHTML = ''
        data.forEach((ele) =>{
            let spanNumber = document.createElement('span')
            spanNumber.append(ele.stargazers_count)
            spanNumber.className = 'number'
            let divStart = document.createElement('div')
            divStart.className = 'div-starts'
            divStart.append('Starts')
            divStart.appendChild(spanNumber)
            let divVisit = document.createElement('div')
            divVisit.className = 'div-visit'
            let itemText = document.createTextNode('visit')
            let aItem = document.createElement('a')
            aItem.setAttribute('target','_blanck')
            aItem.setAttribute('href',`https://github.com/${theName}/${ele.name}`)
            aItem.appendChild(itemText)
            divVisit.appendChild(aItem)
            TheText = document.createElement('div')
            TheText.className = 'text'
            TheText.appendChild(divStart)
            TheText.appendChild(divVisit)
            let RepoName = document.createElement('div')
            RepoName.className = 'repo-name'
            RepoName.append(ele.name)
            let contDiv = document.createElement('div')
            contDiv.className= 'cont-div'
            contDiv.appendChild(RepoName)
            contDiv.appendChild(TheText)
            showData.appendChild(contDiv)
        })

    });
    
}

getRepos()
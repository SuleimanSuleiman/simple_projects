function get(attr,pathElement){
    let id
    if(attr === 'query'){
        id = document.querySelector(pathElement)
        return id
    }else if(attr === 'id'){
        id = document.getElementById(pathElement)
        return id
    }else if(attr === 'all'){
        id = document.querySelectorAll(pathElement)
        return id
    }
}

let header   = get('query','header'),
    TheInput = get('query','header input'),
    spanHeader = get('query','header span'),
    boxs      = get('query','.boxs'),
    add      = get('query' , 'header span .add'),
    numberOfTasks = get('query','footer .number-of-tasks'),
    numberOfCompleted = get('query','footer .number-of-completed');


spanHeader.onclick = () => {
    TheInput.classList.toggle('open')
    spanHeader.classList.toggle('open')
}


//create Div
window.onclick = (e) =>{
    if(e.target.className === 'add'){
        let s = TheInput.value
        if(s.match(/[a-zA-Z0-9]/ig) == null){
            window.alert('placew write task')
        }else{
            let BoxTask = document.createElement('div')
            BoxTask.className = 'box-task'
            let TextDiv = document.createElement('div')
            TextDiv.className = 'text'
            let Delete  = document.createElement('span')
            Delete.className = 'delete'

            TextDiv.append(TheInput.value)
            Delete.append('Delete')
            BoxTask.appendChild(TextDiv)
            BoxTask.appendChild(Delete)
            boxs.appendChild(BoxTask)

            numberOfTasks.innerHTML = parseInt(numberOfTasks.innerHTML) + 1
            TheInput.value = ''
        }
    }
    if(e.target.className === 'delete'){
        e.target.parentNode.remove()
        numberOfTasks.innerHTML = parseInt(numberOfTasks.innerHTML) - 1
    }
    if(e.target.className === 'text' || e.target.className === 'text finished'){

        e.target.classList.toggle('finished')

        e.target.className === 'text' ? numberOfCompleted.innerHTML = parseInt(numberOfCompleted.innerHTML) - 1: numberOfCompleted.innerHTML = parseInt(numberOfCompleted.innerHTML) + 1
    }
}



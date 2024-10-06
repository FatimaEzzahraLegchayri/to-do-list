const input = document.getElementById('input-box')
const taskList = document.getElementById('list-container')

    function addTask(){
        if(input.value === ''){
            alert('You need to write somthing')
        }else{
            const newdiv = document.createElement('div')
            taskList.appendChild(newdiv) 
            newdiv.className = 'rowtask'
            const li = document.createElement('li')
            let span = document.createElement('span')
            span.className = 'deletIcon'
            li.innerHTML = input.value
            span.innerHTML = "✖️";
            newdiv.appendChild(li)
            newdiv.appendChild(span)
            

        }
        input.value = ''
    }

taskList.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
       e.target.classList.toggle('isChecked') 
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }

}, false)

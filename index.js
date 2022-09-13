//GET VALUES FROM THE FORM
function serializeForm(fromNode){
    const { elements } = fromNode

    Array.from(elements)
    .filter((item) => !!item.id)
    .forEach((element) => {
        const {id, value} = element
        sessionStorage.setItem(id,value)
    })
}

//FUNCTION TO HIDE THE FORM
function hiddenForm(formNode) {
    formNode.style.visibility = "hidden"; //hide
}

function sayWelcome(){
    const name = sessionStorage.getItem('name')
    const surname = sessionStorage.getItem('surname')
    alert('Welcome to my Website ' +surname+ " "+ name + " !")
}

//EVENT LISTENER
function handleFormSubmit(event){
    event.preventDefault()
    serializeForm(event.target)
    hiddenForm(event.target)
    sayWelcome()
}





const pointerForm = document.getElementById("form__reg")
pointerForm.addEventListener('submit', handleFormSubmit)
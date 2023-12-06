const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')


//validando login
const validateInput = ({target}) => { 
    if(target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled', '')
}

//submit
const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = "pages/game.html"
}


input.addEventListener('input', validateInput) 
form.addEventListener('submit', handleSubmit) 



//https://www.youtube.com/watch?v=tcbMmm77WOU



let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')
let usernameMassage = document.querySelector('.username-validation')
let passwordMassage = document.querySelector('.password-validation')

let usernameIn = document.querySelector('.username')
let passwordIn = document.querySelector('.password')

function usernameValidation(params) {
    if (usernameIn.value.length < 12) {
        usernameMassage.style.color = 'red'
        usernameMassage.innerHTML = 'باید 12 کاراکتر یا بیشتر باشد'
        usernameMassage.style.display = 'block'
    }else {
        usernameMassage.style.color = 'green'
        usernameMassage.innerHTML = 'مقدار ایمیل درست میباشد'
    }
}

function passwordValidation(params) {
    if (passwordIn.value.length < 8) {
        passwordMassage.style.color = 'red'
        passwordMassage.innerHTML = 'باید 8 کاراکتر یا بیشتر باشد'
        passwordMassage.style.display = 'block'
    }else {
        passwordMassage.style.color = 'green'
        passwordMassage.innerHTML = 'مقدار پسورد درست میباشد'
    }
}

function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 12 || passwordValue.length < 8) {
        modal.innerHTML = 'لطفا اطلاعات لازم را به درستی وارد کنید'
        modal.style.background = 'red'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }
    setTimeout(function () {
            modal.style.display = 'none'
        },3000)
    console.log(userNameValue, passwordValue)
}

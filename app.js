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
        usernameMassage.innerHTML = ' مقدار ایمیل باید 12 کاراکتر یا بیشتر باشد'
        usernameMassage.style.display = 'block'
    }else {
        usernameMassage.style.color = 'green'
        usernameMassage.innerHTML = 'مقدار ایمیل درست میباشد'
    }
}

function passwordValidation(params) {
    if (passwordIn.value.length < 8) {
        passwordMassage.style.color = 'red'
        passwordMassage.innerHTML = 'مقدار رمز عبور باید 8 کاراکتر یا بیشتر باشد'
        passwordMassage.style.display = 'block'
    }else {
        passwordMassage.style.color = 'green'
        passwordMassage.innerHTML = 'مقدار رمز عبور درست میباشد'
    }
}

function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 12 || passwordValue.length < 8) {
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد کنید'
        modal.style.background = 'red'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'با موفقیت وارد شدید'
        modal.style.display = 'inline'
    }
    setTimeout(function () {
            modal.style.display = 'none'
        },3000)
    console.log(userNameValue, passwordValue)
}

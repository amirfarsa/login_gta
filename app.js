let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

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

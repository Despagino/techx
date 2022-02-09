 let formBtn = document.querySelector(".submit-btn")


formBtn.addEventListener('click', () => {
        let fullName = document.querySelector("#name")
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
        let phoneNumber = document.querySelector("#number")
        let agreement = document.querySelector("#tc")


        if (!fullName.value.length) {
            showFormErr("Please input a name")
        } else if (!email.value.length) {
            showFormErr("Enter your email")
        } else if (password.value.length < 7) {
            showFormErr("Password must be at least 7 characters long")
        }  else if (!agreement.checked) {
            showFormErr("Click on agreement")
        } else if (phoneNumber.value.length < 10) {
            showFormErr("Number is not valid")
        } else {
            sendData({
                name: fullName.value,
                email: email.value,
                password: password.value,
                phoneNumber: phoneNumber.value,
                agreement: agreement.value
            } )
        }
})

let showFormErr = err => {
    let error = document.querySelector(".error")
    error.innerHTML = err
    error.classList.add("show")
}

let sendData = (data) => {
    axios.post("http://localhost:5001/signup", data)
    .then(res => {
        processData(data)
    })
}

let processData = data => {
    console.log("Request Sent")
    if(alert.data) {
        showFormErr(data.alert)
    } else {
        location.replace('/home')
    }
}

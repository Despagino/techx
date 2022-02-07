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
            // sendData({
            //     name: fullName.value,
            //     email: email.value,
            //     password: password.value,
            //     phoneNumber: phoneNumber.value,
            //     agreement: agreement.value
            axios.post("http://localhost:5001/signup", 
            {
            name: fullName.value,
            email: email.value,
            password: password.value,
            phoneNumber: phoneNumber.value,
            agreement: agreement.value
            }
            )
            .then(res => {
                processData(res.data)
                console.log('hello')
            })
        }
})


let showFormErr = err => {
    let error = document.querySelector(".error")
    error.innerHTML = err
    error.classList.add("show")
}

// let sendData = (path, data) => {
//     console.log(data)
//     fetch("http://localhost:5001/signup", {
//         method: 'post',
//         headers: new Headers({'Content-Type': 'application/json'}),
//         body: JSON.stringify(data)
//     })
//     .then(data => processData(data))
// }

// let sendData = (data) => {
//     axios.post("http://localhost:5001/signup", data)
//     .then(res => {
//         processData(data)
//         console.log('hello')
//     })
// }

let processData = data => {
    console.log(data)
    if(alert.data) {
        showFormErr(data.alert)
    }
}
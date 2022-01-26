let products = document.querySelectorAll(".product_container")

let productObserver = new IntersectionObserver((entries) => {

let onscreen = 'on_screen'

let navigation = document.querySelector('.navigation_menu')

let hamburger = document.querySelector(".hamburger")
let isActive = 'is-active'

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle(isActive)
    navigation.classList.toggle('open')
})


    entries.forEach(entry => {
        let {isIntersecting, target} = entry

        if (isIntersecting) {
            target.classList.add(onscreen)
            return true
        } else {
            target.classList.remove(onscreen)
        }
    })
 }, {
     threshold: [0.7]
 })

products.forEach(product => {
    productObserver.observe(product)
})

let previousScrollPos = window.pageYOffset

let header = document.querySelector(".header")
let show = 'show'
let with_background = 'with_background'

window.onscroll = () => {
    let halfScreenHeight = Math.floor(window.innerHeight / 2)
    let currentScrollPos = window.pageYOffset

    if (currentScrollPos > halfScreenHeight) {
        header.classList.add(with_background)
    } else {
        header.classList.remove(with_background)
    }

    if (currentScrollPos > previousScrollPos) {
        header.classList.remove('show')
    } else {
        header.classList.add('show')
    }
    previousScrollPos = currentScrollPos
}




var onSlide = 1
var userHover = false

var projects = document.querySelector(".projects")
var project = projects.querySelectorAll(".project")
var dots = document.querySelectorAll(".dots span")

projects.addEventListener("mouseenter", function () {userHover = true})
projects.addEventListener("mouseleave", function () {userHover = false})

function changeSlide(way) {
    showSlide(onSlide + way)
}

function showSlide(slide) {
    if (slide > 3) {onSlide = 1} else if (slide < 1) {onSlide = 3} else {onSlide = slide}

    for (i = 0; i < project.length; i++) {
        project[i].style.display = "none"
        if (project[i].classList.contains("slide" + onSlide) == true) {
            if (window.matchMedia('screen and (max-width: 1250px)').matches && project[i].id == "hide2") {continue} else if (window.matchMedia('screen and (max-width: 1600px)').matches && project[i].id == "hide") {continue} else {project[i].style.display = "initial"}
        }
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    dots[onSlide - 1].classList.add("active")
}

showSlide(1)
setInterval (function () {if (userHover == false) {showSlide(onSlide +=1)}}, 2000)

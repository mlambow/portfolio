let typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let form = document.getElementById('formId')
let par = document.getElementById('tag')
function sendMail(event) {
    event.preventDefault()
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_uuzteou"
    const templateID = "template_vt89i0a"

    emailjs.send(serviceID, templateID, params)
    .then (function (response) {
            document.getElementById('name').value = "",
            document.getElementById('email').value = "",
            document.getElementById('subject').value = "",
            document.getElementById('message').value = "",
            console.log(response)    
            // alert('Message was successfully sent')
            window.location.reload(false)
        }     
    )
    form.style.display = 'none'
    par.innerHTML = "Message was successfully sent"
    par.style.color = "#0ef"
    
}
// window.location.reload(false)
form.addEventListener('submit', sendMail);

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("project-pic");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// let slideIndex = [1, 1];
// let slideId = ["project-pic", "project-pic-1", "project-pic-2", "project-pic-3", "project-pic-4"];
// showSlides(1, 0);
// showSlides(1, 1);
// // showSlides()

// function plusSlides(n, no) {
//     showSlides(slideIndex[no] += n, no)
// }

// function showSlides(n, no) {
//     let i;
//     let x = document.getElementsByClassName(slideId[no]);
//     if (n > x.length) {slideIndex[no] = 1}
//     if (n < 1) { slideIndex[no] = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"
//     }
//     x[slideIndex[no] - 1].style.display = "block";
// }

// const section = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".navbar a");
// window.onscroll = () => {
//     let current = "";
//     section.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         if (scrollY >= sectionTop - 60) {
//             current = section.getAttribute("id")
//         }
//     });

//     navLi.forEach((li) => {
//         li.classList.remove("active");
//         if (li.classList.contains(current)) {
//             li.classList.add("active");
//         }
//     })
// }
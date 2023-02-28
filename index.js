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
form.addEventListener('submit', sendMail)
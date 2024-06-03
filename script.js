window.addEventListener('scroll', reveal);
function reveal(){
    let reveals = document.getElementsByClassName("reveal");
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpt = 150;
        if(revealtop < windowHeight - revealpt)
            reveals[i].classList.add("active");
        else
        reveals[i].classList.remove("active");
    }
}
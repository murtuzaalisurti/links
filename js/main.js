document.querySelectorAll(".link a").forEach((link) => {
    link.addEventListener("mouseover", (e) => {
        e.target.parentElement.style = `background-color: black`;
        e.target.parentElement.firstChild.style = `color: white`;
    })

    link.addEventListener("mouseleave", (e) => {
        e.target.parentElement.style = `background-color: white`;
        e.target.parentElement.firstChild.style = `color: black`;
    })
})
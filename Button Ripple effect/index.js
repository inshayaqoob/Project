const button = document.querySelector(".btn")
button.addEventListener("mouseover", (event) =>{
    // console.log(event.pageX);
    // console.log(event.pageY);
    // console.log(event.pageY - button.offsetTop);
    // console.log(event.pageX - button.offsetLeft);
    const x = event.pageX - button.offsetLeft;
    const y = event.pageY - button.offsetTop;
    button.style.setProperty("--xPos", x  + "px");
    button.style.setProperty("--yPos", y  + "px");
});
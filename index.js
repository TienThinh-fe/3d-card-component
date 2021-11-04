const card = document.getElementById("content");
const container = document.getElementById("container");

container.addEventListener("mousemove", e => {
    let x = (window.innerWidth/2 - e.pageX) / 8;
    let y = (window.innerHeight/2 - e.pageY) / 12;

    if (x < 0 && y > 0) x *= -1
    else if (x > 0 && y > 0) y *= -1
    else if (x > 0 && y < 0) x*= -1
    else y *= -1

    card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    console.log(x, y);
})

container.addEventListener("mouseleave", e => {
    card.style.transition = "transform 0.25s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
})
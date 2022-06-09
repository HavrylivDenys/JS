function handle_click() {
    alert("Hello World Dummy")
}

function all() {
    const element = document.getElementById("header")
    element.addEventListener("click", handle_click)
}

all()
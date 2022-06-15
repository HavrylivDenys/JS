const names = ["Hello", "World", "Denys", "Viktor", "Roman"]

const getRandomInt = (max = 5) => {
    return Math.floor(Math.random() * max);
}

const handle_click = (e: Event) => {
    const element = e.target as HTMLElement
    element.innerText = names[getRandomInt(names.length)]
}

const main = () => { 

    const element = document.getElementById("header")
    element?.addEventListener("click", handle_click)
}

main()
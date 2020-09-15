let toggleDarMode = document.querySelector(".theme-switch input");
toggleDarMode.addEventListener('click', () => {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.toggle("dark-mode")
    })
    document.body.classList.toggle("dark-mode");
    let restartButton = document.querySelector(".game--restart");
    restartButton.classList.toggle("dark-mode");
})
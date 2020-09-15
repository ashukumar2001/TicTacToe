let darkModeBtn = document.querySelector("#toggle-dark-mode");
darkModeBtn.addEventListener('click', () => {
    let body = document.body;
    let restartBtn = document.querySelector(".game--restart");
    let cells = document.querySelectorAll(".cell");
    darkModeBtn.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    restartBtn.classList.toggle("dark-mode");
    cells.forEach(cell => {
        cell.classList.toggle("dark-mode");
    })
    let toggleIcon = document.querySelector("i#toggle-icon")

})
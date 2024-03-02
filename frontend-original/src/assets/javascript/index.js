window.onload = function () {
    const iconoMenu = document.querySelector(".bi-person-add");
    const menuWrap = document.querySelector(".menu-wrap");
    iconoMenu.addEventListener("click", () => {
        menuWrap.classList.toggle("oculto");
    })
}
let elem = document.querySelectorAll(".cat-link");
let title = document.querySelector(".title-cat");
function func(){
    let x = document.querySelector(".active");
    x.classList.remove('active');
    this.classList.add("active");
    title.textContent = this.textContent;
}
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', func, false);
}
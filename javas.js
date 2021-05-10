let popup = document.querySelector(".popup");
let exit = document.querySelector(".exit");
let more = document.querySelectorAll(".plus");
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function(){
        popup.style.visibility = "visible";
    });
}
exit.addEventListener("click", function(){
    popup.style.visibility = "hidden";
});
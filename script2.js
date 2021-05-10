let carts = document.querySelectorAll(".cart");
let span = document.querySelector(".cart-items");
for (let i = 0; i < carts.length; i++) {
    carts[i].setAttribute("bool", "false");
    carts[i].addEventListener("click", function(){
        let value = +span.textContent;
        if (this.getAttribute("bool") == "false") {
            value += 1;
            this.setAttribute("bool", "true");
            this.classList.add('selected-item');
        } 
        else{
            value -= 1;
            this.setAttribute("bool", "false");
            this.classList.remove('selected-item');
        }
        span.textContent = value;
    });
}
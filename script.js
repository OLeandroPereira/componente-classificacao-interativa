const avaliarInicio = document.querySelector("#avaliacao");
const thankYou = document.querySelector(".page-thank-you");
const form = document.querySelector(".avaliacao-form");

form.addEventListener("submit", function(e){
    e.preventDefault(); //para o navegador não atualizar
    const selector = "input[name=avaliacao]:checked";
    const checkedInput = document.querySelector(selector);
        
    // O usuário precisa selecionar uma opção para continuar
    if(checkedInput !== null){
        const selectedRating = document.querySelector(".selecao");
        selectedRating.textContent = "Você selecionou " + checkedInput.getAttribute("value") + " de 5"
        avaliarInicio.classList.add("hidden");
        thankYou.classList.remove("hidden");
    }
})
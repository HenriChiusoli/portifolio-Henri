// função que será executada automaticamente quando a página terminar de carregar
// garante que a imagem tenha seu tamanho ajustado automaticamente para manter a proporção
window.onload = function(){
    document.getElementById("img-equino").style.width = "300px";
    document.getElementById("img-equino").style.height = "auto";
}; 
let image = document.getElementById("img-equino");

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnChavear").addEventListener("click", function(){
        let button = document.getElementById("btnChavear");

        if (image.src.includes('Mangalarga-horse')){
            image.src = "imagens/Mula-troteira.png";
            button.textContent = "Cavalo Mangalarga";
            disableButtons("btnChavear");
        }else{
            image.src = "imagens/Mangalarga-horse.png";
            button.textContent = "Mula troteira";
            enableButtons();
        }
    })

    document.getElementById("btnTamanho").addEventListener("click", function(){
        let button = document.getElementById("btnTamanho");

        if (image.style.width === "300px"){
            image.style.width = "350px";
            image.style.height = "auto";
            button.textContent = "Tamanho original";
            disableButtons("btnTamanho");
        }else{
            image.style.width = "300px";
            image.style.height = "auto";
            button.textContent = "Aumentar tamanho";
            enableButtons();
        }
    })

    document.getElementById("btnFiltro").addEventListener("click", function(){
        let button = document.getElementById("btnFiltro");

        if (button.textContent === "Aplicar filtro"){
            aplicarFiltro();
            button.textContent = "Remover filtro";
            disableButtons("btnFiltro");

        }else{
            removerFiltro();
            button.textContent = "Aplicar filtro";
            enableButtons();
        }

    });

    function aplicarFiltro(){
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

        // Configurar o canvas com 300 x 300px
        canvas.width = 300;
        canvas.height = 300;

        // Desenhar a imagem redimensionada para preencher o canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Aplicar o filtro
        ctx.filter = "grayscale(100%)";

        // Redesenhar a imagem com o filtro aplicado
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Exibir o canvas
        // block: exibe
        canvas.style.display = "block";

        // none: oculta
        // Ocultar a imagem original
        image.style.display = "none";
    }

    function removerFiltro(){
        let canvas = document.getElementById("canvas");

        // Ocultar o canvas
        canvas.style.display = "none";

        // Exibir a imagem original
        image.style.display = "block";
        
    }

    // Habilitar botões
    function enableButtons(){
        
        const buttons = document.querySelectorAll(".buttons-container button");
        //document.getElementById("Teste").innerHTML = typeof buttons;

        // forEach lê todos os itens
        buttons.forEach(element => {
            element.disabled = false;
            
        });
        
    }

    // Desabilitar botões
    function disableButtons(exceptButtonId){

        const buttons = document.querySelectorAll(".buttons-container button");
        
        buttons.forEach(element => {
            if (element.id !== exceptButtonId){
                element.disabled = true;
            }
        });
    }
})

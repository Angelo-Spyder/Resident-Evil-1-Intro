
var botaoIniciar = document.querySelector("#iniciar");
var audioTitle = document.querySelector(".title-voice");

botaoIniciar.addEventListener("click",function(){
    audioTitle.play();
    setTimeout(
        function(){
            location.href = "seleção/selecao.html"
        }, 3000 );

});
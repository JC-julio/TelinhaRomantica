function teleport() {
    var buttonNao = document.getElementById('123');
    var newX = Math.floor(Math.random() * window.innerWidth);
    var newY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.position = 'absolute';
    buttonNao.style.left = newX + 'px';
    buttonNao.style.top = newY + 'px';
}

function MostraFofo() {
    var videoElement = document.createElement("video");
    videoElement.width = 640;
    videoElement.height = 480;
    videoElement.src = "aaaa.mp4";
    videoElement.type = "video/mp4";

    var videoContainer = document.getElementById("videoContainer");
    videoContainer.appendChild(videoElement);
    videoElement.play();

}

function OcultarBotoes() {
    var botaoSim = document.getElementById('321');
    var botaoNao = document.getElementById('123');
    botaoSim.style.display = 'none';
    botaoNao.style.display = 'none';
}
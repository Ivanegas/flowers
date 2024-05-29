onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

setTimeout(function() {
  document.getElementById('texto').style.display = 'block';
}, 6000);

document.getElementById('playButton').addEventListener('click', function() {
    setTimeout(function() {
        var audio = document.getElementById('audio');
        audio.play().catch(function(error) {
            console.log("Error al reproducir el audio: ", error);
        });
    }, 2000); // 2000 milisegundos = 2 segundos

    setTimeout(function() {
        var texto = document.getElementById('texto');
        texto.style.display = 'block';
    }, 4000); // 4000 milisegundos = 4 segundos
});
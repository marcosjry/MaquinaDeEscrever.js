


function escreverNoHtml(elementoId) {
    var elemento = document.getElementById(elementoId);
    var vetor = ["C", "JavaScript", "Python"];
    var i = 0;
    var k = 0;

    function escrever() {
        if (k < vetor[i].length) {
            elemento.innerHTML += vetor[i].charAt(k);
            k++;
            setTimeout(escrever, 90); // Ajuste o tempo aqui
        } else {
            setTimeout(apagar, 150); // Chama a função apagar depois que a string for escrita
        }
    }
    function apagar() {
        if (k > 0) {
            k--;
            elemento.innerHTML = vetor[i].substring(0, k);
            setTimeout(apagar, 150); // Ajusta o tempo aqui
        } else {
            i = (i + 1) % vetor.length; // Vai para a próxima string no vetor
            setTimeout(escrever, 100); // Começa a escrever a próxima string
        }
    }
    escrever();
}

escreverNoHtml("texto");


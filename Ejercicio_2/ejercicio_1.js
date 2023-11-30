function tirarDado() {
    const data = document.querySelector("#inputDado").value;
    const tirada = data.split("d");
    const mis_dados = [];

    for (let i = 0; i < tirada[0]; i++) {
        console.log("dado tirado");
        const resultado = Math.floor(Math.random() * tirada[1]) + 1;
        mis_dados.push(resultado);
    }

    return mis_dados;
}

function mostrarResultados() {
    const resultados = tirarDado();
    const resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.innerHTML = "Resultados: " + resultados.join(", ");
}
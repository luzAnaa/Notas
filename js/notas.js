var colorCont = 0

function inserir() {
    var notaTexto = document.getElementById("nota_Inserir").value.trim()
    var tipoSelecionado = document.querySelector('input[name="tipo_nota"]:checked')

    if (!notaTexto) {
        alert("Digite uma nota antes de inserir!")
        return
    }

    var tipo = tipoSelecionado.value; // "urgente" ou "nao_urgente"
    var novo = document.createElement("p")
    novo.textContent = notaTexto

    // ID único para cada nota
    novo.id = `nota_${tipo}_${Date.now()}`

    // alternar cores
    if (colorCont === 0) {
        novo.style.color = "blue"
        colorCont = 1
    } else if (colorCont === 1) {
        novo.style.color = "green"
        colorCont = 2
    } else {
        novo.style.color = "purple"
        colorCont = 0
    }

    // adiciona no campo correto
    var destino = tipo === "urgente" ? document.getElementById("urgentes") : document.getElementById("nao_urgentes")
    destino.append(novo)

    // limpa o campo de texto
    document.getElementById("nota_Inserir").value = ""
}

// excluir uma nota não urgente
function excluir_nota_NU() {
    var notas = document.querySelectorAll("#nao_urgentes p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas para remover!")
    }
}

// excluir uma nota urgente
function excluir_nota_U() {
    var notas = document.querySelectorAll("#urgentes p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas para remover!")
    }
}

// excluir todas as notas não urgentes
function excluir_todas_NU() {
    var notas = document.querySelectorAll("#nao_urgentes p")
    if (notas.length > 0) {
        notas.forEach(nota => nota.remove())
    } else {
        alert("Não há notas para remover!")
    }
}

// excluir todas as notas urgentes
function excluir_todas_U() {
    var notas = document.querySelectorAll("#urgentes p")
    if (notas.length > 0) {
        notas.forEach(nota => nota.remove())
    } else {
        alert("Não há notas para remover!")
    }
}

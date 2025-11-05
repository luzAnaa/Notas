var colorCont = 0

function inserir() {
    var notaTexto = document.getElementById("nota_Inserir").value.trim()
    var tipoSelecionado = document.querySelector('input[name="tipo_nota"]:checked')

    if (!notaTexto) {
        alert("Digite uma nota antes de inserir!")
        return
    }

    if (!tipoSelecionado) {
        alert("Selecione uma opção: Urgente ou Não Urgente.")
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
    } else if (colorCont === 1) {
        novo.style.color = "green"
    } else {
        novo.style.color = "purple"
    }

    colorCont = (colorCont + 1) % 3

    // adiciona na div correta
    var destino = tipo === "urgente" ? document.getElementById("urgentes") : document.getElementById("nao_urgentes")
    destino.appendChild(novo)

    // limpa o campo de texto
    document.getElementById("nota_Inserir").value = ""
}

// excluir uma nota não urgente (última adicionada)
function excluir_nota_NU() {
    var notas = document.querySelectorAll("#nao_urgentes p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas não urgentes para remover!")
    }
}

// excluir uma nota urgente (última adicionada)
function excluir_nota_U() {
    var notas = document.querySelectorAll("#urgentes p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas urgentes para remover!")
    }
}

// excluir todas as notas não urgentes
function excluir_todas_NU() {
    var notas = document.querySelectorAll("#nao_urgentes p")
    if (notas.length > 0) {
        notas.forEach(nota => nota.remove())
    } else {
        alert("Não há notas não urgentes para remover!")
    }
}

// excluir todas as notas urgentes
function excluir_todas_U() {
    var notas = document.querySelectorAll("#urgentes p")
    if (notas.length > 0) {
        notas.forEach(nota => nota.remove())
    } else {
        alert("Não há notas urgentes para remover!")
    }
}

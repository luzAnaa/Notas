document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('notaTexto');
    var btnAdicionar = document.getElementById('btnAdicionar');
    var btnApagarTudo = document.getElementById('btnApagarTudo');
    var listaNao = document.getElementById('listaNao');
    var listaUrgente = document.getElementById('listaUrgente');

    var cores = ['cor-blue','cor-green','cor-purple'];
    var indiceCor = 0;

    btnAdicionar.addEventListener('click', function() {
        var texto = input.value.trim();
        if (!texto) return;
        var radio = document.querySelector('input[name="urgencia"]:checked');
        var isUrgente = radio && radio.value === 'sim';
        adicionarNota(texto, isUrgente);
        input.value = '';
       
        document.querySelector('input[name="urgencia"][value="nao"]').checked = true;
    });

    function adicionarNota(texto, isUrgente) {
        var li = document.createElement('li');
        li.className = 'nota';

        var span = document.createElement('span');
        span.textContent = texto;

       
        if (!isUrgente) {
            span.classList.add(cores[indiceCor]);
        }

        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.className = 'remover';
        btnRemover.addEventListener('click', function() {
            var parent = li.parentNode;
            if (parent) parent.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(btnRemover);

        if (isUrgente) {
            listaUrgente.appendChild(li);
        } else {
            listaNao.appendChild(li);
        }

        indiceCor = (indiceCor + 1) % cores.length;
    }

    btnApagarTudo.addEventListener('click', function() {
        listaNao.innerHTML = '';
        listaUrgente.innerHTML = '';
        indiceCor = 0;
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') btnAdicionar.click();
    });
});
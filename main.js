const form = document.getElementById('inputs-novo-contato');
const nome = [];
const numero = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    const contato = {
        nome: inputNomeContato.value,
        numero: inputNumeroContato.value,
    };

    nome.push(contato);
    numero.push(inputNumeroContato.value);

    // Ordenar a matriz de contatos pelo nome
    nome.sort((a, b) => a.nome.localeCompare(b.nome));

    // Construir as linhas da tabela a partir da matriz de contatos ordenada
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = '';

    nome.forEach((contato) => {
        let linha = '<tr>';
        linha += `<td><img src="images/pessoas.png" id="user-img" alt="silhueta contato"></td>`;
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.numero}</td>`;
        linha += '</tr>';
        corpoTabela.innerHTML += linha;
    });
});
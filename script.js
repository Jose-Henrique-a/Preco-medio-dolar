// const DOLAR_RATE = 5; // Cotação fixa do dólar para exemplo
let rowCount = 1;

function calculateDollar(row) {
    let reais = parseFloat(row.querySelector('.reais-input').value);
    let cotacao = parseFloat(row.querySelector('.dolar-input').value);

    // let dolar = reais / DOLAR_RATE;
    let dolar = reais / cotacao;
    row.querySelector('.dolar-value').textContent = dolar.toFixed(2);
    row.querySelector('.reais-value').textContent = reais.toFixed(2);
    updateTotals();
}

function addRow() {
    rowCount++;
    const inputsContainer = document.getElementById('inputs-container');
    const newRow = document.createElement('div');
    newRow.classList.add('input-row');
    newRow.innerHTML = `
                 <span class="remove-button" onclick="removeRow(this)">X</span>
                <input type="number" id="reais-input" class="reais-input" placeholder="Investimento em Reais" step="0.01"  oninput="calculateDollar(this.parentNode)">
                <input type="number" id="dolar-input" class="dolar-input" placeholder="Cotação do Dólar" step="0.01" oninput="calculateDollar(this.parentNode)" >
                <p>Reais R$ </p>
                <span class="reais-value">0,00</span>
                <p>|Dólares U$ </p>
                <span class="dolar-value">0,00</span>
    `;
    inputsContainer.appendChild(newRow);
    updateTotals();
}

function removeRow(button) {
    if (rowCount > 1) {
        button.parentNode.remove();
        rowCount--;
        updateTotals();
    }
}

function updateTotals() {
    let totalDolar = 0;
    let totalReais = 0;
    document.querySelectorAll('.input-row').forEach(row => {
        totalDolar += parseFloat(row.querySelector('.dolar-value').textContent);
        totalReais += parseFloat(row.querySelector('.reais-input').value);
    });
    document.getElementById('total-dolar').textContent = totalDolar.toFixed(2);
    document.getElementById('total-reais').textContent = totalReais.toFixed(2);
    document.getElementById('preco-medio').textContent = (totalReais / totalDolar).toFixed(2);
}

function converterDolarParaReais() {
    let valorDolar = parseFloat(document.getElementById('valorDolar').value);
    let realDolar = parseFloat(document.getElementById('realDolar').value);

    if (isNaN(valorDolar) || isNaN(realDolar)) {
        document.getElementById('resultadoConversao').innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    let totalReais = valorDolar * realDolar;

    document.getElementById('resultadoConversao').innerHTML =
        `Total em Reais: R$ ${totalReais.toFixed(2)}`;
}
// Inicializar com uma linha
// addRow();

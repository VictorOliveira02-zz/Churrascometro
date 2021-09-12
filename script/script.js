let InputAdulto = document.getElementById("input-data-adult");
let InputKids = document.getElementById("input-data-kids");
let InputDuracao = document.getElementById("input-data-time");
let Resultado = document.getElementById("list-result");

function Calcular() {

    let adultos = InputAdulto.value;
    let kids = InputKids.value;
    let duracao = InputDuracao.value;


    let qntCarne = CalcCarne(duracao) * adultos + (CalcCarne(duracao) / 2 * kids);
    let qntCerveja = CalcCerveja(duracao) * adultos;
    let qntRefri = CalcRefri(duracao) * adultos + (CalcRefri(duracao) / 2 * kids);


    (qntCarne / 1000 >= 1) ? Resultado.innerHTML = `<p><img src="assets/carne.svg">${qntCarne / 1000}Kg de Carne</p>` : Resultado.innerHTML = `<p><img src="assets/carne.svg">${qntCarne}g de Carne</p>`;
    Resultado.innerHTML += `<p><img src="assets/cerveja.svg">${Math.ceil(qntCerveja / 355)} Latas de Cerveja</p>`;
    (qntRefri / 1000 > 1) ? Resultado.innerHTML += `<p><img src="assets/refri.svg">${Math.ceil(qntRefri / 1000)} Latas de Refrigerante</p>` : Resultado.innerHTML += `<p><img src="assets/refri.svg">${Math.ceil((qntRefri / 1000) / 4)} Latas de Refrigerante</p>`;
}

// Regras de Calculo:
// - Crianca = 0,5 de Carne e Refri

// Carne = 400g/Pessoa, se +6Hrs, 600g/Pessoa
function CalcCarne(duracao) {
    if (duracao >= 6) {
        return 600;
    } else {
        return 400;
    }
}

// Cerveja = 1200ml/Pessoa, se + 6Hrs, 2000ml/Pessoa
function CalcCerveja(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

// Refri = 1000ml/Pessoa, se + 6Hrs, 1500ml/Pessoa
function CalcRefri(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

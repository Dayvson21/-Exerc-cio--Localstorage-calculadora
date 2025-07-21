
//const user = prompt("Coloque seu nome: ");
//console.log(user);

// const inputUsuario = document.getElementById("input").value;
// const nomeExibido = document.getElementById("exibirNome");

// function cadastrar() {
//     const inputUsuario = document.getElementById("input").value;
//     const nomeExibido = document.getElementById("exibirNome");

//     if (inputUsuario === ""){
//         alert("Digite um nome válido!");
//     } else {
//         localStorage.setItem("Nome",inputUsuario);
//         const valor = localStorage.getItem("Nome");
//         nomeExibido.innerText = "Nome: " + valor;
//     }
// };
// const text = document.getElementById("h1");
// text.style.color = "white"

// console.log("---Menu---");
// console.log("1 - soma");
// console.log("2 - subtração");
// console.log("3 - multiplicação");
// console.log("4 - divisão");

while(true) {
    console.log("---Menu---");
    console.log("1 - soma");
    console.log("2 - subtração");
    console.log("3 - multiplicação");
    console.log("4 - divisão");
    console.log("5- Sair");

    let opcao = Number(prompt("escolha sua opção: "));

    if (opcao === 5) {
        console.log("Programa encerrado!");
        break;  // Sai do while
    }

    if (opcao < 1 || opcao > 5) {
        console.log("Opção inválida.");
        continue; // Volta para o início do loop
    }

    const numero1 = Number(prompt("Primeiro número: "));
    const numero2 = Number(prompt("Segundo número: "));

    switch(opcao) {
        case 1:
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
        case 2:
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
        case 3:
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
        case 4:
            if (numero2 === 0) {
                console.log("Erro: divisão por zero não é permitida.");
            } else {
                console.log(`Resultado: ${numero1 / numero2}`);
            }
            break;
    };
};
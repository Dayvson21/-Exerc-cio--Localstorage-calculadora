
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

/*while(true) {
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
            try {
                if (numero2 === 0) {
                    throw new Error("Erro: Não é possível dividir por zero.");
                }
                console.log(`Resultado: ${numero1 / numero2}`);
            } catch (erro) {
                console.log(erro.message);
            } finally {
                console.log("Operação de divisão concluída.");
            }
            break;

        default:
            console.log("Opção inválida.");
        // case 4:
        //     if (numero2 === 0) {
        //         console.log("Erro: divisão por zero não é permitida.");
        //     } else {
        //         console.log(`Resultado: ${numero1 / numero2}`);
        //     }
        //     break;
    };
};*/


/*function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Erro: Não é possível dividir por zero.");
        }
        console.log(`Resultado: ${a / b}`);
    } catch (erro) {
        console.log(erro.message);
    } finally {
        console.log("Operação concluída.");
    }
}

// Exemplo de uso:
const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));
dividir(numero1, numero2);*/

const user = {nome: prompt("Nome: "),idade: parseInt(prompt("Sua idade: "))};

let valido = true;
function validarDados(user) {
    try {
        if (typeof user.nome !== "string" ||  user.nome.length < 3) {
            throw new Error("Error: Nome com mínimo 3 caracteres.");
        }
        if (typeof user.idade !== "number" ||  user.idade <= 18) {
            throw new Error("A idade deve ser maior que 18.")
        }
         console.log("Usuário cadastrado.");
    } catch (erro) {
        valido = false
        console.log(erro.message);

    } finally {
        console.log( valido ? "Os dados do usuário são válidos." : "Dados inválidos");
    }
};
validarDados(user);

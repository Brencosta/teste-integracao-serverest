//Crie uma função em TypeScript que receba a quantidade de horas que um carro ficou estacionado e calcule o valor a pagar:
//Até 1 hora → R$ 5. OK
//De 2 a 3 horas → R$ 10 OK
//De 4 a 6 horas → R$ 15
//Mais de 6 horas → R$ 25
//Se a quantidade de horas for 0 ou negativa → "Tempo inválido"  OK
function estacionamento(horas) {
    if (horas <= 0) {
        console.log("Tempo inválido");
        return "Tempo inválido";
    }
    else if (horas <= 1) {
        console.log("R$ 5");
        return "R$ 5";
    }
    else if (horas <= 3) {
        console.log("R$ 10");
        return "R$ 10";
    }
    else if (horas <= 6) {
        console.log("R$ 15");
        return "R$ 15";
    }
    else {
        console.log("R$ 25");
        return "R$ 25";
    }
}
estacionamento(9);
estacionamento(3);
export {};
//# sourceMappingURL=aula03.js.map
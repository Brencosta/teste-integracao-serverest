import {describe, it, expect} from "vitest";
import {soma, subtracao} from "../src/calculadora.js";

describe("calculadora", () =>{ // descricao do teste 
    it("deve somar dois numeros", () =>{
        const resultado = soma(5,7);
        // expect(resultado).toBe(10)
        expect(resultado).toBe(12);

    }) // isso deve somar 2 numeros
})
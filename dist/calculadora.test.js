import { it, expect } from "vitest";
import { soma } from "./calculadora.js";
it("deve somar dois números corretamente", () => {
    const resultado = soma(2, 3);
    expect(resultado).toBe(6);
});
//# sourceMappingURL=calculadora.test.js.map
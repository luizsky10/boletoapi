const Validator = require("../Utils/validator");

test("Boleto válido", () => {
  expect(
    Validator.validator("00190500954014481606906809350314337370000000100")
  ).toBe(1);
});

test("Boleto Inválido", () => {
  expect(
    Validator.validator("0019050095401448160690680935031433737000000010")
  ).toBe("Linha digitável invalida - Quantidade de números invalida");
});

test("Boleto Inválido - Digito incorreto", () => {
  expect(
    Validator.validator("80190500954014481606906809350314337370000000100")
  ).toBe("Linha digitável invalida - Digitos verificadores incorretos");
});

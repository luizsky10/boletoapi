function arredondaDezena(num) {
  return Math.ceil(num / 10) * 10;
}

const validatorTitulo = (codBar) => {
  let campo1 = [];
  let campo2 = [];
  let campo3 = [];

  let campo1Result = 0;
  let campo2Result = 0;
  let campo3Result = 0;

  let validFlag1 = 0;
  let validFlag2 = 0;
  let validFlag3 = 0;

  for (var i = 0; i < 10; i++) {
    campo1.push(codBar[i]);
  }
  for (var i = 10; i < 21; i++) {
    campo2.push(codBar[i]);
  }
  for (var i = 21; i < 32; i++) {
    campo3.push(codBar[i]);
  }

  campo1.forEach((item, index) => {
    if (index % 2 == 0 && index !== 9) {
      if (item * 2 > 9) {
        let hold = item * 2;

        campo1Result += hold
          .toString()
          .split("")
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);
      } else campo1Result = campo1Result + item * 2;
    }
    if (index % 2 != 0 && index !== 9) {
      campo1Result = campo1Result + item * 1;
    }

    const resto = campo1Result % 10;
    const result = 10 - resto;

    validFlag1 = result == +codBar[9];
  });

  const resto1 = campo1Result % 10;
  const result1 = 10 - resto1;
  validFlag1 = result1 == +codBar[9];

  campo2.forEach((item, index) => {
    if (index % 2 == 0 && index !== 10) {
      campo2Result += item * 1;
    }
    if (index % 2 != 0 && index !== 10) {
      if (item * 2 > 9) {
        let hold = item * 2;

        campo2Result += hold
          .toString()
          .split("")
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);
      } else campo2Result = campo2Result + item * 2;
    }
  });

  const resto2 = campo2Result % 10;
  const result2 = 10 - resto2;
  validFlag2 = result2 == +codBar[20];

  campo3.forEach((item, index) => {
    if (index % 2 == 0 && index !== 10) {
      campo3Result += item * 1;
    }
    if (index % 2 != 0 && index !== 10) {
      if (item * 2 > 9) {
        let hold = item * 2;

        campo3Result += hold
          .toString()
          .split("")
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);
      } else campo3Result = campo3Result + item * 2;
    }
  });
  const resto3 = campo3Result % 10;
  const result3 = 10 - resto3;
  validFlag3 = result3 == +codBar[31];

  return validFlag1 && validFlag2 && validFlag3;
};

const validatorTitulo2 = (codBar) => {
  let pesos = [
    2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2,
    3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4,
  ];

  const revertedCodBar = codBar.split("").reverse();

  let soma = 0;
  revertedCodBar.forEach((item, index) => {
    pesos.forEach((pesoItem, pesoIndex) => {
      if (index !== 4) {
        if (index == pesoIndex) {
          soma += +item * pesoItem;
          //console.log("item: ", +item);
          //console.log("pesoItem: ", pesoItem);
          //console.log("index: ", index);
          //console.log("pesoIndex: ", pesoIndex);

          // console.log("soma: ", soma, "\n");
        }
      }
    });
  });

  const resto = soma % 11;

  let result = 11 - resto;

  console.log("length", codBar.length);
  console.log("resto", resto);
  console.log("+codBar[4]", +revertedCodBar[4]);

  if (result == 0 || result == 10 || result == 11) {
    result = 1;
  }

  if (+codBar[4] == 0) {
    return 0;
  }
  if (result != +codBar[4]) {
    return 0;
  }

  return 1;
};

exports.validator = function validator(codBar) {
  if (!codBar) return "Linha digitável invalida";

  if (codBar.length !== 47)
    return "Linha digitável invalida - Quantidade de números invalida";

  if (!validatorTitulo(codBar)) {
    return "Linha digitável invalida - Digitos verificadores incorretos";
  }

  // if (!validatorTitulo2(codBar)) {
  //  return "Linha digitável invalida - Digito verificador incorreto";
  //}

  //console.log("validatorTitulo2", validatorTitulo2(codBar));
  return 1;
};

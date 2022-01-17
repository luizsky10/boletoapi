const Boleto = require("../models/boleto");

const Validator = require("../Utils/validator");

exports.getBoletos = async (req, res) => {
  //const barCode = req.body.barCode;

  const barCode = req.params.barcode;

  const formattedBarCode = barCode.replace(/[^\d]/g, "");

  const boleto = await Boleto.findOne({ barCode: formattedBarCode });

  let validatorBarCode = Validator.validator(formattedBarCode);

  if (validatorBarCode === 1) {
    if (boleto) {
      const barCode = boleto.barCode;
      const amount = boleto.amount;
      const expirationDate = boleto.expirationDate;
      res.status(200).json({
        message: "Boleto encontrado com sucesso!",
        barCode: barCode,
        amount: amount,
        expirationDate: expirationDate,
      });
    } else {
      res.status(400).json({
        message: "Boleto não encontrado",
      });
    }
  } else {
    res.status(400).json({
      message: validatorBarCode,
    });
  }
};

exports.createBoleto = async (req, res, next) => {
  const barCode = req.body.barCode;
  const amount = req.body.amount;
  const expirationDate = req.body.expirationDate;

  const boleto = new Boleto({
    barCode: barCode,
    amount: amount,
    expirationDate: expirationDate,
  });
  try {
    await boleto.save();

    res.status(201).json({
      message: "Boleto created successfully!",
      boleto: boleto,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

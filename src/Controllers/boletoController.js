const Boleto = require("../models/boleto");

exports.getBoletos = async (req, res) => {
  const barCode = req.body.barCode;

  const boleto = await Boleto.findOne({ barCode: barCode });

  console.log("boleto", boleto);
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

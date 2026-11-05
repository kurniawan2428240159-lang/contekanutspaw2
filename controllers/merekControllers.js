const Merek = require('../models/merekModels');

exports.create = async (req, res) => {
  try {
    const merek = await Merek.create(req.body);
    res.status(201).json(merek);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Merek.find());
};
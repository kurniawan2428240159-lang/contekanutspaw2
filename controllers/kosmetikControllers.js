const KosmetikModel = require('../models/kosmetikModels');
const { errorHttp } = require('../middlewares/errorHandler');

exports.update = async (req, res) => {
  const data = await KosmetikModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after', runValidators: true }
  );
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await KosmetikModel.findByIdAndDelete(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.status(204).send();
};

exports.create = async (req, res) => {
  try {
    const kosmetik = await KosmetikModel.create(req.body);
    res.status(201).json(kosmetik);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await KosmetikModel.find();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await KosmetikModel.findById(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};
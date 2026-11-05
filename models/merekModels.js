const mongoose = require('mongoose');

const merekSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama merek wajib diisi'], trim: true },
  negaraAsal: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Merek', merekSchema);
const mongoose = require('mongoose');

const kosmetikSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  spesifikasi: {
    tipeKulit: String,
    expDate: String,
  },
  merk: { type: String, required: [true, 'merk wajib diisi'], trim: true },
  harga: { type: Number, required: [true, 'harga wajib diisi'], min: [0, 'harga tidak valid'] },
  stok: { type: Number, required: [true, 'stok wajib diisi'], min: [0, 'stok tidak valid'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Kosmetik', kosmetikSchema);
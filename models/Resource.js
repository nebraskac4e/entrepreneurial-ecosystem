const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  latitude: Number,
  longitude: Number,
  grouping: String,
  description: String,
  displayOnMap: { type: Boolean, default: true },
  displayOnList: { type: Boolean, default: true },
}, { timestamps: true });

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;

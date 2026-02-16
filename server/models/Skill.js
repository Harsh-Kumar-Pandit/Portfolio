const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  level: { type: Number, min: 0, max: 100, default: 80 },
  category: {
    type: String,
    enum: ['languages', 'frontend', 'backend', 'database', 'devops', 'tools', 'other', 'core'],
    default: 'other',
  },
  icon: { type: String, default: '' },
  color: { type: String, default: '#6366f1' },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);

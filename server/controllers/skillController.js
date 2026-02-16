const Skill = require('../models/Skill');

exports.getSkills = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const skills = await Skill.find(filter).sort({ order: 1, level: -1 });
    res.json({ success: true, data: skills });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ success: false, message: 'Skill not found' });
    res.json({ success: true, data: skill });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

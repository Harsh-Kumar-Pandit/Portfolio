const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Simple admin auth (hardcoded for demo — use DB in production)
const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
  // bcrypt hash of 'admin123' — change in production!
  password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== ADMIN.email) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, ADMIN.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.verify = (req, res) => {
  res.json({ success: true, user: req.user });
};

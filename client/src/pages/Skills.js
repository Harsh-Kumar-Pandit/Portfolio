import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import Loader from '../components/Loader';
import { useSkills } from '../hooks/usePortfolio';

const CATEGORIES = ['all', 'frontend', 'backend', 'database', 'devops', 'tools'];

// LinkedIn Skills Data - Fallback if API is not available
const LINKEDIN_SKILLS = [
  // Languages
  { _id: '1', name: 'JavaScript ES6', level: 95, category: 'frontend', color: '#F7DF1E', order: 1 },
  { _id: '2', name: 'HTML5 & CSS3', level: 92, category: 'frontend', color: '#E34C26', order: 2 },
  { _id: '3', name: 'Java 8', level: 75, category: 'backend', color: '#007396', order: 3 },
  { _id: '4', name: 'Python 3', level: 75, category: 'frontend', color: '#3776AB', order: 4 },
  { _id: '5', name: 'SQL', level: 85, category: 'database', color: '#336791', order: 5 },
  
  // Frontend
  { _id: '6', name: 'React', level: 90, category: 'frontend', color: '#61DAFB', order: 6 },
  { _id: '7', name: 'Tailwind CSS', level: 88, category: 'frontend', color: '#06B6D4', order: 7 },
  { _id: '8', name: 'Redux', level: 80, category: 'frontend', color: '#764ABC', order: 8 },
  { _id: '9', name: 'Context API', level: 85, category: 'frontend', color: '#61DAFB', order: 9 },
  { _id: '10', name: 'React Router', level: 85, category: 'frontend', color: '#CA4245', order: 10 },
  { _id: '11', name: 'Responsive Design', level: 88, category: 'frontend', color: '#06B6D4', order: 11 },
  
  // Backend
  { _id: '12', name: 'Node.js', level: 92, category: 'backend', color: '#68A063', order: 12 },
  { _id: '13', name: 'Express.js', level: 92, category: 'backend', color: '#000000', order: 13 },
  { _id: '14', name: 'REST API Design', level: 92, category: 'backend', color: '#FF5733', order: 14 },
  { _id: '15', name: 'JWT Authentication', level: 90, category: 'backend', color: '#000000', order: 15 },
  { _id: '16', name: 'Middleware', level: 85, category: 'backend', color: '#339933', order: 16 },
  { _id: '17', name: 'Stripe Integration', level: 85, category: 'backend', color: '#635BFF', order: 17 },
  { _id: '18', name: 'Razorpay Integration', level: 85, category: 'backend', color: '#01B5E3', order: 18 },
  { _id: '19', name: 'API Authentication', level: 90, category: 'backend', color: '#000000', order: 19 },
  { _id: '20', name: 'Zod Data Validation', level: 85, category: 'backend', color: '#3E67B1', order: 20 },
  
  // Database
  { _id: '21', name: 'MongoDB', level: 88, category: 'database', color: '#13AA52', order: 21 },
  { _id: '22', name: 'Mongoose', level: 88, category: 'database', color: '#880000', order: 22 },
  { _id: '23', name: 'MySQL', level: 80, category: 'database', color: '#005C84', order: 23 },
  { _id: '24', name: 'Database Design', level: 82, category: 'database', color: '#336791', order: 24 },
  { _id: '25', name: 'MongoDB Indexing', level: 85, category: 'database', color: '#13AA52', order: 25 },
  
  // DevOps & Cloud
  { _id: '26', name: 'Git & GitHub', level: 90, category: 'devops', color: '#181717', order: 26 },
  { _id: '27', name: 'Cloudinary CDN', level: 85, category: 'devops', color: '#3448C5', order: 27 },
  { _id: '28', name: 'Vercel Deployment', level: 82, category: 'devops', color: '#000000', order: 28 },
  
  // Tools & Others
  { _id: '29', name: 'Postman', level: 88, category: 'tools', color: '#FF6C37', order: 29 },
  { _id: '30', name: 'NPM & Package Management', level: 90, category: 'tools', color: '#CB3837', order: 30 },
  { _id: '31', name: 'Chrome DevTools', level: 88, category: 'tools', color: '#4285F4', order: 31 },
  { _id: '32', name: 'Bash Scripting', level: 80, category: 'tools', color: '#4EAA25', order: 32 },
  { _id: '33', name: 'VS Code', level: 92, category: 'tools', color: '#007ACC', order: 33 },
  
  // Core Engineering
  { _id: '34', name: 'Data Structures', level: 88, category: 'backend', color: '#FF6B35', order: 34 },
  { _id: '35', name: 'Algorithms', level: 88, category: 'backend', color: '#FF6B35', order: 35 },
  { _id: '36', name: 'Operating Systems', level: 85, category: 'backend', color: '#316192', order: 36 },
  { _id: '37', name: 'System Design', level: 85, category: 'backend', color: '#FF5733', order: 37 },
  { _id: '38', name: 'Database Management', level: 85, category: 'database', color: '#336791', order: 38 },
  { _id: '39', name: 'Performance Optimization', level: 85, category: 'backend', color: '#00C853', order: 39 },
];

const Skills = () => {
  const { skills: apiSkills, loading } = useSkills();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Use API skills if available, otherwise use LinkedIn skills
  const skills = apiSkills && apiSkills.length > 0 ? apiSkills : LINKEDIN_SKILLS;

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const grouped = filtered.reduce((acc, skill) => {
    const cat = skill.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className="page skills-page">
      <div className="page-header">
        <span className="section-tag">Tech Stack</span>
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">
          Technologies, tools, and frameworks I work with
        </p>
      </div>

      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading && skills.length === 0 ? (
        <Loader fullPage />
      ) : (
        <div className="skills-container">
          {Object.entries(grouped).map(([category, categorySkills]) => (
            <div key={category} className="skill-group">
              <h2 className="skill-group-title">
                <span className="skill-group-icon">
                  {category === 'frontend' ? '🎨' :
                   category === 'backend' ? '⚙️' :
                   category === 'database' ? '🗄️' :
                   category === 'devops' ? '🚀' :
                   category === 'tools' ? '🔧' : '✨'}
                </span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <div className="skill-bars">
                {categorySkills.sort((a, b) => b.level - a.level).map((skill, i) => (
                  <SkillBar key={skill._id} skill={skill} delay={i * 100} />
                ))}
              </div>
            </div>
          ))}
          {Object.keys(grouped).length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">🔧</div>
              <h3>No skills found</h3>
              <p>Skills will appear here once added.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;

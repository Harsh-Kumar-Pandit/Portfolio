const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('../config/db');
const Skill = require('../models/Skill');
const Project = require('../models/Project');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const skillsData = require('./skills.json');
const projectsData = require('./projects.json');

const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log('✅ Database connected');

    // Clear existing data
    await Skill.deleteMany({});
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Seed skills
    const createdSkills = await Skill.insertMany(skillsData);
    console.log(`✅ ${createdSkills.length} skills seeded`);

    // Seed projects
    const createdProjects = await Project.insertMany(projectsData);
    console.log(`✅ ${createdProjects.length} projects seeded`);

    console.log('🌱 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

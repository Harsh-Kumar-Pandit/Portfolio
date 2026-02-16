# 🚀 MERN Stack Portfolio

A full-stack developer portfolio built with **MongoDB, Express.js, React, and Node.js** — featuring a stunning dark UI, REST API, JWT authentication, and a clean modular architecture.

---

## 📁 Folder Structure

```
portfolio/
├── 📦 package.json              # Root scripts (run both client & server)
├── 📄 .env.example              # Environment variables template
├── .gitignore
│
├── 🖥️  server/                  # Node.js + Express Backend
│   ├── index.js                 # Server entry point
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── models/
│   │   ├── Project.js           # Project schema
│   │   ├── Skill.js             # Skill schema
│   │   └── Contact.js           # Contact message schema
│   ├── controllers/
│   │   ├── projectController.js # Project CRUD logic
│   │   ├── skillController.js   # Skill CRUD logic
│   │   ├── contactController.js # Contact form + email
│   │   └── authController.js    # JWT auth logic
│   ├── routes/
│   │   ├── projects.js          # /api/projects
│   │   ├── skills.js            # /api/skills
│   │   ├── contact.js           # /api/contact
│   │   └── auth.js              # /api/auth
│   └── middleware/
│       └── auth.js              # JWT protect middleware
│
└── 🎨 client/                   # React Frontend
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js               # Root router + layout
        ├── index.js             # React entry point
        ├── context/
        │   └── AuthContext.js   # Global auth state
        ├── hooks/
        │   └── usePortfolio.js  # Data fetching hooks
        ├── utils/
        │   └── api.js           # Axios API layer
        ├── components/
        │   ├── Navbar.js        # Sticky nav with scroll effect
        │   ├── Footer.js        # Footer with links
        │   ├── ProjectCard.js   # Project card with hover overlay
        │   ├── SkillBar.js      # Animated skill progress bar
        │   └── Loader.js        # Loading spinner
        ├── pages/
        │   ├── Home.js          # Hero + featured projects + CTA
        │   ├── Projects.js      # All projects with category filter
        │   ├── Skills.js        # Skills grouped by category
        │   ├── About.js         # Bio + timeline
        │   ├── Contact.js       # Contact form
        │   └── NotFound.js      # 404 page
        └── styles/
            └── globals.css      # Full design system + dark theme
```

---

## ✨ Features

- **Dark Editorial UI** — dark background, neon green accents, monospace typography
- **Typewriter hero animation** — cycling role text
- **Animated skill bars** — triggered by scroll intersection
- **Project filtering** — by category (fullstack, frontend, backend, etc.)
- **Contact form** — saves to MongoDB + optional email notifications
- **JWT Admin Auth** — protected routes for adding/editing data
- **Fully responsive** — mobile-first design
- **REST API** — clean MVC architecture

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6 |
| Styling | Pure CSS (CSS variables, animations) |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| Email | Nodemailer |
| Dev Tools | Nodemon, Concurrently |

---

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd portfolio
npm run install-all
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
```

### 3. Run Development

```bash
npm run dev
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api

---

## 🔌 API Endpoints

### Projects
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects?featured=true` | Get featured projects |
| GET | `/api/projects?category=frontend` | Filter by category |
| GET | `/api/projects/:id` | Get one project |
| POST | `/api/projects` | Create (auth required) |
| PUT | `/api/projects/:id` | Update (auth required) |
| DELETE | `/api/projects/:id` | Delete (auth required) |

### Skills
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/skills` | Get all skills |
| POST | `/api/skills` | Create (auth required) |
| PUT | `/api/skills/:id` | Update (auth required) |
| DELETE | `/api/skills/:id` | Delete (auth required) |

### Contact
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/contact` | Send message |
| GET | `/api/contact` | Get all messages (auth required) |

### Auth
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/login` | Admin login → JWT |
| GET | `/api/auth/verify` | Verify token |

---

## 🎨 Customization

### Personal Info
Edit these files to make it yours:
- `client/src/pages/Home.js` — name, stats, roles
- `client/src/pages/About.js` — bio, timeline, values
- `client/src/components/Footer.js` — social links, email
- `client/src/components/Navbar.js` — nav links

### Colors / Theme
All design tokens are in `client/src/styles/globals.css`:
```css
:root {
  --accent: #00ff87;       /* main green accent */
  --accent2: #60efff;      /* secondary cyan */
  --bg: #080c14;           /* dark background */
  --bg-card: #0d1321;      /* card background */
}
```

### Adding Projects via API
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My App",
    "description": "A cool app",
    "tech": ["React", "Node.js"],
    "category": "fullstack",
    "featured": true,
    "liveUrl": "https://myapp.com",
    "githubUrl": "https://github.com/me/myapp"
  }'
```

---

## 📦 Build for Production

```bash
cd client && npm run build
```

The static files will be in `client/build/`. Serve them with Express or deploy to Vercel/Netlify.

---

## 🔐 Admin Login

Default credentials (change in production!):
- Email: `admin@portfolio.com`
- Password: `admin123`

To change, update the hash in `server/controllers/authController.js`.

---

## 📄 License

MIT — free to use and customize for your own portfolio.

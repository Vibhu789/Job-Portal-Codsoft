# Job Board - CodSoft Internship Project

A full-stack Job Board web application built as part of my **CodSoft Level 2 Internship**, allowing users to explore job listings and employers to post openings.


# Features
 A Header with a Name and Logo
 A visual section with Button Like Home, Browse, JobPages, Blog, contact, Logging, and JobPost
 A downloadable Resume
 We can filter Job by Location and Job Profile
 This Section We can verified in 3 steps 
 This section we can check multiple Location and Profile.
 A smart Footer

# 👤 For Job Seekers:
- Browse available job listings
- View detailed job descriptions
- Contact employers directly

# 🧑‍💼 For Employers:
- Post new job openings
- Manage job listings

## 🛠️ Tech Stack

**Frontend:**
- React.js
- HTML5, CSS3
- JavaScript

**Backend:**
- Node.js
- Express.js
- MongoDB

**Additional Info**
Proud to unveil my JOB-BOARD Portal WebPage, created as part of my CodSoft Internship journey! Built using MongoDB, Express.js, React.js, Node.js, this project was more than just code it was a deep dive into real-world frontend development and backend development.

My React frontend should now open in your browser on: http://localhost:3000
Server running on port: http://localhost:5000
And we learn more about dependencies: express mongoose cors bcryptjs jsonwebtoken dotenv nodemon etc
Use Tools – MongoDB , Hoppscotch, Git and Github

## 📁 Project Structure

job_board_codsoft/
│
├── client/                        # Frontend (React)
│   ├── node_modules/             # Frontend dependencies
│   ├── public/
│   │   ├── index.html            # HTML entry point
│   │   └── tittle-logo.jpeg      # Logo image
│   ├── src/
│   │   ├── pages/                # React pages (Home, Job List, etc.)
│   │   ├── App.js                # Root React component
│   │   └── index.js              # ReactDOM renderer
│   ├── package.json              # Frontend dependencies/scripts
│   └── package-lock.json
│
├── server/                        # Backend (Node + Express)
│   ├── node_modules/             # Backend dependencies
│   ├── models/                   # Mongoose models
│   │   ├── Job.js
│   │   └── User.js
│   ├── routes/                   # API route handlers
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   ├── .env                      # Environment config (not pushed to GitHub)
│   ├── server.js                 # Main server file
│   ├── package.json              # Backend dependencies/scripts
│   └── package-lock.json
│
├── .gitignore                    # Git ignored files
└── README.md                     # Project documentation


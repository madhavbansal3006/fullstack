# 📚 Student Notes Sharing

A simple web application that allows students to **share, upload, search, and download study notes**.

## 🚀 Features

* Student registration and login
* Upload notes with subject information
* Search notes by subject
* Download shared notes
* Simple and responsive frontend
* REST API backend

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js
* Multer
* bcryptjs
* CORS

**Database**

* JSON-based storage

## 📁 Project Structure

```text
student-notes-sharing/
├── backend/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── database/
│   └── db.json
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── notes.html
│   ├── upload.html
│   ├── script.js
│   └── style.css
└── README.md
```

## ▶️ Run Locally

### 1. Start the backend

```bash
cd backend
npm install
npm start
```

Backend runs at:

```text
http://localhost:5000
```

### 2. Open the frontend

Open `frontend/index.html` in your browser, or use **VS Code Live Server**.

## 🎯 Purpose

This project demonstrates a basic **full-stack student notes-sharing platform** using a JavaScript frontend and Node.js/Express backend.

# 🚀 Node.js Starter Template

A minimal and well-structured Node.js project template to speed up development.

## 📁 Folder Structure

```
Node.js-Starter-Template/
├── public/                 # Static assets
├── README.md               # Project documentation
└── src/                    # Main application source code
    ├── api/                # API-related files
    │   ├── controllers/    # Controllers (handling requests)
    │   └── routes/         # Route definitions
    ├── app.js              # Main app entry point
    ├── config/             # Configuration files
    │   ├── index.js        # Environment variables and configurations
    │   └── init.js         # Middleware and error handling setup
    ├── middleware/         # Middleware functions
    ├── models/             # Database models
    ├── package.json        # Project metadata & dependencies
    ├── package-lock.json   # Lockfile for dependencies
    ├── server.js           # Server setup
    ├── services/           # Business logic services
    ├── tests/              # Unit and integration tests
    └── utils/              # Utility functions
        ├── asyncErrorHandler.js # Async error handling utility
        └── CustomError.js       # Custom error handling class
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/OsamaRab3/Node.js-Starter-Template.git
   cd Node.js-Starter-Template
   ```

2. **Install dependencies**
   ```bash
   cd src
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

## ⚡ Alternative Setup with `degit`

If you want to create a new project from this template without cloning the Git history, use `degit`:

```bash
npx degit OsamaRab3/Node.js-Starter-Template my-new-project
cd my-new-project ; cd src
npm install
```

## 📌 Features

✅ Predefined project structure  
✅ Organized folders for maintainability  
✅ Ready for Express.js backend development  
✅ Simple and easy-to-use starter template  
✅ Built-in error handling and middleware support  

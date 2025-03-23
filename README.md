
# 🚀 Node.js + TypeScript  Template

A minimal and well-structured **Node.js + TypeScript** project template to speed up development.

## 📁 Folder Structure

```
Node.js-Starter-Template/
|
├── README.md               # Project documentation
└── src/                    # Main application source code
    ├── api/                # API-related files
    │   ├── controllers/    # Controllers (handling requests)
    │   └── routes/         # Route definitions
    ├── app.ts              # Main app entry point (converted to TypeScript)
    ├── config/             # Configuration files
    │   ├── index.ts        # Environment variables and configurations
    │   └── init.ts         # Middleware and error handling setup
    ├── middleware/         # Middleware functions
    ├── models/             # Database models
    ├── package.json        # Project metadata & dependencies
    ├── package-lock.json   # Lockfile for dependencies
    ├── tsconfig.json       # TypeScript configuration file
    ├── server.ts           # Server setup
    ├── services/           # Business logic services
    ├── tests/              # Unit and integration tests
    └── utils/              # Utility functions
        ├── asyncErrorHandler.ts # Async error handling utility
        └── CustomError.ts       # Custom error handling class
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

3. **Compile TypeScript**
   ```bash
   tsc 
   ```

4. **Run the application**
   ```bash
   npm start
   ```

## ⚡ Alternative Setup with `degit`

If you want to create a new project from this template without cloning the Git history, use `degit`:

- **For JavaScript version**:
  ```bash
  npx degit OsamaRab3/Node.js-Starter-Template#master my-new-project
  cd my-new-project/src
  npm install
  ```

- **For TypeScript version**:
  ```bash
  npx degit OsamaRab3/Node.js-Starter-Template#ts my-new-project
  cd my-new-project/src
  npm install
  npx ts-node server.ts
  ```

## 📌 Features

✅ Predefined project structure  
✅ Organized folders for maintainability  
✅ Ready for **Express.js + TypeScript** backend development  
✅ Simple and easy-to-use starter template  
✅ Built-in error handling and middleware support  
✅ **TypeScript support for better maintainability**  


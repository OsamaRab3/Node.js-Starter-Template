
// // import mongoose from "mongoose";
// import config from "../config/index";
// import CustomError from "../utils/CustomError";


// const connectDB = async () => {
//   try {

//     const conn = await mongoose.connect(config.MONGODB_URI);

//     // console.log(`MongoDB Connected: ${conn.connection.host}`);
//     return conn;
//   } catch (error) {
//     console.error('Database connection error:', error);
//     process.exit(1);
//   }
// };

// mongoose.connection.on('connected', () => {
//   console.log('Mongoose connected to DB');
// });

// mongoose.connection.on('error', (err) => {
//   console.log('Mongoose connection error:', err);
//   throw new CustomError(`Database connection error: ${err.message}`, 500);
// });

// // connectDB();
// export default connectDB;
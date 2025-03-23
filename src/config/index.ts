import * as dotenv from 'dotenv'
dotenv.config();


export default {
    PORT:process.env.PORT ||9000,
    MONGODB_URI:process.env.MONGODB_URI as string || "Your db",


}
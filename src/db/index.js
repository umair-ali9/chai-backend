import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        console.log("ENV:", process.env.MONGODB_URL)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MoongoDB connected !! DB HOST: ${connectionInstance.connection.host} `);

    } catch (error) {
        console.log("MoongoDB connection error ", error);
        process.exit(1)
    }
}


export default connectDB
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("🙆 Connect to DB");
const handleError = () => console.log(`🙅‍♀️ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

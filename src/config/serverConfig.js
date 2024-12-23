import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({
  path: path.join(__dirname, "../", "../", ".env"),
});

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;

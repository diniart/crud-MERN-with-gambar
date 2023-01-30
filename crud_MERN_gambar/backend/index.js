import express from "express";
import FileUpLoad from "express-fileupload";
import cors from "cors";
import router from "./routes/ProductRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpLoad());
app.use(express.static("public"));
app.use(router);

app.listen(5000,()=> console.log('server up and running..'))
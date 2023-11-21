import express from "express"
//import routes from "./routes/routes";
import { connect } from "./db/constants.js";

connect();
const app = express();

//app.use(routes.routes)

app.listen(3000, () => console.log("Running on port 3000."))
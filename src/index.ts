import express from "express";
import { setupDBConnection } from "./config/dbConnection";

const app = express();
import router from "./routes";

app.use(express.json());

app.use(router);

setupDBConnection();

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

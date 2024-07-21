import express from "express";
const app = express();
//middlewares
app.use(express.json());
//connections and listerners 
app.listen(5000, () => console.log("server is open"));
//# sourceMappingURL=index.js.map
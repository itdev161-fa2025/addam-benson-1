import express from "express";
import connectDatabase from "./config/db.js";
import { check, validationResult } from "express-validator";
import cors from "cors";

const app = express();

connectDatabase();

//middlewares
app.use(cors({ origin: "http:localhost:3001" }));

app.get("/", (req, res) => res.send("api ping sent"));

app.post(
  "/api/users",
  [
    check("name", "Please enter your name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a pasword with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      return res.send(res.body);
    }
  }
);

app.listen(3001, () => console.log("Express server running on port 3001"));

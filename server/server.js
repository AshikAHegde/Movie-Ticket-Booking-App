import express from "express";
import cors from "cors";
import "dotenv/config";
import connectdb from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./ingest/index.js";

const app = express();
const port = 3000;

await connectdb();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());
app.use("/api/inngest", serve({ client: inngest, functions }));

// API Routes
app.get("/", (req, res) => res.send("Server is Live!"));

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);

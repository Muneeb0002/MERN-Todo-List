import express from 'express';
import todoRoutes from './Routes/todoroutes.js'
import connectDb from './db/index.js';
import cors from "cors";

const app = express();

connectDb();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000", // React app
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use('/api',todoRoutes)

// app.listen(3001,()=>{
//     console.log("Server is Running on 3001")
// })


const PORT = process.env.DB_PORT || 3001;
console.log(PORT)

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

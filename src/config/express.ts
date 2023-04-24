import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import contactRouter from "../routes/contactRouters"
// Create an Express app instance dsdsf
const app = express();

// Use some common middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
 
// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello from Express TypeScript');
});

app.use("/api/contacts",contactRouter)

// Export the app
export default app;
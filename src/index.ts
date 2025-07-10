import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db';
import { QueryResult } from 'pg';
import inventoryRoutes from './routes/inventoryRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Inventory Backend is working!');
});


app.use('/api/inventory', inventoryRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  db.query('SELECT NOW()', (err: Error | null, res: QueryResult) => {
    if (err) {
      console.error('❌ Database connection failed:', err.message);
    } else {
      console.log('✅ Database connected at:', res.rows[0].now);
    }
  });
});

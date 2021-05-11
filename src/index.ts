import http from 'http';
import express from 'express';

import getAllUsers from './routes/getAllUsers';

const app = express();
app.use(express.json());
const server = new http.Server(app);
server.listen(3001);

app.get('/users/all', getAllUsers);
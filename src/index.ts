import dotenv from 'dotenv';
import http from 'http';
import express from 'express';

import getAllUsers from './routes/getAllUsers';

const configuration = dotenv.config();
const app = express();
app.use(express.json());

const server = new http.Server(app);
server.listen(configuration?.parsed?.PORT);

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get('/users/all', getAllUsers);

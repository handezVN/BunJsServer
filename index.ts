import { routes } from "./routes";
import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017';

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Kết nối MongoDB thành công');
});

db.on('error', (err) => {
  console.error('Lỗi kết nối MongoDB: ' + err);
});

const server = Bun.serve({
    port: 8080,
    development: true,
    async fetch(req) {
        const reqBody = await req.json();
        return await routes(req,reqBody)
    },
});
  
console.log(`Listening on http://localhost:${server.port} ...`);
import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Car Research App'));

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));

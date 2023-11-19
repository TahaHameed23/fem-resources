import express from 'express';
import fs from 'fs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port =process.env.PORT || 3004;

const resources = JSON.parse(fs.readFileSync('./resources.json'));



app.get('/', (req, res) => {
    res.end(JSON.stringify({ resources })); 
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});     
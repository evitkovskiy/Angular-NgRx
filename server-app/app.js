const express = require(`express`);
const config = require(`config`);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({extended: true}))

app.use('/static', express.static(`${__dirname}/static`));
app.use(`/login`, require(`./routes/login.routes`))
app.use(`/userdata`, require(`./routes/auth.routes`))

const PORT = config.get(`port`) || 5000;

async function start () {
    try{
        app.listen(5000, _ => console.log(`start on Port ${PORT}`));
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

start();
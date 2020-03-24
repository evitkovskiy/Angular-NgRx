const {Router} = require(`express`);
const router = Router();
const config = require(`config`);

const userData = {
    id: "123",
    email: "vitkovskiy@gmail.com"
}

router.get('/',  (req, res) => {
    res.send(userData)
})


module.exports = router;

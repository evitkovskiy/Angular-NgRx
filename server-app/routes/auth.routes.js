const {Router} = require(`express`);
const router = Router();
const config = require(`config`);

const userData = {
    id: "123",
    email: "vitkovskiy@gmail.com",
    name: "Yauhen Vitkouski"
}

router.get('/',  (req, res) => {
    res.send(userData)
})


module.exports = router;

const {Router} = require(`express`);
const router = Router();
const config = require(`config`);

const testUser = {
    email: '1234@mail.com',
    password: '1234567'
}

const token = config.token;

router.post('/',  (req, res) => {

    const activeUser = {
        id: "1",
        email: "jeny.vitkovskiy@gmail.com",
        name: "Yauhen Vitkouski"
    }
    const newUser = {
        email: req.body.email,
        password: req.body.password
    }
    if (JSON.stringify(testUser) === JSON.stringify(newUser)) {
        res.set(`authorization`, token);
        res.send({message: `Ок`, token, dataUser: activeUser});
    } else {
        res.status(401).json({message: `Что-то пошло не так`});
    } 
})


module.exports = router;

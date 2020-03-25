const {Router} = require(`express`);
const router = Router();
const fs = require('fs')

router.get('/',  (req, res) => {
    fs.readFile('static/db.json', 'utf8', function(err, contents) {
        if (err) {
            console.log(err)
        } else {
          const data = JSON.parse(contents);
          const filterData = data.filter(item => 
            item.title.toLowerCase().includes(req.query.searchString.toLowerCase()));
            res.send(filterData)
        };
    });
})

module.exports = router;
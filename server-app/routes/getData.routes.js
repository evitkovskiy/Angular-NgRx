const {Router} = require(`express`);
const router = Router();
const fs = require('fs')

router.get('/filter',  (req, res) => {
    if(!!req.headers.jwt) {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err)
            } else {
                const data = JSON.parse(contents);
                const filterData = data.filter(item => 
                    item.title.toLowerCase().includes(req.query.searchString.toLowerCase()));
                
                const page = parseInt(req.query.page);
                const limit = parseInt(req.query.size);
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                
                //const results = {};

                // if (endIndex < filterData.length) {
                //     results.next = {
                //         page: page + 1,
                //         limit: limit
                //     }
                // }
                
                // if (startIndex > 0) {
                //     results.previous = {
                //         page: page - 1,
                //         limit: limit
                //     }
                // }
                
                const results = {
                    data: filterData.slice(startIndex, endIndex),
                    limit: Math.ceil(filterData.length/limit)
                };
                    res.status(200);
                    res.send(results)
            };
        });
    } else {
        res.status(401).json({message: "Not authorized"})
    }
    
})

router.get('/product', (req, res) => {
    if(!!req.headers.jwt) {
        fs.readFile('static/db.json', 'utf8', function(err, contents) {
            if (err) {
                console.log(err)
            } else {
              const data = JSON.parse(contents);
              const product = data.find(item => item._id.$oid === req.query.idProduct);
                res.send(product)
            };
        });
    } else {
        res.status(401).json({message: "Not authorized"})
    }
})

module.exports = router;
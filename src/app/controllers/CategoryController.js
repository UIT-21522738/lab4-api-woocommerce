const woo = require('../../config/woocommerce');

exports.index = async (req, res) => {
    woo.getCategory().then((result) => {
        res.render('category', {categories: result.data});
    })
    
}

exports.create = async (req, res) => {
    data = {
        name: req.body.name,
    }
    woo.createCategory(data).then(function (result) {
        console.log(result)
        return res.redirect('/category');
    }) .catch(function (err) {
        return res.send(err)
    })
}
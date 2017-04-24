const User = require('./user-model')

exports.list = (req, res) => {
    User.find().exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.get = (req, res) => {
    const id = req.params.id

    User.findById(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.store = (req, res) => {
    const data = req.body

    let user = new User(data)
    user.save()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })

}

exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body

    User.findByIdAndUpdate(id, data).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.destroy = (req, res) => {
    const id = req.params.id

    User.findByIdAndRemove(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}
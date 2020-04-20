const {Schema, model} = require('mongoose')

const schema = new Schema({

})

const Model = model("modelName", schema)
module.exports = Model
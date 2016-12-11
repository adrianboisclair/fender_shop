var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: false},
    sku: {type: String, required: false},
    content: {type: String, required: false},
    cart: {type: Schema.Types.ObjectId, ref: 'Cart'}
});

module.exports = mongoose.model('Products', schema);
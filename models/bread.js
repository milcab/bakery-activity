// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: "http://placehold.it/500x500.png" },
    baker: {
        type: Schema.Types.ObjectID,
        ref: 'Baker'
    }
})
// helper methods 
breadSchema.methods.getBakedBy = function () {
    return `${this.name} was baked with love by ${this.baker}`
}

const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

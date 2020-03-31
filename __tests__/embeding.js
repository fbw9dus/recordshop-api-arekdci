const mongoose = require('mongoose');
const { Shema } = require('mongoose');

const address = new Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})
const street = mongoose.model("street,Schema");
async () => {
    const newShema = await street.create({

    })
}
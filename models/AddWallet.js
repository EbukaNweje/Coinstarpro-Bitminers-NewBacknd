const mongoose  = require("mongoose")

const AddWallet =  new mongoose.Schema({
    walletName: {
        type: String,
        required: true,
        uniquw: true
    },

    welletAddress: {
        type: String,
        required: true
    }
}, {timestamps: true});
module.exports = myWallet = mongoose.model('myWallet', AddWallet)

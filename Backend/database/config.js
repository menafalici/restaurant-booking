const { getMaxListeners } = require("process");

const config = {
    databaseURL: "mongodb+srv://reataurantgang:jullanmackanmenaf@cluster0.i1tnv.mongodb.net/reservations?authSource=admin&replicaSet=atlas-13oew4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    port: process.env.PORT || 5000,
    email: "restaurangbokning@gmail.com",
    password: "Frontend19",
}
 
module.exports = config;
const config = {
    databaseURL: "mongodb+srv://reataurantgang:jullanmackanmenaf@cluster0.i1tnv.mongodb.net/reservations?authSource=admin&replicaSet=atlas-13oew4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    port: process.env.PORT || 5000
 
}
 
module.exports = config;
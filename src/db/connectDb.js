const mongoose = require('mongoose')

const connectDb = () => {
    console.log("connecting DB");
    const url = 'mongodb+srv://Parcel_Management_ParcelPro:LgIChEXgYvRMzQid@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(url, {DbName: "parcel_Management"})
    console.log("connected DB");
}


module.exports = connectDb



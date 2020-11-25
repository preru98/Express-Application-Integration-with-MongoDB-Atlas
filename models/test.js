const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const testSchema = Schema(
    {
        username : {
            type : String,
            required : true,
        },
        age : {
            type : Number,
            required : true,
        }
    },
    {
        timestamps : true
    }
);


module.exports = mongoose.model("Test", testSchema);
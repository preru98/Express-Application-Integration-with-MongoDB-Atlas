const mongoose = require('mongoose');
const URI = 'mongodb+srv://<User>:<Password>@cluster0.gyh5q.mongodb.net/<DB>?retryWrites=true&w=majority';

module.exports = connectDB = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true}
    )
    .then(() => {
    console.log('MongoDB Atlas Connected…')
    })
    .catch(err => console.log(err));
} 
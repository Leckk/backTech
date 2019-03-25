
const mongoose = require('mongoose');

/* ----- Your DB ------ */
const dbUrl = 'mongodb://leo:azerty1@ds121996.mlab.com:21996/techworld';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
    if (error) {
        console.error(error);
    } else {
        console.log('Your database is operational...')
    }
});

module.exports = {
    mongoose: mongoose,
}

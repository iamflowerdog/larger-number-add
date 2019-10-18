if (process.env.NODE_ENV === "production") {
    module.exports = require('./dist/larger-number-add.min.js');
} else {
    module.exports = require('./dist/larger-number-add.js');
}
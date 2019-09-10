const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    AWS: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.REGION,
        KeyId: process.env.KEY_ID
    },
}
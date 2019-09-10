const aes256 = require('aes256');
const key = process.argv[2];
const data = process.argv[3];

const encrypt = (key, data) => {
    return {
        encryptedData: aes256.encrypt(key, data),
        data: data
    };
}

console.log(encrypt(key, data));

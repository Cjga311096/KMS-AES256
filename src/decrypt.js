const aes256 = require('aes256');
const key = process.argv[2];
const data = process.argv[3];

const decrypt = (key, encryptedData) => {
    return {
        decryptedData: aes256.decrypt(key, encryptedData),
        data: encryptedData
    };
}

console.log(decrypt(key, data));

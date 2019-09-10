const AWS = require('aws-sdk');
const config = require('./config');

const kms = new AWS.KMS({
    accessKeyId: config.AWS.accessKeyId,
    secretAccessKey: config.AWS.secretAccessKey,
    region: config.AWS.region
});

function generateDataKey() {
    return new Promise((resolve, reject) => {
        const params = {
            KeyId: config.AWS.KeyId, // The identifier of the CMK to use to encrypt the data key. You can use the key ID or Amazon Resource Name (ARN) of the CMK, or the name or ARN of an alias that refers to the CMK.
            KeySpec: 'AES_256' // Specifies the type of data key to return.
        };
        kms.generateDataKey(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({ decryptedKey: Buffer.from(data.Plaintext).toString('base64'), encryptedKey: Buffer.from(data.CiphertextBlob).toString('base64') });
            }
        });
    });
}

generateDataKey()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


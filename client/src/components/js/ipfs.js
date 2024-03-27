const ipfsClient = require('');
const pinataApiKey = ''; // replace with your actual Pinata API Key
const pinataSecretApiKey = ''; // replace with your actual Pinata Secret API Key
const gatewayToken = ''; // replace with your actual Pinata Secret API Key
const JWT = ''

const ipfs = ipfsClient({
    host: '',
    port: 5001,
    protocol: 'https',
    headers: {
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
        'x-pinata-gateway-token': gatewayToken,
        Authorization: `Bearer ${JWT}`,
    },
});

export default ipfs;

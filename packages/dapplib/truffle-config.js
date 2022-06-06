require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy raise saddle exchange grace fashion flock gas'; 
let testAccounts = [
"0x4d4c7840c78e4fcc00969735bd17216b6f460a99a8fac2f8c9fbc081f378d196",
"0x286f8fc3ddb2ddb67dcc4539bd464585b4e94bf4487343e9392168066b3ee65d",
"0xd58e63f364b438ac85688f199a716e878a9259e316a4ef1d7e044046ddf30376",
"0x192a84ed6180f3bdaaa924a9c906e086963733023d17d3d5a390ac56f7d20da0",
"0x5890bcf80891c0efdece277a8f80310dbf3571fc15765fe947b25b7272377b82",
"0x2e2741e1bb0cd6136936db31679574dc0da2f214b9733bcc337e7c3954b98c5a",
"0x42a83c2bcd9e1212125ec6d1293a49ef4317d4d4a97a379e63b90b9088d8c89a",
"0x98fd1086fe23dedae3dc11da2d59930e870e9c2e0167e896eb4c6dab5a57f6f6",
"0xeaf20fd9ecd7253e958120d08b90ca71db550dd37315816dc63a1915253948d9",
"0x7a330626ed1e1bd6e8302aa5e9d204ba467d0a398835b751d7baab23b312ef72"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


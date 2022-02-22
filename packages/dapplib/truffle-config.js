require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remind erosion grace fashion force security'; 
let testAccounts = [
"0xd31ff986b6e303ab657d95a5a20f028cccb8e88ead1a3732175a701e25603f4a",
"0x133f572988375f69f26f32794868b0a3a8b700bb2dca498d4f795403be520b5f",
"0xb50956d15cbb6c137bf919ef854e7a1c4bdd8772381a5614a727a8d985d91940",
"0x1a41dec1414b7c29b18dc02f20ea66b944cd5a250450726b98475cfede016517",
"0x87201f1bd754e4c5053590ed23fd9f1d203591c4fda340e807e458e762be6f4c",
"0xe7541b8ac1ca9b383a01aadf9c9cf3a7b7d5fd065b7c5dd49af960ad3641433a",
"0x23899f31185c9f29e94e3961850a322dee6d6176dbc1dd9c71c3e60cb6e6ba0e",
"0x3165e01389c939bfa35d1f7c5c47e4062bd05edf34eed760a05facf98eaca56a",
"0x279e53bbf6743273d7b66b3f877bc6fadf87979acbc3e85070409219148a14bc",
"0x1cbdf0309e99a1dae589aa7c2c70e4411b28fffd20c2ba13fe1157092edb88cf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



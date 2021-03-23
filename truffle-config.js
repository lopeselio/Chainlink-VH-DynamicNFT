const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const Web3 = require("web3");
// require('babel-polyfill');
// require('babel-register');

const mnemonicPhrase = process.env.MNEMONIC
const Url = process.env.RPC_URL

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    // kovan: {
    //   provider: () => {
    //     return new HDWalletProvider(mnemonic, providerOrUrl, 2)
    //   },
    //   network_id: '42',
    //   skipDryRun: true
    // },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, Url, 2)
      },
    network_id: "4",
    networkCheckTimeout: 1000000,
    timeoutBlocks: 200,
    skipDryRun: false
    // addressIndex: 2
    

  }
  },
  compilers: {
    solc: {
      version: "0.6.12",
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}

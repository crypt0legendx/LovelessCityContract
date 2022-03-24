require('dotenv').config();
const privateKeys = process.env.PRIVATE_KEYS || ""
const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        privateKeys.split(','),
        `https://rinkeby.infura.io/v3/23b8935c1649490bb448e80796e96581`
      ),
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },





  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  //Set custom directory
  // contracts_directory: './src/contracts/',
  // contracts_build_directory: './src/abis/',

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.12",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 0
      //  },
      //  evmVersion: "byzantium"
      }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: process.env.RINKEBY_API_KEY
  },

  db: {
    enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  }
};

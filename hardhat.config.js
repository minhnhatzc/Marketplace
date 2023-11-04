/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.4',
  networks: {
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/b9AvCv_Nlqn19uwk0LLI-t465r1U1lR4',
      accounts: [process.env.PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

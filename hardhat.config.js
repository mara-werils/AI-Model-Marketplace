require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");


/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.0",
  networks: {
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com", // RPC URL Holesky
      accounts: [`0x057355f7c65264132368f6ad1a3ee84cfc9d8a44c0f561f2e804d31220afc21f`], // Ваш приватный ключ MetaMask
    },
  },
};
const NFTSimple = artifacts.require('NFTSimple')
// const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    
    deployer.deploy(NFTSimple)
    
}
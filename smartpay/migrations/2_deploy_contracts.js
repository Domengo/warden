const StableCoin = artifacts.require("StableCoin");

module.exports = function(deployer) {
    const priceFeedAddress = "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D";
    deployer.deploy(StableCoin, priceFeedAddress);
};
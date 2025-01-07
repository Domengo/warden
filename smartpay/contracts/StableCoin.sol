// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract StableCoin is ERC20 {
    address public owner;
    AggregatorV3Interface internal priceFeed;

    constructor() ERC20("StableCoin", "STC") {
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(_priceFeed);
        _mint(owner, 1000000 * 10 ** decimals()); // Initial supply
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint tokens");
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function getLatestPrice() public view returns (int) {
        (, int price) = priceFeed.latestRoundData();
        return price;
    }

    function mintWithFiat(address to, uint256 fiatAmount) public {
        require(msg.sender == owner, "Only owner can mint tokens");
        int price = getLatestPrice();
        uint256 tokenAmount = (fiatAmount * uint256(price)) / 1e8; // Assuming price feed has 8 decimals
        _mint(to, tokenAmount);
    }

    function burnWithFiat(uint256 tokenAmount) public {
        _burn(msg.sender, tokenAmount);
    }
}

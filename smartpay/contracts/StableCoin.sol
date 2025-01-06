// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StableCoin is ERC20 {
    address public owner;

    constructor() ERC20("StableCoin", "STC") {
        owner = msg.sender;
        _mint(owner, 1000000 * 10 ** decimals()); // Initial supply
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint tokens");
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
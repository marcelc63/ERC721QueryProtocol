// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/**
 * Solidity Contract Template based on
 * Source: https://etherscan.io/address/
 *
 * Add Introduction Here
 *
 * Add Summary Here
 *
 * Curated by @marcelc63 - marcelchristianis.com
 * Each functions have been annotated based on my own research.
 *
 * Feel free to use and modify as you see appropriate
 */

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./library/Base64.sol";

contract Template is ERC721A, ReentrancyGuard, Ownable {
  // TODO: Update Constructor

  constructor() ERC721A("Template", "TEMPLATE") Ownable() {}

  function mint(uint256 _amount) external {
    _safeMint(msg.sender, _amount);
  }

  function burn(uint256 _tokenId) external {
    _burn(_tokenId);
  }
}

// contracts/NFTSimple.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

// const RINKEBY_VRF_COORDINATOR = '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B'
// const RINKEBY_LINKTOKEN = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
// const RINKEBY_KEYHASH = '0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311'

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";

contract GladiatorCharacter is ERC721, VRFConsumerBase {
    bytes32 public keyHash;
    uint256 vrfCoordinator;
    bytes32 internal keyHash;
    uint internal fee;
    uint public randomResult;

    struct Character {
        uint256 strength;
        uint256 speed;
        uint256 stamina;
        string name;
    }

    Character[] public characters;
    // mappings will go here 

    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash) public
    VRFConsumerBase(_VRFCoordinator, _LinkToken) 
    ERC721("GladiatorCharacter", "GDCT") public {
        vrfCoordiantor = _VRFCoordinator;
        keyHash = _keyhash;
        fee = 0.1 * 10**18; // 0.1 LINK     
    }

}
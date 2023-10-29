// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";
import { Player } from "../codegen/index.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract SpawnSystem is System {
  function spawn() public {
    bytes32 player = addressToEntityKey(address(_msgSender()));
    require(!Player.get(player), "already spawned");
 
    Player.set(player, true);
  }
}

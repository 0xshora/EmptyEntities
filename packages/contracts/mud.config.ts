import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    // Counter: {
    //   keySchema: {},
    //   valueSchema: "uint32",
    // },
    // Player: {
    //   keySchema: {address: "bytes32"},
    //   valueSchema: "bool",
    // },
    Player: "bool",
    MapConfig: {
      keySchema: {},
      dataStruct: false,
      valueSchema: {
        width: "uint32",
        height: "uint32",
        content: "bytes",
      },
    }
  },
});

import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Player: "bool",
    LandConfig: {
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

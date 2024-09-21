import { Web3PluginBase, Contract } from "web3";
import abi from "./abi.mjs";

export default class Chronicle extends Web3PluginBase {
  pluginNamespace = "basedprice";

  async getbaseEthPrice() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0xea347Db6ef446e03745c441c17018eF3d641Bc8f";
    const contract = new Contract(abi, ADDRESS);

    // linking context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("baseEth price is:", result.toString().substring(0, 2));
  }

  async getMaticPrice() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0x2aDC93F48Da9E3C06FC6A878b6459ada940c334d";
    const contract = new Contract(abi, ADDRESS);

    // linking context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("Matic price is:", result.toString());
  }

  async getcbBTCPrice() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0x187f8d5cd49e3c4c4C1B40A5a7E8C848b93E5006";
    const contract = new Contract(abi, ADDRESS);

    // linking context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("cbBTC price is:", result.toString());
  }
}
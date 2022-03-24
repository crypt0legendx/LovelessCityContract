const LovelessCityMetropass = artifacts.require("LovelessCityMetropass");

module.exports = function (deployer) {
  deployer.deploy(LovelessCityMetropass,"0x559802d253BEC01f2817cAC19722cA51Da854D7d", "0x559802d253BEC01f2817cAC19722cA51Da854D7d", "ipfs://QmYt8WegQ5NzpHMq8ZXv3FLacHRRRsw18eAzcC3b3kT675/");
};

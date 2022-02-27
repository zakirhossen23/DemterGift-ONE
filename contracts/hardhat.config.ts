import * as dotenv from 'dotenv';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
dotenv.config();

module.exports = {
	networks: {
		harmony: {
			url: 'https://api.s0.b.hmny.io',
			chainId: 1666700000,
			accounts: [`0x0435d2d40a95bc4a6ece08710d971629a65bb56c8ff256fb092efc9b43fd2a77`]
		},
		
	},
	solidity: {
		compilers: [
			{
				version: '0.7.6',
			},
			{
				version: '0.8.6',
			},
		],
	},
	namedAccounts: {
		deployer: 0,
	},
};

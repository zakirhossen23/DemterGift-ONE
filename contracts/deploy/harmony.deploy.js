// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const name = 'Harmony';
	const symbol = 'ONE';

	await deploy('HarmonyERC721', {
		from: deployer,
		args: [name, symbol],
		log: true,
	});
};

func.tags = ['Harmony'];
module.exports = func;

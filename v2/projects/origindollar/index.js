const sdk = require('../../../sdk/index');

module.exports = {
    name: 'Origin Dollar',
    token: 'OUSD',
    category: 'Assets',
    start: 1610000000, // Thu Jan 07 2021 06:13:20 GMT+0000
    tokenHolderMap: [
        {
            checkETHBalance: false,
            tokens: [
                '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
                '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
                '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
                // '0xc00e94cb662c3520282e6f5717214004a7f26888', // COMP
                '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', // cDAI
                '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9', // cUSDT
                '0x39aa39c021dfbae8fac545936693ac917d5e7563', // cUSDC
            ],
            holders: [
                '0xd5433168ed0b1f7714819646606db509d9d8ec1f', // CompoundStrategyProxy.sol
                '0x3c5fe0a3922777343cbd67d3732fcdc9f2fa6f2f', // ThreePoolStrategy.sol (Curve strategy)
                '0x9f2b18751376cf6a3432eb158ba5f9b1abd2f7ce', // InitializeGovernedUpgradeabilityProxy.sol (Aave Strategy),
                '0x9f2b18751376cf6a3432eb158ba5f9b1abd2f7ce',
            ],
        },
    ],
};
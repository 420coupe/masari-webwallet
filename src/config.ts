let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://www.aeonwallet.org/api/',
	mainnetExplorerUrl: "http://162.210.173.150/",
	mainnetExplorerUrlHash: "http://162.210.173.150/tx/{ID}",
	mainnetExplorerUrlBlock: "http://162.210.173.150/block/{ID}",
	testnetExplorerUrl: "http://162.210.173.151/",
	testnetExplorerUrlHash: "http://162.210.173.151/tx/{ID}",
	testnetExplorerUrlBlock: "http://162.210.173.151/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 0xB2,
	integratedAddressPrefix: 0x2733,
	addressPrefixTestnet: 0x0426,
	integratedAddressPrefixTestnet: 0x2C27,
	subAddressPrefix: 0x06B8,
	subAddressPrefixTestnet: 0x0AAC,
	feePerKB: new JSBigInt('1000000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 3, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'AEON',
	openAliasPrefix: "aeon",
	coinName: 'AEON',
	coinUriPrefix: 'aeon:',
	avgBlockTime: 240,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'WmtAEjEZ9QCJL5NxuZM8Us8g5gG4kmCvUWvG1zEKe4KxiuUwzvpnAFUe12ixSAuLb7P5ooGFKYQbQ5EkHffWZwxs2DLLVoW71',
		'WmtyvfjhjBVRgYSuQRZs2XgpDS2qhXma4aJLsXnZx6WA75J5KixvDi9F4wLh7h6Pg9QXnTrU3nFwJczDrmFRBeUg1kxyHvfdu',
		'WmtAEjEZ9QCJL5NxuZM8Us8g5gG4kmCvUWvG1zEKe4KxiuUwzvpnAFUe12ixSAuLb7P5ooGFKYQbQ5EkHffWZwxs2DLLVoW71'
	]
};
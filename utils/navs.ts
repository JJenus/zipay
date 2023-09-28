export const navs = ref([
	{
		name: "Home",
		dir: "/app",
		icon: "ki-outline ki-home-3",
		paths: [],
	},
	{
		name: "Transfer",
		dir: "/app/transfer",
		icon: "ki-solid ki-send",
		paths: [],
	},
	{
		name: "Scan",
		dir: "/app/scan",
		icon: "ki-duotone ki-scan-barcode",
		paths: [
			"path1",
			"path2",
			"path3",
			"path4",
			"path5",
			"path6",
			"path7",
			"path8",
		],
	},
	{
		name: "Transactions",
		dir: "/app/transactions",
		icon: "ki-solid ki-chart-line",
		paths: [],
	},
	{
		name: "Settings",
		dir: "/app/settings",
		icon: "ki-outline ki-gear", //app/ki-outline
		paths: [],
	},
]);

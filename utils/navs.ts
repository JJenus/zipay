export const navs = ref([
	{
		name: "Home",
		dir: "/",
		icon: "ki-outline ki-home-3",
		paths: [],
	},
	{
		name: "Transfer",
		dir: "/transfer",
		icon: "ki-solid ki-send",
		paths: [],
	},
	{
		name: "Scan",
		dir: "/scan",
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
		dir: "/transactions",
		icon: "ki-solid ki-chart-line",
		paths: [],
	},
	{
		name: "Settings",
		dir: "/settings",
		icon: "ki-outline ki-gear", //ki-outline
		paths: [],
	},
]);

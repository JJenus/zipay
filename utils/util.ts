// Function to remove occurrences of 'a' from a string
export const removeHyphen = (inputString: string) => {
	return inputString.replace(/-/g, "");
};

// Function to add a hyphen after every 4 characters
export const addHyphen = (inputString: string) => {
	return inputString.replace(
		/(.{8})(.{4})(.{4})(.{4})(.{12})/,
		"$1-$2-$3-$4-$5"
	);
};

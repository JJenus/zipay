import { AuthToken } from "./interfaces/AuthToken";

export const storage = () => {
	const authKey = "zipayauthkey";

	const remember = async (auth: AuthToken) => {
		await encryptAndStore(authKey, JSON.stringify(auth));
	};

	const getAuth = async () => {
		const auth = await retrieveAndDecrypt(authKey);
		if (auth != null) {
			const token: AuthToken = JSON.parse(auth);
			return token;
		}
		return false;
	};
};

async function encryptAndStore(key: string, data: any) {
	const encodedData = new TextEncoder().encode(data);
	const encryptionKey = await crypto.subtle.generateKey(
		{ name: "AES-GCM", length: 256 },
		true,
		["encrypt", "decrypt"]
	);
	const encryptedData = await crypto.subtle.encrypt(
		{ name: "AES-GCM", iv: new Uint8Array(12) },
		encryptionKey,
		encodedData
	);
	localStorage.setItem(key, JSON.stringify(encryptedData));
}

// Retrieve and decrypt data from LocalStorage
async function retrieveAndDecrypt(key: string) {
	const data = localStorage.getItem(key);

	if (!data) {
		return null;
	}

	const encryptedData = JSON.parse(data);
	const encryptionKey = await crypto.subtle.generateKey(
		{ name: "AES-GCM", length: 256 },
		true,
		["encrypt", "decrypt"]
	);
	const decryptedData = await crypto.subtle.decrypt(
		{ name: "AES-GCM", iv: new Uint8Array(12) },
		encryptionKey,
		encryptedData
	);
	return new TextDecoder().decode(decryptedData);
}

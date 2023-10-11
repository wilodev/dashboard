'use client';

interface StorageServiceInterface {
	setString(key: string, value: string): Promise<void>;

	setObject(key: string, value: object): Promise<void>;

	getString(key: string): Promise<string | null>;

	getObject<T>(key: string): Promise<T | null>;
}

class LocalStorageManager implements StorageServiceInterface {
	static instance: LocalStorageManager;

	public static getInstance(): LocalStorageManager {
		if (!LocalStorageManager.instance) {
			LocalStorageManager.instance = new LocalStorageManager();
		}
		return LocalStorageManager.instance;
	}

	// eslint-disable-next-line class-methods-use-this
	async setString(key: string, value: string): Promise<void> {
		await localStorage.setItem(key, value);
	}

	async setObject(key: string, value: object): Promise<void> {
		const stringValue = JSON.stringify(value);
		await this.setString(key, stringValue);
	}

	// eslint-disable-next-line class-methods-use-this
	async getString(key: string): Promise<string | null> {
		return localStorage.getItem(key);
	}

	async getObject<T>(key: string): Promise<T | null> {
		const stringValue = await this.getString(key);
		return stringValue ? (JSON.parse(stringValue) as T) : null;
	}
}

export const StorageService: StorageServiceInterface =
	LocalStorageManager.getInstance();

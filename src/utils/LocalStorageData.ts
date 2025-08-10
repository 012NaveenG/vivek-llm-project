const saveToLocalstorage = (name: string, data: unknown): void => {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(name, jsonData);
    } catch (error) {
        console.error(`Error saving to localStorage (${name}):`, error);
    }
};

const removeFromLocalstorage = (name: string): void => {
    localStorage.removeItem(name);
};

const getFromLocalStorage = <T>(name: string): T | null => {
    const data = localStorage.getItem(name);

    if (!data) return null;

    try {
        return JSON.parse(data) as T;
    } catch (error) {
        console.error(`Error parsing localStorage data (${name}):`, error);
        return null;
    }
};

export { saveToLocalstorage, removeFromLocalstorage, getFromLocalStorage };

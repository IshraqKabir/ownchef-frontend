import { useState, useEffect } from "react";

function useLocalState<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState(() => {
        if (process.browser) {
            const storedValue = localStorage.getItem(key);
            return storedValue === null ? defaultValue : JSON.parse(storedValue);
        }
    });

    useEffect(() => {
        const listener = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue(JSON.parse(e.newValue));
            }
        };
        window.addEventListener("storage", listener);

        return () => {
            window.removeEventListener("storage", listener);
        };
    }, [key]);

    const setValueInLocalStorage = (newValue) => {
        setValue((currentValue) => {
            const result =
                typeof newValue === "function" ? newValue(currentValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };

    return [value, setValueInLocalStorage];
};

export default useLocalState;

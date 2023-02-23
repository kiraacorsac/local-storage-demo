import { useState } from "react";


export function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        const savedState = localStorage.getItem(key);
        if (savedState != null) {
            return JSON.parse(savedState)
        }
        return initialValue;
    })

    function setPersistentState(value) {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [state, setPersistentState];
}
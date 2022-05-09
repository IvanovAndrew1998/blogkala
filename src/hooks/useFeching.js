import { useState } from 'react';

export default function useFetching(fetchFunc) {
    const [isFetching, setFetching] = useState(true);
    
    async function fetchFuncOut () {
        await fetchFunc();
        setFetching(false);
    }

    return [isFetching, fetchFuncOut];
}
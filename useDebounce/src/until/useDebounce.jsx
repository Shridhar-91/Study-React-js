import { useEffect, useState }  from "react";

const useDebounce = (search, delay) => {

    const [debounceSearch, setDebounceSearch] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setDebounceSearch(search);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [search, delay]);

    return debounceSearch;
}
export default useDebounce;
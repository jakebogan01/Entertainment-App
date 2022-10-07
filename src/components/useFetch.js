import {useEffect, useState} from "react";

const useFetch = (url, term, type) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);

    if(term) {
        if(type === "movies") {
            url = url.concat(term, '&page=1&include_adult=false');
        } else {
            url = url.concat(term, '&include_adult=false');
        }
    }

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data.results);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();

    }, [url])

    return { data }
}

export default useFetch;
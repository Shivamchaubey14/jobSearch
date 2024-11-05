import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";  // Import the API key

const useFetch = (endpoint, query = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': RAPID_API_KEY,  // Use the environment variable here
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: query,
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setError(null);  // Clear any previous errors
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
            alert('There was an error fetching the data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);  // Refetch if endpoint or query changes

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;

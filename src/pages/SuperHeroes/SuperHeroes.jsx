import { useEffect, useState } from 'react';
import HeroesList from '../../components/HeroesList/HeroesList';
import { fetchHeroes } from '../../api/heroes.js';

const SuperHeroes = () => {
    const [heroes, setHeroes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(false)

    const getHeroes = () => {
        fetchHeroes()
            .then(response => response.data)
            .then(data => setHeroes(data))
            .catch(error => {
                setError(error.message)
                setIsError(true)
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getHeroes()
    }, [])

    if (isLoading) return <div>Chargement en cours...</div>

    if (isError) return <div>{error}</div>

    return (
        <div>
            <HeroesList heroes={heroes} />
        </div>
    )
}

export default SuperHeroes
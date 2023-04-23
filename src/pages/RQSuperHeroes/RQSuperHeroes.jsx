import { useQuery } from '@tanstack/react-query'
import HeroesList from '../../components/HeroesList/HeroesList';
import { fetchHeroes } from '../../api/heroes.js';

const RQSuperHeroes = () => {

    const transformData = (heroes) => {
        heroes.data.map((hero) => hero.name = hero.name.toUpperCase())
        return heroes.data
    }

    const queryOptions = {
        select: transformData // determine une fonction pour sélectionner les données à retourner 
    }

    const { isLoading, isFetching, isError, data: heroes, error } = useQuery(['heroes'], fetchHeroes, queryOptions)

    if (isLoading || isFetching) return <h1>Chargement en cours...</h1>

    if (isError) return <div>{error.message}</div>

    return (
        <div>
            <HeroesList heroes={heroes} />
        </div>
    )
}

export default RQSuperHeroes
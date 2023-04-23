import { useQuery } from '@tanstack/react-query'
import HeroesList from '../../components/HeroesList/HeroesList';
import { fetchHeroes } from '../../api/heroes.js';
const RQSuperHeroes = () => {

    const { isLoading, isError, data: heroes, error } = useQuery({ queryKey: ['heroes'], queryFn: fetchHeroes })

    if (isLoading) return <div>Chargement en cours...</div>
    if (isError) return <div>{error.message}</div>

    return (
        <div>
            <HeroesList heroes={heroes.data} />
        </div>
    )
}

export default RQSuperHeroes
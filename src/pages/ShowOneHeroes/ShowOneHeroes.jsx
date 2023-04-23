import { useParams } from 'react-router-dom';
import { useSinlgeHeroesData } from '../../hooks/useSinlgeHeroesData';

const ShowOneHeroes = () => {
    const { id } = useParams()

    const { isLoading, isError, data, error } = useSinlgeHeroesData(id)

    if (isLoading) return <h1>Chargement en cours...</h1>
    if (isError) return <div>{error.message}</div>


    return (
        <div>
            {data.data.name}
        </div>
    )
}

export default ShowOneHeroes
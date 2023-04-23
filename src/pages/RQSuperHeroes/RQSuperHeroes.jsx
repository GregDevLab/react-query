import HeroesList from '../../components/HeroesList/HeroesList';
import { useHeroesData } from '../../hooks/useHeroesData';

const RQSuperHeroes = () => {

    const onSucess = (data) => {
        console.log('onSuccess', data)
    }

    const onError = (error) => {
        console.log('onError', error)
    }

    const { isLoading, isFetching, isError, data: heroes, error } = useHeroesData(onSucess, onError)

    if (isLoading || isFetching) return <h1>Chargement en cours...</h1>

    if (isError) return <div>{error.message}</div>

    return (
        <div>
            <HeroesList heroes={heroes} />
        </div>
    )
}

export default RQSuperHeroes
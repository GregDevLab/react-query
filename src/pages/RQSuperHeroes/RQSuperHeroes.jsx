import { useQuery } from '@tanstack/react-query'
import HeroesList from '../../components/HeroesList/HeroesList';
import { fetchHeroes } from '../../api/heroes.js';
import { useState } from 'react';
const RQSuperHeroes = () => {
    const [enabled, setEnabled] = useState(false)
    const queryOptions = {
        // staleTime: 5000, // determine combien de temps les données sont considérées comme fraîches
        // cacheTime: 5000, // determine combien de temps les données sont conservées dans le cache, même si elles sont obsolètes
        // refetchInterval: 5000, // determine combien de temps entre les requêtes de rafraîchissement automatique
        // refetchIntervalInBackground: true, // determine si les requêtes de rafraîchissement automatique doivent continuer lorsque la fenêtre du navigateur est mise au premier plan
        refetchOnWindowFocus: true, // determine si les requêtes doivent être refaites lorsque la fenêtre du navigateur est mise au premier plan
        refetchOnMount: true, // determine si les requêtes doivent être refaites lorsque le composant est monté
        // refetchOnReconnect: false, // determine si les requêtes doivent être refaites lorsque la connexion réseau est rétablie
        // retry: 3, // determine le nombre de fois qu'une requête doit être réessayée en cas d'échec
        // retryDelay: 1000, // determine le délai en millisecondes entre les tentatives de réessai
        onSuccess: (query) => console.log(query.data), // determine une fonction à appeler lorsque la requête est réussie
        onError: (query) => console.log(query.message), // determine une fonction à appeler lorsque la requête échoue
        onSettled: () => console.log('settled'), // determine une fonction à appeler lorsque la requête est terminée, que ce soit avec succès ou en échec
        // useErrorBoundary: true, // determine si les erreurs doivent être capturées par un composant ErrorBoundary
        // suspense: true, // determine si le composant doit être suspendu pendant le chargement de la requête
        enabled // determine si la requête doit être exécutée
    }

    const { isLoading, isFetching, isError, data: heroes, error, refetch } = useQuery(['heroes'], fetchHeroes, queryOptions)

    if (isLoading || isFetching) return (<div>
        <h1>Chargement en cours...</h1>
        <button onClick={() => setEnabled(true)}>Charger</button>
    </div>)
    if (isError) return <div>{error.message}</div>

    return (
        <div>
            <HeroesList heroes={heroes.data} />
            <button onClick={refetch}>Rafraîchir</button>
        </div>
    )
}

export default RQSuperHeroes
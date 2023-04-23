import { useFriendsData } from "../../hooks/useFriendsData"
import { useHeroesData } from "../../hooks/useHeroesData"


const ParallelQueries = () => {

    const { isLoading: isHeroesLoading, isError: isHeroesError, data: heroes, error: heroesError } = useHeroesData()

    const { isLoading: isFriendsLoading, isError: isFriendsError, data: friends, error: friendsError } = useFriendsData()

    console.log("🚀 ~ file: ParallelQueries.jsx:8 ~ ParallelQueries ~ heroes:", heroes)
    console.log("🚀 ~ file: ParallelQueries.jsx:11 ~ ParallelQueries ~ friends:", friends.data)

    return (
        <div>ParallelQueries</div>
    )
}

export default ParallelQueries
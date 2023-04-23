import { useQuery } from '@tanstack/react-query'
import { fetchFriends } from '../api/friends'

export const useFriendsData = (onSuccess, onError) => {
    const queryOptions = {
        onSuccess,
        onError,
    }

    return useQuery(['friends'], fetchFriends, queryOptions)

}
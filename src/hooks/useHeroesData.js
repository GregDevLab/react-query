import { useQuery } from '@tanstack/react-query'
import { fetchHeroes } from "../api/heroes"

const transformData = (heroes) => {
    heroes.data.map((hero) => hero.name = hero.name.toUpperCase())
    return heroes.data
}

export const useHeroesData = (onSuccess, onError) => {
    const queryOptions = {
        refetchOnMount: false,
        onSuccess,
        onError,
        select: transformData
    }

    return useQuery(['heroes'], fetchHeroes, queryOptions)

}

// docs : https://tanstack.com/query/latest/docs/react/reference/useQuery?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Freference%2FuseQuery

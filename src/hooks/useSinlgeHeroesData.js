import { useQuery } from '@tanstack/react-query'
import { fetchOneHeroes } from "../api/heroes"

export const useSinlgeHeroesData = (id) => {
    return useQuery(['singleHeroes', id], fetchOneHeroes)
}
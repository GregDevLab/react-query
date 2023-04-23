import axios from "axios"

const fetchHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchOneHeroes = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export { fetchHeroes, fetchOneHeroes }
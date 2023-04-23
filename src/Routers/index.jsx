import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import SuperHeroes from '../pages/SuperHeroes/SuperHeroes'
import RQSuperHeroes from '../pages/RQSuperHeroes/RQSuperHeroes'
import ShowOneHeroes from '../pages/ShowOneHeroes/ShowOneHeroes'
import ParallelQueries from '../pages/ParallelQueries/ParallelQueries'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<SuperHeroes />} />
            <Route path="/rq-heroes" element={<RQSuperHeroes />} />
            <Route path="/rq-heroes/:id" element={<ShowOneHeroes />} />
            <Route path="/rq-parallel/" element={<ParallelQueries />} />
        </Routes>
    )
}

export default Routers
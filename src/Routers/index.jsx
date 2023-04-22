import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import SuperHeroes from '../pages/SuperHeroes/SuperHeroes'
import RQSuperHeroes from '../pages/RQSuperHeroes/RQSuperHeroes'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<SuperHeroes />} />
            <Route path="/rq-heroes" element={<RQSuperHeroes />} />
        </Routes>
    )
}

export default Routers
import Heroes from '../Heroes/Heroes';
import s from './styles.module.css';

const HeroesList = ({ heroes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Alter ego</th>
                </tr>
            </thead>
            <tbody>
                {heroes.map(hero => <Heroes key={hero.id} hero={hero} />)}
            </tbody>
        </table>
    )
}

export default HeroesList
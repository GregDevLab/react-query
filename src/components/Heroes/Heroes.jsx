import s from './styles.module.css';

const Heroes = ({ hero }) => {

    return (
        <tr className={s.row}>
            <td>#{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.alterEgo}</td>
        </tr>
    )
}

export default Heroes
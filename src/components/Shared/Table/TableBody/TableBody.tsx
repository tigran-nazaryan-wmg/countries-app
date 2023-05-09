import {type FC} from "react";
import DivButton from "../../Button/DivButton";
import {ICountries} from "../../../Countries/Countries";
import styles from "./TableBody.module.scss"

interface ITableBody {
    data: ICountries[];
    onRemoveCountry: (name: string) => void;
}

const TableBody: FC<ITableBody> = ({data, onRemoveCountry}) => {
    return (
        <tbody className={styles.container}>
        {data.map((country) => (
            <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.region}</td>
                <td>{country.population.toLocaleString()}</td>
                <td>{country.area.toLocaleString()}</td>
                <td><img src={country.flag} alt={country.flag} width="30"/></td>
                <td><DivButton onClick={() => onRemoveCountry(country.name)}>Remove</DivButton></td>
            </tr>
        ))}
        </tbody>
    );
}

export default TableBody;
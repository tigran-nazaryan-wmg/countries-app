import {type FC, memo} from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import {ITableHeaders} from "../../../constants/tableHeaders";
import {ICountries} from "../../Countries/Countries";
import styles from "./Table.module.scss";

interface ITable {
    headers: ITableHeaders[];
    data: ICountries[];
    onRemoveCountry: (name: string) => void;
}

const Table: FC<ITable> = ({headers, data, onRemoveCountry}) => {
    return (
        <table className={styles.container}>
            <TableHeader headers={headers}/>
            <TableBody data={data} onRemoveCountry={onRemoveCountry}/>
        </table>
    );
}

export default memo(Table);
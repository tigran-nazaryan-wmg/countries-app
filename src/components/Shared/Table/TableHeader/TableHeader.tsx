import {type FC} from "react";
import {ITableHeaders} from "../../../../constants/tableHeaders";
import styles from "./TableHeader.module.scss";

interface ITableHeader {
    headers: ITableHeaders[];
}

const TableHeader: FC<ITableHeader> = ({headers}) => {
    return (
        <thead className={styles.container}>
           <tr>
            {headers.map((header) => (
                <th key={header.key}>{header.label.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
    );
}

export default TableHeader;
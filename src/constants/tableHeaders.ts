export interface ITableHeaders {
    label: string;
    key: string;
}

export const tableHeaders: ITableHeaders[] = [
    { label: "Country", key: "country" },
    { label: "Region", key: "region" },
    { label: "Population(2023)", key: "population" },
    { label: "Area", key: "area" },
    { label: "Flag", key: "flag" },
    { label: "", key: "" }
];
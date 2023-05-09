import {type ChangeEvent, useCallback, useEffect, useState, useMemo} from "react";
import Table from "../Shared/Table";
import Filters from "../Filters";
import Loader from "../Shared/Loader";
import {tableHeaders} from "../../constants/tableHeaders";
import styles from "./Countries.module.scss";
import {Dropdowns} from "../../constants/dropdowns";

const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
};

export interface ICountries {
    name: string;
    region: string;
    population: number;
    area: number;
    flag: string;
}

const Countries = () => {
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [initialCountries, setInitialCountries] = useState<ICountries[]>([]);
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("");
    const [regionValue, setRegionValue] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                const countriesData: ICountries[] = data.slice(0, 40).map((country: any) => {
                    return {
                        name: country.name.common,
                        region: country.region,
                        population: country.population,
                        area: country.area,
                        flag: country.flags.svg
                    };
                });
                setCountries(countriesData);
                setInitialCountries([...countriesData]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
                setLoading(false);
            });
    }, []);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setInputValue(value)
    }, []);

    const handleFilterChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            const {value} = e.target;
            setDropdownValue(value);
            setInputValue("");
            setRegionValue("");
        },
        []
    );

    const handleRegionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            const {value} = e.target;
            setRegionValue(value);
        },
        []
    );

    const handleSortReset = () => {
        setSortValue("");
        setSortDirection(1);
    };

    const handleSortChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            const newSortField = e.target.value;

            if (!newSortField) {
                handleSortReset();
                return;
            } else if (newSortField === sortValue) {
                setSortDirection(sortDirection * -1);
            } else {
                setSortValue(newSortField);
                setSortDirection(1);
            }
        },
        [sortDirection, sortValue]
    );

    const filteredCountries = useMemo(() => {
        let filtered = sortValue ? countries : initialCountries;
        if (inputValue) {
            filtered = filtered.filter((country) =>
                country.name.toLowerCase().includes(inputValue.toLowerCase())
            );
        } else if (regionValue) {
            filtered = filtered.filter((country) =>
                country.region.toLowerCase().includes(regionValue.toLowerCase())
            );
        }

        if (sortValue) {
            if (sortValue === Dropdowns.POPULATION) {
                filtered = filtered.sort((a, b) => (b.population - a.population) * sortDirection);
            } else if (sortValue === Dropdowns.AREA) {
                filtered = filtered.sort((a, b) => (b.area - a.area) * sortDirection);
            }
        }

        return filtered;

    }, [sortValue, countries, initialCountries, inputValue, regionValue, sortDirection]);

    const handleRemoveCountry = (name: string) => {
        const newList = countries.filter(country => country.name !== name);
        setCountries(newList);
        setInitialCountries([...newList]);
    };

    return (
        <div className={styles.container}>
            {loading && <Loader/>}
            <Filters
                inputValue={inputValue}
                dropdownValue={dropdownValue}
                regionValue={regionValue}
                sortValue={sortValue}
                onInputChange={handleInputChange}
                onFilterChange={handleFilterChange}
                onRegionChange={handleRegionChange}
                onSortChange={handleSortChange}
            />
            <Table
                headers={tableHeaders}
                data={filteredCountries}
                onRemoveCountry={handleRemoveCountry}
            />
            {!filteredCountries.length && <div><p className={styles.notFound}>No data found!</p></div>}
        </div>
    )
}

export default Countries;
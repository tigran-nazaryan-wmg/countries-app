import {type FC, type ChangeEvent, memo} from "react";
import Input from "../Shared/Input";
import Dropdown from "../Shared/Dropdown";
import styles from "./Filters.module.scss";
import {
    Dropdowns,
    optionForCountryNameOrRegion,
    optionForPopulationOrArea,
    optionForRegions
} from "../../constants/dropdowns";

interface IFilters {
    inputValue: string;
    dropdownValue: string;
    regionValue: string;
    sortValue: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onRegionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSortChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filters: FC<IFilters> = (props) => {
    const {
        inputValue,
        dropdownValue,
        regionValue,
        sortValue,
        onInputChange,
        onFilterChange,
        onRegionChange,
        onSortChange
    } = props;

    return (
        <div className={styles.container}>
            <h3>Filter</h3>
            <div className={styles.filtersWrapper}>
                <div className={styles.filtersWrapperForCountryNameOrRegion}>
                    <Input
                        placeholder={"Search"}
                        value={inputValue}
                        onChange={onInputChange}
                        disabled={dropdownValue !== Dropdowns.COUNTRY_NAME}/>
                    <Dropdown
                        value={dropdownValue}
                        options={optionForCountryNameOrRegion}
                        onSelect={onFilterChange}
                    />
                    {dropdownValue === Dropdowns.REGION &&
                        <Dropdown
                            value={regionValue}
                            options={optionForRegions}
                            onSelect={onRegionChange}
                        />
                    }
                </div>
                <div>
                    <Dropdown
                        value={sortValue}
                        options={optionForPopulationOrArea}
                        onSelect={onSortChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Filters);
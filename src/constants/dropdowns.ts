export const optionForCountryNameOrRegion = [
    { value: '', label: 'Select for search' },
    { value: 'CountryName', label: 'Country Name' },
    { value: 'Region', label: 'Region' },
];

export const optionForRegions = [
    { value: '', label: 'Select by Region' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Australia', label: 'Australia' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
];

export const optionForPopulationOrArea = [
    { value: '', label: 'Select for sort' },
    { value: 'Population', label: 'Population' },
    { value: 'Area', label: 'Area' },
];

export enum Dropdowns {
    COUNTRY_NAME= "CountryName",
    REGION= "Region",
    POPULATION = "Population",
    AREA = "Area",
}
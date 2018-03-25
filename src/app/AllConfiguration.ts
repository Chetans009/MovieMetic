import { Configuration } from "./configuration";
import { CountryConfiguration } from "./CountryConfiguration";

export interface AllConfiguration {
    configuration:Configuration,
    countries:CountryConfiguration[]
}
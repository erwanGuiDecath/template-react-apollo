import { BeersAPI } from '../api'

interface DataSources {
    beersAPI: BeersAPI
}

export type AppContext = {
    dataSources: DataSources
}

export type QueryBeerArgs = {
    id: string
}

export type Beer = {
    id: string
    title: string
    brands: string
    volume: number
}
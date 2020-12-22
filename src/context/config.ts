import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://app.latl.ng/map/bereguray',
}

export const ConfigContext = createContext<Config>(defaultConfig)

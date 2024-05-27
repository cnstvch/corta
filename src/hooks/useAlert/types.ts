import { FC, PropsWithChildren } from "react"
import { positions } from "./options"

export type TOptions = {
    position?: keyof typeof positions,
    timeout?: number,
    type: 'success' | 'info' | 'error'
}

export type TAlert = {
    id: string,
    text?: string,
    timeout?: number,
    position?: typeof positions[keyof typeof positions],
    type?: 'success' | 'info' | 'error',
    close?: () => void
}[]

export interface ICreateAlert {
    text: string,
    options: TOptions
}

export interface IProviderProps extends PropsWithChildren {
    Context?: React.Context<TAlertValue | null>,
    Template?: FC<TAlert[0]>,
    timeout?: number,
    position?: keyof typeof positions
}

export type TAlertValue = {
    createAlert: ({ text, options }: ICreateAlert) => void,
    removeAllAlerts: () => void,
    alerts: TAlert
}
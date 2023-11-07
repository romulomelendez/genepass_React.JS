"use client"

import { useState, ReactNode } from "react"

import { PasswordContext, initialValues } from "../contexts/PasswordContext"

import { PwdPreferences } from "../contexts/PasswordContext"

type PwdProviderProps = {
    children: ReactNode
}

export type PwdProps = {
    length: string,
    symbols: boolean,
    numbers: boolean,
    capitalLetters: boolean
    smallLetters: boolean
}

export const PasswordProvider = ({ children }: PwdProviderProps) => {

    const [pwdData, setPwdData] = useState<PwdProps>(initialValues.pwdData)
    const [password, setPassword] = useState("")

    const handlePwdUserPreferences = ({ name, content }: PwdPreferences): void => {

        let auxObject = initialValues.pwdData

        auxObject = Object.defineProperty(pwdData, name, {
            value: content
        })

        setPwdData({ ...auxObject })
    }

    const createPwd = async () => {

        console.log(JSON.stringify(pwdData))
        const pwdDataResponse = await fetch("http://localhost:3333/api/createPwd", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pwdData)
        })
        const pwd = await pwdDataResponse.json()
        setPassword(pwd)
    }

    return (

        <PasswordContext.Provider value={{ 
            pwdData,
            handlePwdUserPreferences,
            password,
            createPwd
        }}>
            { children }
        </PasswordContext.Provider>

    )
}
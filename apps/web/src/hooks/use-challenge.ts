import { useState } from "react"

export const LANGUAGES = [
    {
        label: "C++",
        value: "cpp"
    },
    {
        label: "Python",
        value: "py"
    },
    {
        label: "Golang",
        value: "go"
    },
    {
        label: "Javascript",
        value: "js"
    }
]

export function useChallenge(){
    const [language, setLanguage] = useState<string>("")

    return {
        language,
        setLanguage,
    }
}
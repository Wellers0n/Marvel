const ThemeProvider = (stateDarkMode) => {
    return {
        main: (stateDarkMode) ? "#272425" : "white"
    }
}

export const ModeTheme = (stateDarkMode) => {
    return (stateDarkMode) ? "#272425" : "white"
}

export const HeaderMode = (stateDarkMode) => {
    return (stateDarkMode) ? "#383838" : "#e6e6e6"
}

export const TextMode = (stateDarkMode) => {
    return (stateDarkMode) ? "white" : "black"
}

export const BackgroundInvert = (stateDarkMode) => {
    return (stateDarkMode) ? "#383838" : "white"
}


export default ThemeProvider
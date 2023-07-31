import React, { ReactNode } from "react"
import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import GlobalStyles from "./globalStyles"
import ComponentsOverrides from "./overrides"

type Props = {
    children: ReactNode,
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const themeOptions = {}

    const theme = createTheme(themeOptions)

    theme.components = ComponentsOverrides(theme)

    return <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
        </MuiThemeProvider>
    </StyledEngineProvider>
}

export default ThemeProvider;

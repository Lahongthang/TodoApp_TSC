import React, { ReactNode, useMemo } from "react"
import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import GlobalStyles from "./globalStyles"
import ComponentsOverrides from "./overrides"
import typography from "./typography"

type Props = {
    children: ReactNode,
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    const themeOptions: ThemeOptions = useMemo(() => ({
        typography: typography
    }), [])

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

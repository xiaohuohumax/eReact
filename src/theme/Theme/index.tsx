import { ThemeProvider, Theme as MuiTheme } from "@mui/material/styles";
import { ReactNode, createContext, useContext, useState } from "react";

import { getDefaultTheme, getNextTheme } from "..";

interface CType {
    theme: MuiTheme,
    toggleTheme: () => void
}

interface CreateThemeProps {
    children: ReactNode
}

// 主题上下文对象
const ThemeContext = createContext<CType>(null!);

/**
 * 主题组件
 */
export default function Theme({ children }: CreateThemeProps) {
    const [theme, setTheme] = useState(getDefaultTheme());

    function toggleTheme() {
        setTheme(getNextTheme(theme.palette.mode));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

/**
 * 获取主题上下文对象
 * @returns 主题上下文对象
 */
export function useThemeContext() {
    return useContext(ThemeContext);
}
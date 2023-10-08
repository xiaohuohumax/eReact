import { createTheme } from "@mui/material/styles";

export { default as Theme, useThemeContext } from "./Theme";

// 全部主题
const themes = {
    light: createTheme({
        palette: {
            mode: "light"
        }
    }),
    dark: createTheme({
        palette: {
            mode: "dark"
        },
    })
};

// 全部主题名称
const tNames = Object.keys(themes);

// 默认主题
const dTheme = themes.light;

// 获取默认主题
export function getDefaultTheme() {
    const tName = import.meta.env.APP_DEFAULT_THEME;

    if (tNames.includes(tName)) {
        return themes[tName];
    }
    return dTheme;
}

/**
 * 获取下一个主题
 * @param nowName 当前主题名称
 * @returns 下一个主题
 */
export function getNextTheme(nowName: keyof (typeof themes)) {
    const index = tNames.indexOf(nowName);
    const nextIndex = (index + 1) % tNames.length;
    return Object.values(themes)[nextIndex];
}
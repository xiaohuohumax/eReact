import { Stack, Typography, SvgIcon, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { ReactSvg } from "@/assets";
import { DefButton, DefLink } from "@/component";
import i18n, { toggleLanguage } from "@/i18n";
import useConutStore, { updateCount } from "@/store/count";
import { useThemeContext } from "@/theme";

/**
 * 头部布局组件
 */
export default function Header() {
    const { t } = useTranslation();
    const count = useConutStore(state => state.count);
    const { toggleTheme } = useThemeContext();

    return (<>
        <Typography variant="h3" gutterBottom>
            <Box display="flex" alignItems="center">
                <SvgIcon sx={{ fontSize: "1.5em", mr: ".125em" }} component={ReactSvg} inheritViewBox />
                Vite + React + Material UI
            </Box>
        </Typography>
        <Stack spacing={2} direction="row" alignItems="center">
            <DefLink href="/">
                <DefButton variant="outlined" disableRipple>
                    {t("pageName.home")}
                </DefButton>
            </DefLink>
            <DefLink href="/about">
                <DefButton variant="outlined" disableRipple>
                    {t("pageName.about")}
                </DefButton>
            </DefLink>
            <DefButton
                variant="outlined" disableRipple onClick={updateCount}>
                {t("storeName")}:{count}
            </DefButton>
            <DefButton
                variant="outlined" onClick={toggleLanguage}
                sx={{ textTransform: "none" }}>
                {t("toggleLanguage") + `(${i18n.language})`}
            </DefButton>
            <DefButton variant="outlined" onClick={toggleTheme}
                sx={{ textTransform: "none" }}>
                {t("toggleTheme")}
            </DefButton>
        </Stack>
    </>);
}

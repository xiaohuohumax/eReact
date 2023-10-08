import i18next, { InitOptions } from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

type LanguageModules = Record<string, { default: I18nResource }>

// 全部语言文件
const lModules: LanguageModules = import.meta.glob("./language/**.ts", { eager: true });

// 全部语言名称
const languageNames: string[] = [];

// i18next初始配置
const initConfig: InitOptions = {
    debug: import.meta.env.DEV,
    fallbackLng: import.meta.env.DEFAULT_I18N,
    interpolation: {
        escapeValue: true
    },
    resources: Object
        .keys(lModules)
        .map(fName => {
            const lName = fName.split("/").pop()!.replace(".ts", "");
            languageNames.push(lName);
            return {
                [lName]: {
                    translation: {
                        ...lModules[fName]?.default
                    }
                }
            };
        })
        .reduce((l1, l2) => ({ ...l1, ...l2 }))
};

i18next
    // 环境语言识别
    .use(languagedetector)
    // react环境
    .use(initReactI18next)
    // 初始配置
    .init(initConfig);

/**
 * 切换语言
 */
export function toggleLanguage() {
    const nextIndex = (languageNames.indexOf(i18next.language) + 1) % languageNames.length;
    i18next.changeLanguage(languageNames[nextIndex]);
}

export default i18next;
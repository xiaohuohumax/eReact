import "i18next";

declare global {
    /**
     * 国际化规则
     */
    interface I18nResource {
        pageName: {
            home: string,
            about: string,
        },
        toggleLanguage: string,
        storeName: string,
        toggleTheme: string,
        pageTitle: {
            home: string,
            about: string,
            error404: string
        },

        homeArticle: {
            author: string,
            time: string
        }
    }
}

declare module "i18next" {
    interface CustomTypeOptions {
        resources: {
            translation: I18nResource
        }
    }
}
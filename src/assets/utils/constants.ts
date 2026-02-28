import type { LanguageProps } from "./types";

export const iconSize = 16;

export const languages: LanguageProps[] = [
    {
        id: 0,
        endpoint: 'cn',
        label: 'Chinese',
        native: '中文',
    },
    {
        id: 1,
        endpoint: 'jp',
        label: 'Japanese',
        native: '日本語',
    }
]
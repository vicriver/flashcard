export type LanguageProps  = {
    id: number
    endpoint: string
    label: string
    native: string
    
}

export type CardProps = {
    id: number
    roman: string
    character: string
    system: 'hiragana' | 'katakana' | 'kanji'
}
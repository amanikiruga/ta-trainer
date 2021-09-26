export enum CardKind {
    TeachingHard = "TeachingHard",
    TeachingEasy = "TeachingEasy",
    Miroagressions = "Microagressions",
}

export interface Card {
    id: number;
    kind: CardKind;
    prompt: string;
    answer: string;
}

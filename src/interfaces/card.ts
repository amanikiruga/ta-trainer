
export enum CardKind { 
    TeachingHard = "TeachingHard", TeachingEasy = "TeachingEasy", Miroagressions = "Microagressions"
}


export interface Card { 
    id: Number, 
    kind: CardKind, 
    prompt: string,
    answer: string, 

}
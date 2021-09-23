
export enum CardKind { 
    TeachingHard, TeachingEasy, Miroagressions
}


export interface Card { 
    id: Number, 
    kind: CardKind, 
    prompt: string,
    answer: string, 

}
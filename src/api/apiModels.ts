export interface Participant {
   id: number;
   body: string;
}
export interface Race {
   id: number;
   name: string;
   active: boolean;
   participants: Array<number>;
}

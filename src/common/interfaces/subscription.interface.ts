export interface ISubscription extends Document {
    _id: string;
    title: string;
    description: string;
    price: number;
    numberOfGuests: number;
    available: boolean;
}
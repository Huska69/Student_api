import {Document} from 'mongoose';

export interface IStudent extends Document {
    readonly id: number;
    readonly name: string; 
    readonly department: string;
    readonly age: string;
    readonly sex: string;
}
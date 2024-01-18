import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    id: Number,
    name: String, 
    department: String,
    age: String,
    sex: String,
});


import * as mongoose from 'mongoose'

export const PhotoSchema = new mongoose.Schema({
    photoURL: {type: String, required: true},
});
export interface Photo {
    id: string;
    photoURL: string;
}
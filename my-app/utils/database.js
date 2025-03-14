import mongoose from 'mongoose';

let isconnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isconnected) {
        console.log('mongo is already connected');
        return;
    }
    try {
        await mongoose.connect('mongodb://localhost:27017/Raju') 

        isconnected = true;
        console.log('mongo connected');
    }

    catch (e) {
        console.log(e);
    }

}
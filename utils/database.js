// import mongoose from "mongoose";

// let isConnected=false

// export const connectToDB=async()=>{
//     mongoose.set('strictQuery',true)

//     if(isConnected){
//         console.log("Mongo is already connected")
//         return
//     }

//     try{
//         await mongoose.connect('mongodb://localhost:27017/')

//         isConnected=true
//         console.log("connected to mongodb")
//     }
//     catch(e){
//         console.log(e)
//     }



// }
import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
       const conn = await mongoose.connect(mongodb+srv://dharmesh:dharmesh1@ecommerce.pedkfcs.mongodb.net/ecommerce)
       console.log(`connected to mongodb daabase${conn.connection.host}`)
    }catch(error){
               console.log(`Error in mongodb${error}`)
    }
}
export default connectDB;

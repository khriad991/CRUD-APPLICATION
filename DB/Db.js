
import mongoose from "mongoose";


const ConnectionDB = async (user,pass)=>{
    const url = `mongodb://${user}:${pass}@ac-eiev6e7-shard-00-00.am8jyr5.mongodb.net:27017,ac-eiev6e7-shard-00-01.am8jyr5.mongodb.net:27017,ac-eiev6e7-shard-00-02.am8jyr5.mongodb.net:27017/CRUDApplication?ssl=true&replicaSet=atlas-13f8xo-shard-0&authSource=admin&retryWrites=true&w=majority`
    const option = {
        useUnifiedTopoLogy:true,// use for =-----------NEW MongoBD server Engine use
        useNewUrlParser:true// use for ---------------NEW URL parser use
    }
    try{
        await mongoose.connect(url ,option);
        console.log("DataBase SuccessFully Connected")

    }catch (err) {
        console.log("Error Whhiole colling in DataBase", err)
    }
}


export default  ConnectionDB;
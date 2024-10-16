import mongoose from 'mongoose';

const db_url = 'mongodb+srv://sourabhugawekar2704:zqxUoTj89GCd0htH@alumni.fqf2r.mongodb.net/';


export const connectDB = () => {
    mongoose.connect(db_url,{
        dbName:'Alumni'
    })
    .then(()=>{
        console.log("Database Connected Successfully ");
    })
    .catch(err => console.log(err));
}


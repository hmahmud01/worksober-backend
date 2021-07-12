import mongoose from 'mongoose';
import config from 'config';

function connect(){
    const dbUri = config.get("dbUri") as string;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database Connected");
        })
        .catch((error) => {
            console.log("db eroor", error);
            process.exit(1);
        })
}

export default connect;
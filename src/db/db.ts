import mongoose from 'mongoose';

var url = process.env.MONGODD_URL;
const dev = process.env.URLDB_DEV



mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log('DB is connected'))
.catch(() => console.log('DB Error!'))


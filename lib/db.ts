import mongoose from "mongoose";
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("please define the MONGODB_URI variable inside .env");
}

let globalWithMongoose = global as typeof globalThis & {
  mongoose: any;
};
let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}
async function connectDb() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    /* @ts-ignore */
    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      console.log("connection has been established.");
      return mongoose;
    });
  }
  cached.conn = await cached.promise;

  return cached.conn;
}
export default connectDb;
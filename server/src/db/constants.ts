import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
import '../helpers/env.js';

const dbName = process.env.MONGODB_NAME;
const dbPort = process.env.MONGODB_PORT;
const dbHost = process.env.MONGODB_HOST || 'localhost';

async function connMongoDB() {
  try {
    if (!dbName || !dbPort) {
      throw new Error('MongoDB database name or port is not provided');
    }

    const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

    await mongoose.connect(uri);

    console.log('Connected to MongoDB');
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

export const db = mongoose;

export async function connect() {
  await connMongoDB();
}

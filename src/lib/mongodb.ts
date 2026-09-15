import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Global variable across hot reloads in development
declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/**
 * Resolves MongoDB URI by automatically injecting and URL-encoding MONGODB_PASSWORD if needed.
 */
function getResolvedMongoUri(): string {
  let uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (uri.includes("<db_password>")) {
    const password = process.env.MONGODB_PASSWORD;
    if (password) {
      // URL-encode password to handle special characters (e.g., '@', ':', '/')
      const encodedPassword = encodeURIComponent(password);
      uri = uri.replace("<db_password>", encodedPassword);
    } else {
      throw new Error(
        "MONGODB_URI contains '<db_password>', but MONGODB_PASSWORD is not set in .env.local"
      );
    }
  }

  return uri;
}

/**
 * Connect to MongoDB database with global connection caching for Next.js.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  const uri = getResolvedMongoUri();

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;

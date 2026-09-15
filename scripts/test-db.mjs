import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Simple .env.local parser for standalone testing
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, "utf-8");
    envFile.split("\n").forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        let val = match[2] || "";
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        process.env[match[1]] = val;
      }
    });
  }
}

loadEnv();

let uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

if (uri.includes("<db_password>")) {
  const password = process.env.MONGODB_PASSWORD;
  if (password) {
    const encodedPassword = encodeURIComponent(password);
    uri = uri.replace("<db_password>", encodedPassword);
    console.log("🔑 Injected and URL-encoded MONGODB_PASSWORD from .env.local.");
  } else {
    console.warn("⚠️  Warning: MONGODB_URI contains '<db_password>', but MONGODB_PASSWORD is not set in .env.local.");
  }
}

console.log("🔄 Initiating connection to MongoDB cluster...");

async function testConnection() {
  const startTime = Date.now();
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    const connectionTime = Date.now() - startTime;

    // Send an admin ping to verify server responsiveness
    const pingStart = Date.now();
    const pingResult = await conn.connection.db.admin().ping();
    const pingTime = Date.now() - pingStart;

    // List collections in the database
    const collections = await conn.connection.db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    console.log("\n==================================================");
    console.log("🎉 DATABASE CONNECTION VERIFIED SUCCESSFULLY!");
    console.log("==================================================");
    console.log(`🔌 Status:            Connected (ReadyState: ${conn.connection.readyState})`);
    console.log(`⏱️  Connection Time:   ${connectionTime} ms`);
    console.log(`📡 Ping Response:     ${JSON.stringify(pingResult)} (in ${pingTime} ms)`);
    console.log(`🌐 Cluster Host:      ${conn.connection.host}`);
    console.log(`📦 Database Name:     ${conn.connection.name || "test"}`);
    console.log(`📁 Collections (${collectionNames.length}):   ${collectionNames.length > 0 ? collectionNames.join(", ") : "None yet (empty database)"}`);
    console.log("==================================================\n");

    await mongoose.disconnect();
    console.log("🔒 Connection closed cleanly.");
  } catch (error) {
    console.log("\n==================================================");
    console.error("❌ DATABASE CONNECTION FAILED");
    console.log("==================================================");
    console.error("Reason:", error.message);
    if (error.message.includes("bad auth")) {
      console.error("👉 Tip: Authentication failed. Please check your username and password in .env.local.");
    } else if (error.message.includes("ETIMEDOUT") || error.message.includes("whitelist")) {
      console.error("👉 Tip: IP Whitelist issue. Go to MongoDB Atlas -> Network Access and add your current IP address (or 0.0.0.0/0).");
    }
    console.log("==================================================\n");
    process.exit(1);
  }
}

testConnection();

import mongoose from "mongoose";
import fs from "fs";
import path from "path";

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
if (uri && uri.includes("<db_password>")) {
  const password = process.env.MONGODB_PASSWORD;
  if (password) {
    uri = uri.replace("<db_password>", encodeURIComponent(password));
  }
}

async function run() {
  await mongoose.connect(uri);
  const studies = await mongoose.connection.db.collection("case_studies").find({}).toArray();
  console.log("Total case studies in DB:", studies.length);
  studies.forEach((s) => {
    console.log(JSON.stringify({
      slug: s.slug,
      title: s.title,
      industry: s.industry,
      service: s.service,
      region: s.region,
      country: s.country,
      tags: s.tags,
      practiceArea: s.practiceArea,
      serviceType: s.serviceType,
    }, null, 2));
  });
  await mongoose.disconnect();
}

run();

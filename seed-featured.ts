import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());
import { connectToDatabase } from './src/lib/mongodb';
import { CaseStudy } from './src/models/CaseStudy';

async function run() {
  await connectToDatabase();
  
  // First, backfill everything that doesn't have isFeatured
  const result = await CaseStudy.updateMany(
    { isFeatured: { $exists: false } },
    { $set: { isFeatured: false } }
  );
  console.log(`Backfilled isFeatured for ${result.modifiedCount} documents.`);

  // Second, derive 'category' from 'practiceAreas' if category is missing
  const allStudies = await CaseStudy.find({ category: { $exists: false } });
  let count = 0;
  for (const study of allStudies) {
    let cat = "Product Engineering"; // default
    if (study.practiceAreas?.includes("ecommerce")) cat = "eCommerce";
    else if (study.practiceAreas?.includes("ai-automation")) cat = "AI Automation";
    
    await CaseStudy.updateOne({ _id: study._id }, { $set: { category: cat } });
    count++;
  }
  
  console.log(`Backfilled category for ${count} documents.`);
  process.exit(0);
}
run();

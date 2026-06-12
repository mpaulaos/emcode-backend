import "dotenv/config";
import db from "./../db/db";
import { guides, guideSections } from "./schema";
import { guidesData } from "../types/guidesData";
import { sql } from "drizzle-orm";

const appStage = process.env.APP_STAGE;

const seed = async () => {
  if (appStage === "production") {
    console.error("ERROR: Cannot run seed script in production environment!");
    console.error("Current APP_STAGE:", appStage);
    process.exit(1);
  }

  console.log(`Running seed in ${appStage} environment...`);
  console.log("Starting seed...");

  try {
    console.log("Deleting existing data...");
    await db.execute(sql`TRUNCATE guides, guide_sections RESTART IDENTITY CASCADE`);

    console.log("Inserting seed data...");

    for (const { sections, ...guide } of guidesData) {
      const [inserted] = await db.insert(guides).values(guide).returning();

      await db.insert(guideSections).values(
        sections.map((section) => ({ ...section, guideId: inserted.id }))
      );
    }

    console.log(`Seeded ${guidesData.length} guides successfully!`);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seed script finished.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error running seed script:", error);
      process.exit(1);
    });
}

export default seed;
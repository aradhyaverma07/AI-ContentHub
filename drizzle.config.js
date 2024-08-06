/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:FRXCMr2Z7lLH@ep-orange-feather-a524gdap.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require'
    }
  };
  
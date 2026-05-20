import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('studyroom');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword:{
    enabled:true,
  },
  session:{
    cookieCache:{
      enabled:true,
      strategy:"jwt",
      maxAge:5 * 24 * 60 *60 // in second
    }
  },
   plugins: [jwt()],
        
    
});
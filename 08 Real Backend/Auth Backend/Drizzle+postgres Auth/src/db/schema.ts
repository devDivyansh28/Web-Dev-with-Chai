import {uuid, pgTable , varchar , text , boolean, timestamp} from "drizzle-orm/pg-core";


export const usersTable = pgTable("users",{
    id:uuid('id').primaryKey().defaultRandom(),
    firstName:varchar('first-name',{length:45}),
    lastName:varchar('last-name',{length:45}),
    email:varchar('email',{length:322}).notNull().unique(),
    password:varchar('password',{length:66}),
    emailVerified: boolean('email-verified').default(false).notNull(),
    salt:text('salt'),
    createdAt : timestamp('created-at').defaultNow().notNull(),
    updatedAt: timestamp('updated-at').$onUpdate(()=>new Date()),
})
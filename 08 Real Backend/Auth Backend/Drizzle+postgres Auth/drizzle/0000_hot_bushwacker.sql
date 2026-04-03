CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first-name" varchar(45),
	"last-name" varchar(45),
	"email" varchar(322) NOT NULL,
	"password" varchar(66),
	"email-verified" boolean DEFAULT false NOT NULL,
	"salt" text,
	"created-at" timestamp DEFAULT now() NOT NULL,
	"updated-at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

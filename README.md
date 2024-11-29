CREATE TABLE clients (
"id" bigserial NOT NULL,
"name" varchar(100) NOT NULL,
"document_type_id" int NOT NULL,
"document_number" varchar(20) NOT NULL,
"address" varchar(256) DEFAULT NULL,
"phone" varchar(20) DEFAULT NULL,
"email" varchar(50) DEFAULT NULL,
"created_at" timestamp NULL DEFAULT NULL,
"updated_at" timestamp NULL DEFAULT NULL,
"deleted_at" timestamp NULL DEFAULT NULL
);

CREATE TABLE document_types (
"id" serial NOT NULL,
"name" varchar(20) NOT NULL
);

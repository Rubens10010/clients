import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1733089963736 implements MigrationInterface {
    name = 'Migration1733089963736';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "document_types" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_d467d7eeb7c8ce216e90e8494aa" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying(100) NOT NULL, "document_number" character varying(20) NOT NULL, "address" character varying(256), "phone" character varying(20), "email" character varying(50), "document_type_id" integer, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "clients" ADD CONSTRAINT "FK_2d707eafd052c0e30d4f5514529" FOREIGN KEY ("document_type_id") REFERENCES "document_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `INSERT INTO "document_types" (name) values ('DNI'), ('CARNET DE EXTRANJERIA')`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "clients" DROP CONSTRAINT "FK_2d707eafd052c0e30d4f5514529"`,
        );
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "document_types"`);
    }
}

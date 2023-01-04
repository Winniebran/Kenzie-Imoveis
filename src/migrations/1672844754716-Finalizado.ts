import { MigrationInterface, QueryRunner } from "typeorm";

export class Finalizado1672844754716 implements MigrationInterface {
    name = 'Finalizado1672844754716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET NOT NULL`);
    }

}

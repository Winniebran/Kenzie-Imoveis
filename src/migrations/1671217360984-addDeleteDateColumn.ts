import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeleteDateColumn1671217360984 implements MigrationInterface {
    name = 'addDeleteDateColumn1671217360984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length: 80})
  district: string;

  @Column({length: 20})
  zipCode: string;

  @Column({length: 10, nullable: true})
  number?: string;

  @Column({length: 50})
  city: string;

  @Column({length: 50})
  state: string;

  @OneToOne(() => Properties, (property) => property.address)
  property: Properties
}

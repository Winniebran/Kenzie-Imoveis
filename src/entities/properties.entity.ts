import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Addresses } from "./adresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules_user_properties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column({ type: "float" })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, (address) => address.property)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (category) => category.properties)
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[]
}

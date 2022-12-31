import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./properties.entity";


@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length: 100, unique:true})
  name: string;

  @OneToMany(() => Properties, (property) => property.category)
  properties: Properties[];
}

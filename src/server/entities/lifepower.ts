import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ObjectType, ID, Field } from 'type-graphql'
import { Lazy } from '../helpers'
import { Hero } from '../entities/hero'

@Entity()
@ObjectType()
export class Lifepower {

  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @OneToOne(type => Hero, { lazy: true })
  heroes: Lazy<Hero>

  @Field()
  @Column()
  healthpoints: number

  @Field()
  @Column()
  mana: number

}

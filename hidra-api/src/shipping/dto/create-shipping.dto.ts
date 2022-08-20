import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

  @Entity()
export class CreateShippingDto {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({unique: true, length: 100, nullable: false})
    cnpj: string;
    @Column({length: 255, nullable: false})
    razaoSocial: string;
    cidade: string;
    @Column({length: 100, nullable: false})
    estado: string;
    @Column({length: 10, nullable: false})
    cep: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({  unique: true, nullable: false})
    cpf: string;

    @Column({length: 50, nullable: false})
    nome: string;

    @Column({ length: 50,unique:true,  nullable: false})
    rg: string;

    @Column({ length: 50,  nullable: false})
    estado: string;

    @Column({length: 50, nullable: false})
    cidade: string;

    @Column({ length: 10, nullable: false})
    cep: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}

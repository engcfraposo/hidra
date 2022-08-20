import { Column, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, Entity } from "typeorm"    
 
@Entity()
export class Fornecedores{
    
    @PrimaryGeneratedColumn("uuid")
    id: string; 

    @Column({unique: true ,nullable: false})
    cnpj: string ;

    @Column({ length:  255, nullable: false})
    razao_social: string;

    @Column({ length: 100, nullable: false})
    cidade: string;

    @Column({ length:2,   nullable: false})
    estado: string;

    @Column({length: 10,nullable: false})
    cep: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

}

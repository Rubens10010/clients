import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';
import { DocumentType } from './document-type.entity';

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @ManyToOne(() => DocumentType)
    @JoinColumn({ name: 'document_type_id' })
    documentType: DocumentType;

    @Column({ name: 'document_number', length: 20 })
    documentNumber: string;

    @Column({ length: 256, nullable: true })
    address?: string;

    @Column({ length: 20, nullable: true })
    phone?: string;

    @Column({ length: 50, nullable: true })
    email?: string;

    @CreateDateColumn()
    @Column({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn()
    @Column({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn()
    @Column({ name: 'deleted_at' })
    deletedAt?: Date;
}

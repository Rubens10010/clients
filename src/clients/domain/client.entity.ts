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
import { BaseEntity } from 'src/database/base.entity';

@Entity('clients')
export class Client extends BaseEntity {
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
}

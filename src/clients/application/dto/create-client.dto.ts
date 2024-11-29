import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsEmail,
    Length,
} from 'class-validator';
import { DocumentType } from 'src/clients/domain/document-type.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

export class CreateClientDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    name: string;

    @IsNotEmpty()
    @ManyToOne(() => DocumentType)
    @JoinColumn({ name: 'document_type_id' }) // Add this to map the column
    documentType: DocumentType;

    @IsString()
    @IsNotEmpty()
    @Length(1, 20)
    documentNumber: string;

    @IsString()
    @IsOptional()
    @Length(1, 256)
    address?: string;

    @IsString()
    @IsOptional()
    @Length(1, 20)
    phone?: string;

    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    email?: string;
}

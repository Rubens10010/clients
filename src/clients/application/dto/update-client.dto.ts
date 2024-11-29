import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class UpdateClientDto {
    @IsString()
    @IsOptional()
    @Length(1, 100)
    name?: string;

    @IsOptional()
    documentTypeId?: number;

    @IsString()
    @IsOptional()
    @Length(1, 20)
    documentNumber?: string;

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

import { Module } from '@nestjs/common';
import { ClientsController } from './presentation/clients.controller';
import { ClientRepository } from './infrastructure/repositories/client.repository';
import { GetClientsUseCase } from './application/use-cases/get-clients.use-case';
import { CreateClientUseCase } from './application/use-cases/create-client.use-case';
import { UpdateClientUseCase } from './application/use-cases/update-client.use-case';
import { DeleteClientUseCase } from './application/use-cases/delete-client.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './domain/client.entity';
import { DocumentType } from './domain/document-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Client, DocumentType])],

    controllers: [ClientsController],
    providers: [
        ClientRepository,
        GetClientsUseCase,
        CreateClientUseCase,
        UpdateClientUseCase,
        DeleteClientUseCase,
    ],
})
export class ClientsModule {}

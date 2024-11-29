import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/domain/client.entity';
import { DocumentType } from './clients/domain/document-type.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'admin',
            password: '1335',
            database: 'clients_service',
            entities: [Client, DocumentType], // Include all entities
            synchronize: false, // Use migrations for schema changes
        }),
        ClientsModule, // Import the Clients module
    ],
})
export class AppModule {}

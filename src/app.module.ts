import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/domain/client.entity';
import { DocumentType } from './clients/domain/document-type.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 5432),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            synchronize: false,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            autoLoadEntities: true,
        }),
        ClientsModule, // Import the Clients module
    ],
})
export class AppModule {}

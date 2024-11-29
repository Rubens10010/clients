import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { Client } from '../../domain/client.entity';
import { ClientRepository } from 'src/clients/infrastructure/repositories/client.repository';

@Injectable()
export class CreateClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(createClientDto: CreateClientDto): Promise<Client> {
        const client = new Client();
        Object.assign(client, createClientDto); // Map DTO properties to entity
        return this.clientRepository.save(client);
    }
}

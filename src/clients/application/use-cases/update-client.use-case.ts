import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/clients/infrastructure/repositories/client.repository';
import { UpdateClientDto } from '../dto/update-client.dto';
import { Client } from '../../domain/client.entity';

@Injectable()
export class UpdateClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(
        id: number,
        updateClientDto: UpdateClientDto,
    ): Promise<Client> {
        const client = await this.clientRepository.findById(id);
        if (!client) {
            throw new NotFoundException(`Client with ID ${id} not found.`);
        }
        Object.assign(client, updateClientDto); // Update properties
        return this.clientRepository.save(client);
    }
}

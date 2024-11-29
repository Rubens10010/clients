import { Inject, Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/clients/infrastructure/repositories/client.repository';
import { Client } from '../../domain/client.entity';

@Injectable()
export class GetClientsUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(): Promise<Client[]> {
        return this.clientRepository.findAll();
    }
}

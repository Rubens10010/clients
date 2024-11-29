import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/clients/infrastructure/repositories/client.repository';

@Injectable()
export class DeleteClientUseCase {
    constructor(private readonly clientRepository: ClientRepository) {}

    async execute(id: number): Promise<void> {
        const client = await this.clientRepository.findById(id);
        if (!client) {
            throw new NotFoundException(`Client with ID ${id} not found.`);
        }
        await this.clientRepository.delete(id);
    }
}

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../domain/client.entity';

@Injectable()
export class ClientRepository {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>,
    ) {
        console.log(
            'ClientRepository successfully injected:',
            !!clientRepository,
        ); // Debugging log
    }

    findAll(): Promise<Client[]> {
        return this.clientRepository.find({ relations: ['documentType'] });
    }

    findById(id: string): Promise<Client | null> {
        return this.clientRepository.findOne({
            where: { id },
            relations: ['documentType'],
        });
    }

    save(client: Client): Promise<Client> {
        return this.clientRepository.save(client);
    }

    delete(id: string): Promise<void> {
        return this.clientRepository.softDelete(id).then(() => {});
    }
}

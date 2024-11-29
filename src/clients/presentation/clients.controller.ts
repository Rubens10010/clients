import { Controller, Get, Post, Body } from '@nestjs/common';
import { GetClientsUseCase } from '../application/use-cases/get-clients.use-case';
import { CreateClientDto } from '../application/dto/create-client.dto';
import { CreateClientUseCase } from '../application/use-cases/create-client.use-case';
import { ClientMapper } from './mappers/client.mapper';

@Controller('clients')
export class ClientsController {
    constructor(
        private readonly getClientsUseCase: GetClientsUseCase,
        private readonly createClientUseCase: CreateClientUseCase,
    ) {}

    @Get()
    async findAll() {
        const clients = await this.getClientsUseCase.execute();
        return clients.map(ClientMapper.toResponse);
    }

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        return this.createClientUseCase.execute(createClientDto);
    }
}

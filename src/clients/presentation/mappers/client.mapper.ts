import { Client } from '../../domain/client.entity';

export class ClientMapper {
    static toResponse(client: Client): Record<string, any> {
        return {
            id: client.id,
            name: client.name,
            documentType: client.documentType?.name || null,
            documentNumber: client.documentNumber,
            address: client.address,
            phone: client.phone,
            email: client.email,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt,
        };
    }
}

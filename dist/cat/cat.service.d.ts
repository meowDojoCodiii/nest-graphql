import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatResponse } from './entities/cat.entity';
export declare class CatService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCatInput: CreateCatInput): Promise<{
        id: number;
        name: string;
        createAt: Date;
        updateAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        createAt: Date;
        updateAt: Date;
    }[]>;
    findOne(id: number): Promise<CatResponse>;
    update(id: number, updateCatInput: UpdateCatInput): string;
    remove(id: number): string;
}

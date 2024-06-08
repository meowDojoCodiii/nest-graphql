import { CatService } from './cat.service';
import { CatResponse } from './entities/cat.entity';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
export declare class CatResolver {
    private readonly catService;
    constructor(catService: CatService);
    createCat(createCatInput: CreateCatInput): Promise<{
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
    updateCat(updateCatInput: UpdateCatInput): string;
    removeCat(id: number): string;
}

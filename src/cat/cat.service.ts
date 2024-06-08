import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cat, CatResponse } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCatInput: CreateCatInput) {
    const newCat = await this.prisma.cat.create({
      data: createCatInput,
    });
    return newCat;
  }

  async findAll() {
    const allCats = await this.prisma.cat.findMany();
    return allCats;
  }

  async findOne(id: number): Promise<CatResponse> {
    try {
      const cat = await this.prisma.cat.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          createAt: true,
          updateAt: true,
        },
      });
      if (!cat) {
        throw new NotFoundException(`Cat with id ${id} not found`);
      }
      return { message: "Here's your cat, bro", data: cat };
    } catch (err) {
      console.log(err);
      throw new NotFoundException(`Error finding cat with id ${id}`);
    }
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}

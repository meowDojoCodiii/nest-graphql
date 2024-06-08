"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CatService = class CatService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCatInput) {
        const newCat = await this.prisma.cat.create({
            data: createCatInput,
        });
        return newCat;
    }
    async findAll() {
        const allCats = await this.prisma.cat.findMany();
        return allCats;
    }
    async findOne(id) {
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
                throw new common_1.NotFoundException(`Cat with id ${id} not found`);
            }
            return { message: "Here's your cat, bro", data: cat };
        }
        catch (err) {
            console.log(err);
            throw new common_1.NotFoundException(`Error finding cat with id ${id}`);
        }
    }
    update(id, updateCatInput) {
        return `This action updates a #${id} cat`;
    }
    remove(id) {
        return `This action removes a #${id} cat`;
    }
};
exports.CatService = CatService;
exports.CatService = CatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatService);
//# sourceMappingURL=cat.service.js.map
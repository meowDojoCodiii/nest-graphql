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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cat_service_1 = require("./cat.service");
const cat_entity_1 = require("./entities/cat.entity");
const create_cat_input_1 = require("./dto/create-cat.input");
const update_cat_input_1 = require("./dto/update-cat.input");
let CatResolver = class CatResolver {
    constructor(catService) {
        this.catService = catService;
    }
    createCat(createCatInput) {
        return this.catService.create(createCatInput);
    }
    findAll() {
        return this.catService.findAll();
    }
    async findOne(id) {
        return await this.catService.findOne(id);
    }
    updateCat(updateCatInput) {
        return this.catService.update(updateCatInput.id, updateCatInput);
    }
    removeCat(id) {
        return this.catService.remove(id);
    }
};
exports.CatResolver = CatResolver;
__decorate([
    (0, graphql_1.Mutation)(() => cat_entity_1.Cat),
    __param(0, (0, graphql_1.Args)('createCatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_input_1.CreateCatInput]),
    __metadata("design:returntype", void 0)
], CatResolver.prototype, "createCat", null);
__decorate([
    (0, graphql_1.Query)(() => [cat_entity_1.Cat], { name: 'cat' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => cat_entity_1.CatResponse, { name: 'cat' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => cat_entity_1.Cat),
    __param(0, (0, graphql_1.Args)('updateCatInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cat_input_1.UpdateCatInput]),
    __metadata("design:returntype", void 0)
], CatResolver.prototype, "updateCat", null);
__decorate([
    (0, graphql_1.Mutation)(() => cat_entity_1.Cat),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatResolver.prototype, "removeCat", null);
exports.CatResolver = CatResolver = __decorate([
    (0, graphql_1.Resolver)(() => cat_entity_1.Cat),
    __metadata("design:paramtypes", [cat_service_1.CatService])
], CatResolver);
//# sourceMappingURL=cat.resolver.js.map
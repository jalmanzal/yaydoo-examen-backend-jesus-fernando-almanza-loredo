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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
const moment = require("moment");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(user) {
        console.log(user);
        const newUser = await this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    async getUsers() {
        return await this.userRepository.find();
    }
    async getUser(id) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const calculateAge = (date) => {
            const bornDate = moment(date, 'DD/MM/YYYY');
            console.log(bornDate);
            const now = moment(Date.now());
            return now.diff(bornDate, 'years');
        };
        return Object.assign(Object.assign({}, user), { age: calculateAge(user.bornDate) });
    }
    async updateUser(id, { name, email, password, address, phone, bornDate }) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        user.name = name;
        user.email = email;
        user.password = password;
        user.address = address;
        user.phone = phone;
        user.bornDate = bornDate;
        return this.userRepository.save(user);
    }
    async deleteUser(id) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.userRepository.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
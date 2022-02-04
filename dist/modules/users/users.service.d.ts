import { Repository } from 'typeorm';
import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<any>;
    updateUser(id: number, { name, email, password, address, phone, bornDate }: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
}

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(user: CreateUserDto): Promise<User>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    updateUser(id: number, data: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
}

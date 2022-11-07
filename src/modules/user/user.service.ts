import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

import { TokenService } from "../token/token.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private readonly tokenService: TokenService,
  ) {}

  async create({
    firstName,
    lastName,
    email,
    username,
    attributes,
    credentials,
  }: CreateUserDto) {
    const token = await this.tokenService.getToken();
    console.log(token);

    // try {
    //   await this.httpService.post(
    //     `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users`,
    //     JSON.stringify({
    //       firstName,
    //       lastName,
    //       email,
    //       username,
    //       attributes,
    //       credentials,
    //     }),
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   );
    //   const responseUser = await this.httpService.get(
    //     `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users?username=${dto.username}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   );
    //   return responseUser.data[0];
    // } catch (error) {
    //   console.log(error);
    // }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

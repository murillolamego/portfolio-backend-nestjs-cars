import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { TokenService } from "../token/token.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [HttpModule],

  controllers: [UserController],

  providers: [UserService, TokenService],
})
export class UserModule {}

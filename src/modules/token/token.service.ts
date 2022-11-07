import { catchError, lastValueFrom, map } from "rxjs";

import { HttpService } from "@nestjs/axios";
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";

export interface ITokenResponse {
  access_token: string;
}

@Injectable()
export class TokenService {
  constructor(private readonly httpService: HttpService) {}

  async getToken(): Promise<string> {
    try {
      const response = this.httpService
        .post<ITokenResponse>(
          `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
          {
            grant_type: "client_credentials",
            client_id: process.env.KEYCLOAK_CLIENT,
            client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        )
        .pipe(map((response) => response.data.access_token))
        .pipe(
          catchError(() => {
            throw new ForbiddenException("API unavailable");
          }),
        );
      return await lastValueFrom(response);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

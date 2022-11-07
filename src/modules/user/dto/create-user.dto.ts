export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  attributes: {
    a: string;
  };
  credentials: {
    b: string;
  };
}

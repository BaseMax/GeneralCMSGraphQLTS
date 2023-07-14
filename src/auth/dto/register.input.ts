import { PartialType } from "@nestjs/graphql";
import { CreateUserInput } from "src/user/dto/create-user.input";

export class RegisterInput extends PartialType(CreateUserInput){};
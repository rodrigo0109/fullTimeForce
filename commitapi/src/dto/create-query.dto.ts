import { IsString, IsNotEmpty } from "class-validator";

export class CreateQueryDto {
    @IsString()
    @IsNotEmpty()
    owner: string;

    @IsString()
    @IsNotEmpty()
    repo: string;
}
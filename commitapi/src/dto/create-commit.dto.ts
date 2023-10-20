import { IsString, IsNotEmpty } from "class-validator";

export class CreateCommitDto {
    @IsString()
    @IsNotEmpty()
    sha: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    repo: string;

    @IsString()
    @IsNotEmpty()
    avatar: string;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    commitUrl: string;

    @IsString()
    @IsNotEmpty()
    message: string;

    @IsString()
    @IsNotEmpty()
    date: string;

/*     @IsString()
    @IsNotEmpty()
    index: number; */
}
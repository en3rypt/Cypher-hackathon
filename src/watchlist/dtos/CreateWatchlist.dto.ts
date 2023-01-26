import { IsAlphanumeric, IsNotEmpty, Length } from "class-validator";

export class createWatchlistDto {
    @IsNotEmpty({message:'Missing field name'})
    @IsAlphanumeric()
    @Length(5, 20)
    name:string;
}
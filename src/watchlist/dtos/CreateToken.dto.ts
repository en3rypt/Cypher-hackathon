import { ArrayMinSize, IsNotEmpty } from "class-validator";

export class CreateTokenDto{
    @IsNotEmpty({message:'Missing field tokensToBeAdded'})
    @ArrayMinSize(1,{message:'Please provide at least one token to add'})
    tokensToBeAdded:Array<string>;
}
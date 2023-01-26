import { ArrayMinSize, IsNotEmpty } from "class-validator";

export class DeleteTokenDto{
    @IsNotEmpty({message:'Missing field tokensToBeAdded'})
    @ArrayMinSize(1,{message:'Please provide at least one token to add'})
    tokensToBeDeleted:Array<string>;
}
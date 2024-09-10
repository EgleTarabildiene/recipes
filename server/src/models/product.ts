import { RowDataPacket } from "mysql2";

export interface Product extends RowDataPacket{
    id?: number;
    name: string;
    part: string;
    count: string;
    meals_id:number;
    users_id:number;
   
    file:string;
    
}
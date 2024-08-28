import { pool } from "../db/connect";
import { Product } from "../models/product";


export class ProductsController{
       static async getAll( req:any, res:any){
        const sql="Select * FROM products";

const [result]=await pool.query<Product[]>(sql);

      res.json(result);
    }

   static async getProduct( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM products WHERE id=? ";
        const [result]=await pool.query<Product[]>(sql,[req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       }




 static async insert(req:any, res:any){
const sql="INSERT INTO products (name, part, count) VALUES ( ?, ?, ? )";
        await pool.query(sql, [req.body.name, req.body.part, req.body.count]);
       res.status(201).json({
            "success":true
        })
    }


 static async update(req:any, res:any){
        const sql="UPDATE products SET name=?, part=?, count=? WHERE id=?";
 
  try{
            await pool.query(sql, [req.body.name, req.body.part, req.body.count, req.body.id]);
        
   res.json({
            "success":true
            });
        }catch(error){
            res.status(500).json({
                'text':'Įvyko atnaujinimo klaida'
            });
        }
        
    }

    static async delete(req:any, res:any){
        const sql="DELETE FROM products WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
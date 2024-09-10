import { pool } from "../db/connect";
import { Product } from "../models/product";


export class ProductsController{
       static async getAll( req:any, res:any){
        const sql="Select * FROM products";

const [result]=await pool.query<Product[]>(sql);

      res.json(result);
    }


 static async filterProducts( req:any, res:any){
        if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM products WHERE name like ?";
        const [result]=await pool.query<Product[]>(sql, ["%"+req.params.filter+"%"]);
        res.json(result);
    }
    


    
    static async filterByMeal(req: any, res: any) {
   if (req.user.type > 2) {
      return res.status(400).json({
         text: "Neturite teisiu"
      });
   }
const sql = `
       SELECT p.* FROM products p
      LEFT JOIN meals m ON p.meals_id = m.id 
      WHERE m.id = ?
   `;
   const [result] = await pool.query<Product[]>(sql, [req.params.mealId]);
   res.json(result);
}


    
    static async myMeal(req: any, res: any) {
   if (req.user.type > 2) {
      return res.status(400).json({
         text: "Neturite teisiu"
      });
   }
const sql = `
    SELECT p.* FROM products p
      LEFT JOIN users u ON p.users_id = u.id 
      WHERE u.id = ?
   `;
   const [result] = await pool.query<Product[]>(sql, [req.params.userId]);
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
    console.log(req.body);

 if (!req.file) {
        return res.status(400).json({
            'error': 'File not provided'
        });
    }


     const url=req.protocol+"://"+req.get("host")+"/img/"+req.file.filename ;
const sql="INSERT INTO products (name, part, count, meals_id, file) VALUES ( ?, ?, ?, ?, ?)";
        
 try {
        await pool.query(sql, [req.body.name, req.body.part, req.body.count, req.body.meals_id, url]);
        res.status(201).json({
            "success": true
        });
    } catch (error) {
        res.status(500).json({
            'error': 'Failed to insert product'
        });
    }
}


 static async update(req:any, res:any){
       if (!req.file) {
        return res.status(400).json({
            'error': 'File not provided'
        });
    }


     const url=req.protocol+"://"+req.get("host")+"/img/"+req.file.filename ; 
    
    const sql="UPDATE products SET name=?, part=?, count=?, meals_id=?, file=? WHERE id=?";
 
  try{
            await pool.query(sql, [req.body.name, req.body.part, req.body.count, req.body.meals_id, req.body.id]);
        
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
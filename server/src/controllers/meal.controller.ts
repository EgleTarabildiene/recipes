import { pool } from "../db/connect";
import { Meal } from "../models/meal";



export class MealsController{
    static async getAll( req:any, res:any){
        if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM meals";
        const [result]=await pool.query<Meal[]>(sql);
        res.json(result);
    }

    static async filterMeals( req:any, res:any){
        if (req.user.type>2){
            return res.status(400).json({
                text:"Neturite teisiu"
            })
        }
        const sql="SELECT * FROM meals WHERE name like ?";
        const [result]=await pool.query<Meal[]>(sql, ["%"+req.params.filter+"%"]);
        res.json(result);
    }
    

    static async getMeal( req:any, res:any){
        console.log(req.params.id);
        const sql="SELECT * FROM meals WHERE id=? ";
        const [result]=await pool.query<Meal[]>(sql,[req.params.id]);
        if (result.length==0){
            res.status(404).json({
                'text':'Pateiktas įrašas nerastas'
            });
        }else{
            res.json(result[0]);
        }
       
    }

    

    static async insert(req:any, res:any){

    

        const sql="INSERT INTO meals (name) VALUES ( ? )";
        await pool.query(sql, [req.body.name]);
        res.status(201).json({
            "success":true
        })
    }

    static async update(req:any, res:any){
        const sql="UPDATE meals SET name=? WHERE id=?";

    

        try{
            await pool.query(sql, [req.body.name, req.body.id]);
        
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
        const sql="DELETE FROM meals WHERE id=?";
        await pool.query(sql, [req.params.id]);
        res.json({
            "success":true
        })
    }
}
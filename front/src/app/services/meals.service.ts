import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http:HttpClient) { }





    public getMeals(){
    return this.http.get<Meal[]>('http://localhost:4999/meals/');
  }

  public getFiltredMealts(filter:String){
    return this.http.get<Meal[]>('http://localhost:4999/meals/filter/'+filter);
  }

  public getMeal(id:number){
    return this.http.get<Meal>('http://localhost:4999/meals/'+id);
  }

  public addMeal(meal:Meal){
    return this.http.post('http://localhost:4999/meals/',meal);
  }

  public updateMeal(meal:Meal){
    return this.http.put('http://localhost:4999/meals/',meal);
  }

  public deleteMeal(id:number){
    return this.http.delete('http://localhost:4999/meals/'+id);
  }
}


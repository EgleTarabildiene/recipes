import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, RouterModule, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  public users:User[]=[];

  private loadData(){
    this.usersService.getUsers().subscribe({
      next:(users)=>{
        this.users=users;
        console.log(this.users[0]);
      }
    });
  }

  constructor (private usersService:UsersService){
    this.loadData();

  }

  public onDeleteClick(id:number){
    this.usersService.deleteUser(id).subscribe({
      next:(result)=>{
        this.loadData();
      }
    })
  }

}
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreateUserService } from '../create-user.service';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {

  users: any = [];
  constructor(private user: CreateUserService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.user.getUser().subscribe(
      (data)=>{
        this.users = data
      }
    )
    console.log(this.users);
  }

  delete(id){
    this.user.deleteUser(id).subscribe(
      (data)=>{
        console.log(data);
        alert("deleted");
        this.getUser();
      }
      );
  }

  updateUser(id){
   // console.log("id is:"+ id);
    this.route.navigate(['/update',id]);
  }
}
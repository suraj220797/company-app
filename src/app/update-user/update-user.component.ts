import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../create-user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userModel: any;
  user_id;

  constructor(private user: CreateUserService, private activatedRoute: ActivatedRoute, private route: Router ) { 
  }

  ngOnInit(): void {
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.user.getUserById(this.user_id).subscribe((data)=>{
      console.log("data" + data);
      this.userModel = data;
    })
  }

  updateUser(){
    this.user.updateUser(this.user_id, this.userModel).subscribe((data)=>{
      console.log(data);
      alert("updated");
      this.route.navigate(['']);
    });

    
  }

  deleteUser(){
    this.user.deleteUser(this.user_id).subscribe((data)=>{
      console.log(data);
      alert("deleted");
      this.route.navigate(['']);
    })
  }


}

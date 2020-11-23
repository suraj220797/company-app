import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateUserService } from '../create-user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  userModel: any = {};
  constructor(private user: CreateUserService, private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onSubmit(form) {
    //alert(myForm);
    console.log(form.value)
    console.log(this.userModel )
    this.user.postUser(this.userModel).subscribe((result) => {
      console.log('Working' + result);
      alert("user added");
      this.route.navigate(['']);
    });
  }
}

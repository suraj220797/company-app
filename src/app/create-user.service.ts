import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  url = "//localhost:8000/api/list/";
  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(this.url);
  }

  postUser(data: any){
    return this.http.post(this.url, data);
  }

  deleteUser(id){
    return this.http.delete('//localhost:8000/api/listupdate/'+id);
  }

  updateUser(id,data: any){
    console.log("here")
    console.log(data)
    return this.http.put('//localhost:8000/api/listupdate/'+id+'/',data);
  }

  getUserById(id){
    return this.http.get('//localhost:8000/api/listupdate/'+id);
  }
}

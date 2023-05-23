import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) {

    
   }

  postdata(data:any)
  {
return this.http.post('http://localhost:3000/posts',data)
  }
  getdata()
  {
    return this.http.get('http://localhost:3000/posts')
  }
  deleteda(id:any)
  {
return this.http.delete(`http://localhost:3000/posts/${id}`)
  }
update(data:any,id:any)
{
return this.http.put('http://localhost:3000/posts/'+id,data)
}
}

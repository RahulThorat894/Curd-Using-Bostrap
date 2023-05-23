import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpService } from 'src/app/service/emp.service';
import { UpdateComponent } from 'src/app/service/update/update.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

   empdata:any;
  constructor(private http:EmpService,public dialog: MatDialog){

  {
    this.http.getdata().subscribe(res => {

       this.empdata=res;
       
    })
  }
}
deletedata(id:any)
{
  this.http.deleteda(id).subscribe(res => {

   })
}
openDialog(data2:any) {
  this.dialog.open(UpdateComponent, {
    data: {
     name:data2.name,
     phone:data2.phone,
     email:data2.email,
     password:data2.password,
     id:data2.id

    },
  });
}
View(data3:any) {
  this.dialog.open(ViewComponent, {
    data: {
     name:data3.name,
     phone:data3.phone,
     email:data3.email,
     password:data3.password,
     id:data3.id

    },
  });
}
}





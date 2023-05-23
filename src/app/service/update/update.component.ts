import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { EmpService } from '../emp.service';

export interface DialogData {
  name: any;
  phone: any;
  email: any;
  password: any;
  id: any;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http: EmpService
  ) {}

  fromvalue = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  updateda() {
    this.http.update(this.fromvalue.value, this.data.id).subscribe((res) => {});
  }
}

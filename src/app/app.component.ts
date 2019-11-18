import { Component, OnInit } from '@angular/core';
import { SmartGarbageService } from './smart-garbage.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SmartGarbage';
  student;
  garbageForm : FormGroup;

  constructor(private smartGarbageService: SmartGarbageService) {}

  ngOnInit() {
    this.getData();
    this.createForm();
  }

  getData() {
    this.smartGarbageService.get().subscribe((data: any) => {
      console.log(data);
      this.student = data;
    });
  }

  createForm() {
    this.garbageForm = new FormGroup({
      houseAddress: new FormControl(''),
      zipCode: new FormControl(''),
      landfillQuantity: new FormControl(''),
      recycledQuantity: new FormControl(''),
      dateControl: new FormControl(''),
    })

    console.log(this.garbageForm);
  }

  submitForm() {
    let obj = {};
    obj['houseAddress'] = this.garbageForm.controls.houseAddress.value;
    obj['zipCode'] = this.garbageForm.controls.zipCode.value;
    obj['landfillQuantity'] = this.garbageForm.controls.landfillQuantity.value;
    obj['recycledQuantity'] = this.garbageForm.controls.landfillQuantity.value;
    obj['date'] = this.garbageForm.controls.dateControl.value;
    console.log(obj)
    this.smartGarbageService.postData(obj).subscribe((data: any) => {
      this.getData();
      this.garbageForm.reset();
    })
  }  
}
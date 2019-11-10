import { Component, OnInit } from '@angular/core';
import { SmartGarbageService } from './smart-garbage.service';
import { FormGroup, FormControl } from '@angular/forms';

interface Country {
  HouseId: number;
  HouseAddress: string;
  ZipCode: string;
  RecycleQuantity: number;
  LandfillQuantity: number;
  Date: string;
}

const COUNTRIES: Country[] = [
  {
    HouseId: 1111,
    HouseAddress: 'Oakview',
    ZipCode: 'T23',
    RecycleQuantity: 111,
    LandfillQuantity: 2222,
    Date: 'November'
  },
  {
    HouseId: 1111,
    HouseAddress: 'Oakview',
    ZipCode: 'T23',
    RecycleQuantity: 111,
    LandfillQuantity: 2222,
    Date: 'November'
  } /*,
  {
    address: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    address: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }*/
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SmartGarbage';
  student;
  garbageForm : FormGroup;
  countries = COUNTRIES;
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
    obj['landfillQuantity'] = this.garbageForm.controls.landfillQuantity.value;
    obj['dateControl'] = this.garbageForm.controls.dateControl.value;

    this.smartGarbageService.postData(obj).subscribe((data: any) => {

    })
  }

   
}

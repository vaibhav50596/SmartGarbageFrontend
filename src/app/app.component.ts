import { Component } from '@angular/core';
import { SmartGarbageService } from './smart-garbage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartGarbage';
  student;
  
  constructor(private smartGarbageService: SmartGarbageService) { }

  ngOnInit() {
    this.smartGarbageService.get().subscribe((data: any) => {
      console.log(data);
      this.student = data;
    })
  }

}

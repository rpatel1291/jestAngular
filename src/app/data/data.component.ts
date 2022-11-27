import { Component, OnInit } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  serviceData: any;
  errorMessage: any;
  greeting: any;

  constructor(private fakeService: FakeService) {}

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData() {
    this.fakeService.getDataV1().subscribe({
      next: (data) => {
        this.serviceData = data;
        this.setGreeting();
      },
      error: (err) => {
        this.errorMessage = err.statusText;
      },
      complete: () => {
        console.log('finished');
      },
    });
  }
  setGreeting() {
    if (this.serviceData.time < 10) {
      this.greeting = 'good morning';
    } else if (this.serviceData.time < 20) {
      this.greeting = 'good day';
    } else {
      this.greeting = 'good evening';
    }
  }
}

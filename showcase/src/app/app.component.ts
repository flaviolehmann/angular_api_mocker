import { Component } from '@angular/core';
import Car from './models/car.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CarMockerService } from './services/car-mocker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  apiResponse = 'Make some request!';
  logger = '...';
  form: FormGroup;

  car = new Car();

  constructor(
    private carService: CarMockerService
  ) { }

  onCreate(): void {
    this.carService.create(this.car).subscribe(response => {
      this.apiResponse = JSON.stringify(response);
      this.logger = 'New car saved!';
      this.car = new Car();
    });
  }

  onReadAll(): void {
    this.carService.index().subscribe(response => {
      this.apiResponse = JSON.stringify(response);
      this.logger = 'All cars listed!';
    })
  }

  onReadOne(): void {
    this.carService.show(this.car.id).subscribe(response => {
      this.apiResponse = JSON.stringify(response);
      this.logger = 'Car showed!';
    });
  }

  onUpdate(): void {
    this.carService.update(this.car).subscribe(response => {
      this.apiResponse = JSON.stringify(response);
      this.logger = 'Car updated!';
      this.car = new Car();
    });
  }

  onDelete(): void {
    this.carService.destroy(this.car.id).subscribe(response => {
      this.apiResponse = JSON.stringify(response);
      this.logger = 'Car deleted!';
    })
  }

}

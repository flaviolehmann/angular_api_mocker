import { Injectable } from '@angular/core';
import { MockerService } from './mocker.service';
import Car from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarMockerService extends MockerService<Car> { }

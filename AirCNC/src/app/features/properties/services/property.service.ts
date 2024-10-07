import { Injectable, signal } from '@angular/core';
import { Property } from '../interfaces/property.interface';
import { CreateResponse } from '../interfaces/create-response';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  propertySignal = signal<Property>({
    title: '',
    address: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    startDate: '',
    endDate: '',
    description: '',
    owner_id: ''
  })


  create(property:Property): CreateResponse{
    const propertySrt = JSON.stringify(property);
    localStorage.setItem(property.title, propertySrt);
    return{
      success: true
    }
  }
}

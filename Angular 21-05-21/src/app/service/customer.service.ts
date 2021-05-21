import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'http://localhost:9090/api/customers';


  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  createCustomer(customer:Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl+ '/' + id);
  }

  deleteCustomerById(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(this.baseUrl + '/' + id);

  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.baseUrl + '/' + customer.id , customer);
  }
}

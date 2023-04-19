import { Injectable } from '@angular/core'; 
import {Observable} from "rxjs"; 
import {HttpClient} from "@angular/common/http"; 
import { Company } from './models'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class CompanyService { 
 
  BASE_URL = 'http://127.0.0.1:8000/api' 
 
 
  constructor(private client: HttpClient) { } 
 
  getCompanies(): Observable<Company[]> { 
    return this.client.get<Company[]> ( 
      `${this.BASE_URL}/companies`
    ) 
  } 
 
  getCompany(company_id: number): Observable<Company[]> { 
    return this.client.get<Company[]>( 
      `${this.BASE_URL}/companies/${company_id}` 
    ) 
  } 
 
 
  createCompany(companyName: string): Observable<Company> { 
    // console.log(companyName) 
    return this.client.post<Company>( 
      `${this.BASE_URL}/companies`, 
      {Name: companyName} 
    ) 
  } 
 
  deleteCompany(company_id: number): Observable<any> { 
    return this.client.delete( 
      `${this.BASE_URL}/companies/${company_id}`
    ) 
  } 
 
  updateCompany(company_id:number,company_name:string): Observable<any>{ 
    return this.client.put( 
      `${this.BASE_URL}/companies/${company_id}`, 
      {name: company_name} 
    ) 
  } 
}
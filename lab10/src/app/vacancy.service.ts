import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Vacancy } from './models'; 
import { Observable } from 'rxjs'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class VacancyService { 
  BASE_URL = 'http://127.0.0.1:8000/api' 
 
 
  constructor(private client: HttpClient) { } 
 
  getVacancies(): Observable<Vacancy[]> { 
    return this.client.get<Vacancy[]>( 
      `${this.BASE_URL}/vacancies`
    ) 
  } 
 
  getVacancy(vacancy_id: number): Observable<Vacancy[]> { 
    return this.client.get<Vacancy[]>( 
     `${this.BASE_URL}/vacancies/${vacancy_id}`
    ) 
  } 
 
 
  getVacanciesOfCompany(company_id: number): Observable<Vacancy[]> { 
    return this.client.get<Vacancy[]>( 
     `${this.BASE_URL}/companies/${company_id}/vacancies` 
    ) 
  } 
 
 
 
 
  createVacancy(vacancyId: string, companyId : string): Observable<Vacancy> { 
    return this.client.post<Vacancy>( 
      `${this.BASE_URL}/vacancies`, 
      {name: vacancyId, company : companyId} 
    ) 
  } 
 
  deleteVacancy(vacancy_id: number): Observable<any> { 
    return this.client.delete( 
      `${this.BASE_URL}/vacancies/${vacancy_id}` 
    ) 
  } 
  updateVacancy(vacancy_id:number,vacancy_name:string): Observable<any>{ 
    return this.client.put( 
      `${this.BASE_URL}/companies/${vacancy_id}`, 
      {name:vacancy_name} 
    ) 
  } 
 
}
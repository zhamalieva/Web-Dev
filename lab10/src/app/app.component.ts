import { Component, OnInit } from '@angular/core'; 
import { Company, Vacancy } from './models'; 
import { CompanyService } from './company.service'; 
import { VacancyService } from './vacancy.service'; 
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
  title = 'hhfront'; 
 
  newCompanyName = '' 
 
  newVacancyName = '' 
 
  companyId = '' 
 
  companies: Company[] = [] 
 
  newCompany: number = 0 
 
  vacancies: Vacancy[] = [] 
 
  newVacancy: number = 0 
 
  constructor(private companyService: CompanyService,private vacancyService: VacancyService){} 
 
  ngOnInit() { 
    this.getCompanies(); 
  } 
 
  getCompanies() { 
    this.companyService.getCompanies().subscribe((companies) => { 
      this.companies = companies; 
    }); 
  } 
 
  addCompany() { 
    this.companyService.createCompany(this.newCompanyName).subscribe((company) => { 
      // console.log(this.newCompanyName) 
      this.companies.push(company); 
      this.newCompany = 0; 
    }); 
  } 
 
  deleteCompany(company_id: number) { 
    this.companyService.deleteCompany(company_id).subscribe((data) => { 
      this.companies = this.companies.filter((company) => company.id !== company_id); 
    }); 
  } 
 
  updateCompany(company_id:number){ 
    this.companyService.updateCompany(company_id,this.newCompanyName).subscribe((data) => { 
      this.getCompanies() 
    }) 
  } 
 
   
 
 
  getVacancies() { 
    this.vacancyService.getVacancies().subscribe((vacancies) => { 
      this.vacancies = vacancies; 
    }); 
  } 
 
  addVacancy() { 
    this.vacancyService.createVacancy(this.newVacancyName, this.companyId).subscribe((vacancy) => { 
      this.vacancies.push(vacancy); 
      this.newVacancy = 0; 
    }); 
  } 
 
  deleteVacancy(vacancy_id: number) { 
    this.vacancyService.deleteVacancy(vacancy_id).subscribe((data) => { 
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== vacancy_id); 
    }); 
  } 
 
  getVacanciesOfCompany(company_id:number) { 
    this.vacancyService.getVacanciesOfCompany(company_id).subscribe((vacancies) => { 
      this.vacancies = vacancies; 
    }); 
  } 
 
  updateVacancy(vacancy_id:number){ 
    this.vacancyService.updateVacancy(vacancy_id,this.newVacancyName).subscribe((data) => { 
      this.getVacancies() 
    }) 
  } 
 
 
}
from django.contrib import admin 
from django.urls import include, path 
 
from api import views 
 
 
urlpatterns = [ 
    path('companies', views.company_list), 
    path('companies/<int:company_id>', views.company_detail), 
    path('companies/<int:company_id>/vacancies', views.vacancies_of_company), 
    path('vacancies', views.vacancy_list), 
    path('vacancies/<int:vacancy_id>', views.vacancy_detail), 
]
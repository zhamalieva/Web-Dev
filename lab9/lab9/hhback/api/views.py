from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta
# import requests

from api.models import Company, Vacancy



def list_of_companies(request):
    companies = Company.objects.all()
    companies = [p.to_json() for p in companies]
    print(companies)
    return JsonResponse(companies,safe=False,json_dumps_params={'indent':2})

def company_detail(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(company.to_json(),safe=False)


def list_of_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json,safe=False)

def vacancy_detail(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse(vacancy.to_json(),safe=False)

def vacancies_of_company(request,company_id):
    vacancies = []
    for vacancy in Vacancy.objects.all():
        vacancies.append(vacancy.to_json())

    company = Company.objects.get(pk = company_id)

    matching_vacancies = []
    for vacancy in vacancies:
        if vacancy['company'] == company.id:
            matching_vacancies.append(vacancy)

    if matching_vacancies.count != 0:
        return JsonResponse(matching_vacancies,safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Vacancies not found'})

def top_ten_vacancies(request):
    vacancies = []
    for vacancy in Vacancy.objects.all():
        vacancies.append(vacancy.to_json())
    vacancies = sorted(vacancies,key = lambda x : x['salary'],reverse=True)
    if(vacancies.count != 0):
        return JsonResponse(vacancies[0:11],safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Error404'})





    

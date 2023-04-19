from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.shortcuts import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})

@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})

@api_view(['GET'])
def vacancies_of_company(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    vacancies = Vacancy.objects.filter(company=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

class CompanyList(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetail(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk):
        company = self.get_object(pk)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        company = self.get_object(pk)
        company.delete()
        return Response({'deleted': True})

# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# from api.models import Company
# from api.serializers import CompanySerializer
# from api.models import Vacancy
# from api.serializers import VacancySerializer


# @api_view(['GET', 'POST'])
# def company_list(request):
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         serializer = CompanySerializer(companies, many=True)
#         return Response(serializer.data)

#     if request.method == 'POST':
#         serializer = CompanySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def vacancy_list(request):
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.all()
#         serializer = VacancySerializer(vacancies, many=True)
#         return Response(serializer.data)

#     if request.method == 'POST':
#         serializer = VacancySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def company_detail(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)
#     except company.DoesNotExist as e:
#         return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

#     if request.method == 'GET':
#         serializer = CompanySerializer(company)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CompanySerializer(instance=company, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         company.delete()
#         return Response({'deleted': True})

# def vacancy_detail(request, vacancy_id):
#     try:
#         vacancy = Vacancy.objects.get(id=vacancy_id)
#     except vacancy.DoesNotExist as e:
#         return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

#     if request.method == 'GET':
#         serializer = VacancySerializer(vacancy)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = VacancySerializer(instance=vacancy, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         vacancy.delete()
#         return Response({'deleted': True})
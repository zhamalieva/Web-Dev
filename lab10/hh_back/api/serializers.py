from api.models import Company
from api.models import Vacancy
from rest_framework import serializers

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name')

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id','name','company')
        
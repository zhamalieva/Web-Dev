from django.db import models
class Company(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField(max_length = 255)
    city = models.CharField(max_length = 255)
    address = models.TextField(max_length = 255)
    def to_json(self):
        return{
            'name':self.name,
            'description': self.name,
            'city': self.city,
            'address': self.address,
        }
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


    def to_json(self):
        return{
            'name':self.name,
            'description':self.description,
            'salary':self.salary,
            'company':self.company.id,


        }
    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

# Create your models here.

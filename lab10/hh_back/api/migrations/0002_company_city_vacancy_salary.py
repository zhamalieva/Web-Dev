from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='city',
            field=models.CharField(default='', max_length=10000),
        ),
        migrations.AddField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(default=0),
        ),
    ]
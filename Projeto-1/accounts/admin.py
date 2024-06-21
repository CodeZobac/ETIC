from django.contrib import admin
from .models import Profile
from django.db.models import DateField, ImageField
from django.http import HttpResponse
import csv
# Register your models here.


def export_to_csv(modeladmin, request, queryset):
    opts = modeladmin.model._meta
    fields = opts.get_fields()
    fields = [field for field in fields if not isinstance(field, DateField) and not isinstance(field, ImageField)]
    response = HttpResponse(content_type='text/csv')
    content_disposition = f"attachments;filename={opts.verbose_name}.csv"
    response['Content-Disposition'] = content_disposition
    writer = csv.writer(response)
    writer.writerow(field.verbose_name for field in fields)

    for obj in queryset:
        data_row = []
        for field in fields:
            value = getattr(obj, field.name)
            if isinstance(value, str):
                value = value.encode('utf-8')
            data_row.append(value)
        writer.writerow(data_row)
    return response

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'photo']
    actions = [export_to_csv]


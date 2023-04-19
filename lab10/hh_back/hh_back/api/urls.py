from django.contrib import admin
from django.urls import path
from . import views
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('company-create/', views.company_create),
    path('company-update/<int:company_id>/', views.company_update),
    path('company-delete/<int:company_id>/', views.company_delete),
    path('companies/<int:company_id>/vacancies/', views.vacancy_by_company),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancy-create/', views.vacancy_create),
    path('vacancy-update/<int:vacancy_id>/', views.vacancy_update),
    path('vacancy-delete/<int:vacancy_id>/', views.vacancy_delete),
    path('vacancies/top-ten/', views.vacancies_top_ten)
]

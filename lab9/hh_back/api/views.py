from django.shortcuts import render
from api.models import Company
from api.models import Vacancy
from django.http import HttpResponse, JsonResponse

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def get_company_by_id(request, company_id):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    for c in companies_json:
        if company_id == c["id"]:
            return JsonResponse(c)
    return JsonResponse({'error' : 'Company not found'})

# def get_vacancy_by_company(request, company_id):
#     company = get_company_by_id(request, company_id)
#     vacancies = Vacancy.objects.
#     vacancies_json = [c.to_json() for c in vacancies]
#     # vacancy_by_company = []
#     for v in vacancies :
#         vacancy_by_company.append(v[company])
#     return vacancy_by_company

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy_by_id(request, vacancy_id):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    for v in vacancies_json:
        if vacancy_id == v["id"]:
            return JsonResponse(v)
    return JsonResponse({'error' : 'Vacancy not found'})

def get_top_ten(request):C:\Users\rymku\Desktop\Kbtu\web_dev\lab9\hh_back
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    # sorted_obj = dict(vacancies_json)
    # sorted_obj['predictions'] = sorted(vacancies_json['salary'], key=lambda x: x['salary'], reverse=True)
    return JsonResponse(vacancies_json, safe=False)
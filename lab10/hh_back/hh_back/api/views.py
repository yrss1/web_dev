from django.shortcuts import render
from api.models import Company
from api.models import Vacancy
from django.http import HttpResponse, JsonResponse
from .serializers import CompanySerializer
from .serializers import VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response


# company
@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def company_detail(request, company_id):
    companies = Company.objects.get(id=company_id)
    serializer = CompanySerializer(companies, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def company_create(request):
    serializer = CompanySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def company_update(request, company_id):
    company = Company.objects.get(id=company_id)
    serializer = CompanySerializer(instance=company, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def company_delete(request, company_id):
    company = Company.objects.get(id=company_id)
    company.delete()

    return Response("deleted!")


# vacancy
@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def vacancy_detail(request, vacancy_id):
    vacancies = Vacancy.objects.get(id=vacancy_id)
    serializer = VacancySerializer(vacancies, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def vacancy_create(request):
    serializer = VacancySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def vacancy_update(request, vacancy_id):
    vacancy = Vacancy.objects.get(id=vacancy_id)
    serializer = VacancySerializer(instance=vacancy, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def vacancy_delete(request, vacancy_id):
    vacancy = Vacancy.objects.get(id=vacancy_id)
    vacancy.delete()

    return Response("deleted!")


@api_view(['GET'])
def vacancy_by_company(request, company_id):
    vacancies = Vacancy.objects.filter(company=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
#
# def get_vacancy_by_company(request, id):
#     vacancies = Vacancy.objects.filter(company_id=id)
#     vacancies_json = [v.to_json() for v in vacancies]
#     return JsonResponse(vacancies_json)
#


@api_view(['GET'])
def vacancies_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
# def get_top_ten(request):
#     vacancies = Vacancy.objects.order_by('-salary')[:10]
#     vacancies_json = [v.to_json() for v in vacancies]
#     # sorted_obj = dict(vacancies_json)
#     # sorted_obj['predictions'] = sorted(vacancies_json['salary'], key=lambda x: x['salary'], reverse=True)
#     return JsonResponse(vacancies_json, safe=False)

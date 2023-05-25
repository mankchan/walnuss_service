from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from questions.models import Questions
from questions.serializers import QuestionSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def questions_list(request):
    if request.method == 'GET':
        questions = Questions.objects.all()
        
        title = request.query_params.get('title', None)
        if title is not None:
            questions = questions.filter(title__icontains=title)
        
        question_serializer = QuestionSerializer(questions, many=True)
        return JsonResponse(question_serializer.data, safe=False)
    elif request.method == 'POST':
        question_data = JSONParser().parse(request)
        question_serializer = QuestionSerializer(data=question_data)
        if question_serializer.is_valid():
            question_serializer.save()
            return JsonResponse(question_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(question_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Questions.objects.all().delete()
        return JsonResponse({'message': '{} Questions were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
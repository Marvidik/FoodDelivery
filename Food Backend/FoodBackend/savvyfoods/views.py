from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .models import Junks,Foods
from .serializer import JunkSerializer,FoodsSerializer
# Create your views here.



@api_view(['GET'])
def junks(request):
    data=Junks.objects.all()

    serializer=JunkSerializer(instance=data, many=True)

    return Response({'junks': serializer.data}, status=status.HTTP_200_OK)

@api_view(['GET'])
def foods(request):
    data=Foods.objects.all()

    serializer=FoodsSerializer(instance=data, many=True)

    return Response({'junks': serializer.data}, status=status.HTTP_200_OK)
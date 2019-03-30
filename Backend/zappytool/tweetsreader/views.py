from django.shortcuts import render
from django.http import HttpResponse
from .models import Tweet
from rest_framework import viewsets
from tweetsreader.serializers import TweetSerializer
# Create your views here.


def home(request):
    tweet = Tweet.objects.all()
    for field in tweet:
        print('Tweet Body : ', field.body)
        print('Tweet Date : ', field.date)
    return HttpResponse("<h1>This URL Is Working</h1>")


class TweetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

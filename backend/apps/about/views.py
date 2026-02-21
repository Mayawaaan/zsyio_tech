from rest_framework import viewsets
from .models import AboutModel
from .serializers import AboutSerializer

from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny

class AboutViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    parser_classes = (JSONParser, MultiPartParser, FormParser)
    queryset = AboutModel.objects.all()
    serializer_class = AboutSerializer

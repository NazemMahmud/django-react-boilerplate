from django.urls import path
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet

router = DefaultRouter()
router.register("notes", NoteViewSet, basename="notes")
urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
]

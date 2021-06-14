from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()


class Note(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    # models.CASCADE means: if user is deleted, all related notes will be deleted
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True)

    # class Meta:
    #     app_label = 'applications.notes'

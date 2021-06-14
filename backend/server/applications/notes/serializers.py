from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    # allow to create/update only content field. Other fields will be read-only.
    class Meta:
        model = Note  # ?
        read_only_fields = ("id", "created_at", "created_by")
        fields = ("id", "created_at", "created_by", "content")

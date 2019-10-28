import graphene
from graphene_django.types import DjangoObjectType

from todo.models import TodoTask


class ToDoTaskType(DjangoObjectType):
    class Meta:
        model = TodoTask


class Query(object):
    all_todotasks = graphene.List(ToDoTaskType)

    def resolve_all_todotasks(self, info, **kwargs):
        return TodoTask.objects.all()


import graphene
from graphene_django.types import DjangoObjectType, ObjectType

from .models import TodoTask


# Create a GraphQL type for the todotask model
class TodoTaskType(DjangoObjectType):
    class Meta:
        model = TodoTask


# Create Input Object Types
class TodoTaskInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    description = graphene.String()


# Create mutations for todotask
class CreateTodoTask(graphene.Mutation):
    class Arguments:
        input = TodoTaskInput(required=True)

    ok = graphene.Boolean()
    todotask = graphene.Field(TodoTaskType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        todotask_instance = TodoTask(title=input.title, description=input.description)
        todotask_instance.save()
        return CreateTodoTask(ok=ok, todotask=todotask_instance)

class UpdateTodoTask(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = TodoTaskInput(required=True)

    ok = graphene.Boolean()
    todotask = graphene.Field(TodoTaskType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        todotask_instance = TodoTask.objects.get(pk=id)
        if todotask_instance:
            ok = True
            todotask_instance.title = input.title
            todotask_instance.description = input.description
            todotask_instance.save()
            return UpdateTodoTask(ok=ok, todotask=todotask_instance)
        return UpdateTodoTask(ok=ok, actor=None)


class Mutation(graphene.ObjectType):
    create_todotask = CreateTodoTask.Field()
    update_todotask = UpdateTodoTask.Field()


# Create a Query type
class Query(ObjectType):
    todo_task = graphene.Field(TodoTaskType, id=graphene.Int())
    todo_tasks = graphene.List(TodoTaskType)

    def resolve_todo_task(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return TodoTask.objects.get(pk=id)

        return None

    def resolve_todo_tasks(self, info, **kwargs):
        return TodoTask.objects.all()

schema = graphene.Schema(query=Query, mutation=Mutation)

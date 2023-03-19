import graphene
from graphene_django import DjangoObjectType
from apptodo.models import Project, Task
from users.models import User



class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Task
        fields = '__all__'


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Привет! Это практическое задание Горбунова Евгения по GraphQL")

    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    all_todos = graphene.List(TodoType)

    project_by_id = graphene.Field(ProjectType, id=graphene.Int(required=True))
    todo_by_id = graphene.Field(TodoType, id=graphene.Int(required=True))

    todo_by_title = graphene.List(TodoType, title=graphene.String(required=False))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todos(root, info):
        return Task.objects.all()

    def resolve_project_by_id(root, info, id):
        try:
            return Project.objects.get(id=id)
        except Project.DoesNotExist:
            return None

    def resolve_todo_by_id(root, info, id):
        try:
            return Task.objects.get(id=id)
        except Task.DoesNotExist:
            return None

    def resolve_todo_by_title(self, info, title=None):
        todos = Task.objects.all()
        if title:
            todos = todos.filter(title=title)
        return todos


class TodoMutation(graphene.Mutation):
    class Arguments:
        text = graphene.String(required=True)
        id = graphene.ID()

    todo = graphene.Field(TodoType)

    @classmethod
    def mutate(cls, root, info, text, id):
        todo = Task.objects.get(pk=id)
        todo.text = text
        todo.save()
        return TodoMutation(todo=todo)

class Mutation(graphene.ObjectType):
    update_todo = TodoMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
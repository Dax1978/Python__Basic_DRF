# Generated by Django 4.1.6 on 2023-02-11 08:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('WebToDo', '0004_rename_author_todo_user_project_users'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='WebToDo.project'),
        ),
    ]

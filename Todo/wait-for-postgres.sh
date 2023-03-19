#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD="root" psql -h "$host" -d "db_drf_backend" -U "root" -c '\q'; do
    >&2 echo "Postgres is unavailable - sleeping"
    sleep 1
done
>&2 echo "Postgres is up - executing command"

# Удаляем все старые данные
python manage.py flush --no-input
# Создаем и выполняем миграции
# python manage.py makemigrations --no-input
# python manage.py migrate

exec $cmd
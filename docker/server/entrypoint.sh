#!/bin/sh

APP_PORT=${APP_PORT:-8000}

cd /app/

/py/venv/bin/python manage.py makemigrations
/py/venv/bin/python manage.py migrate 
/py/venv/bin/python manage.py runserver 


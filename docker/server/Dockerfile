FROM python:3.11.0-alpine3.16

COPY server/requirements.txt /tmp/requirements.txt
COPY server/ ./app
COPY ./docker/server/entrypoint.sh .


WORKDIR /app

RUN python3 -m venv /py/venv

RUN echo "Upgrading pip" && \
    /py/venv/bin/pip install --upgrade pip && \
    apk add gcc libc-dev libffi-dev && \
    apk add mariadb-dev build-base  && \
    echo "Installing packages" && \
    /py/venv/bin/pip install -r requirements.txt 
# && \
# chmod +x ./docker/server/entrypoint.sh 

RUN /py/venv/bin/python manage.py makemigrations && \
    /py/venv/bin/python manage.py migrate 

CMD ["/py/venv/bin/python manage.py runserver"] 

# ENV PATH="/py/venv/bin:$PATH"


# ENTRYPOINT ["./docker/server/entrypoint.sh"]


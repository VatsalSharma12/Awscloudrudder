FROM python:3.10-slim-buster

WORKDIR /backend-flask

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt 

ENV FLASK_ENV=development

EXPOSE ${PORT}

COPY . .
 
CMD ["python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=4570"]

FRONTEND_URL="*" BACKEND_URL="*" docker container run --rm -p 4568:4568 -d backend-flask
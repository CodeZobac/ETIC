FROM python:3-slim

RUN pip install poetry

RUN poetry config virtualenvs.create false

WORKDIR /workspace

COPY . .

RUN poetry install

CMD poetry run python -m eticgpt.run run
FROM python:3.8-slim

RUN apt-get update && apt-get install -y python3-tk && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

CMD ["python3", "Euromilhoes.py"]

# Comandos para correr o docker
#xhost +local:docker
#docker build -t teste .
# docker run -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix --net=host teste

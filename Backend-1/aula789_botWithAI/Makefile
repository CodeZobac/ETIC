docker.install:
	docker-compose build --force-rm 

docker.run: docker.install
	docker-compose up

docker.import.model: docker.run
	docker-compose exec ollama ollama pull gemma:2b
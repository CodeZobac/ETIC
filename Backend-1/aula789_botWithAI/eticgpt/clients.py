import requests

from eticgpt.models import OllamaPrompt, OllamaResponse


class OllamaAPI:

    def __init__(self) -> None:
        self.base_url = "http://localhost:11434"
        self.prompt_endpoint = "api/generate"

    def prompt(self, prompt: OllamaPrompt) -> OllamaResponse:
        assert prompt

        response: requests.Response = requests.post(
            url=f"{self.base_url}/{self.prompt_endpoint}", data=prompt.model_dump_json()
        )

        response.raise_for_status()

        return OllamaResponse(
            done=response.json().get("done", False),
            response=response.json().get("response", None),
        )

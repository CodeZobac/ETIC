from typing import Literal
from pydantic import BaseModel


class OllamaPrompt(BaseModel):

    model: Literal["gemma:2b"] = "gemma:2b"
    prompt: str
    stream: bool = False


class OllamaResponse(BaseModel):
    response: str
    done: bool

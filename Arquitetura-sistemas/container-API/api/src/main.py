from fastapi import FastAPI
from uvicorn import run

app = FastAPI()


@app.get("/")
def get_root():
    """
    Returns a JSON response with a message indicating that the API was called using the GET method.
    """
    return {"message": "Chamou API com o método GET"}


@app.post("/")
def post_root():
    """
    Handle POST requests to the root endpoint.

    Returns:
        dict: A dictionary with a message indicating that the API was called with the POST method.
    """
    return {"message": "Chamou API com o método POST"}


if __name__ == "__main__":
    run(app, host="0.0.0.0", port=8001)

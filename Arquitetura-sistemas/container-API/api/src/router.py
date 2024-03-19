from fastapi import APIRouter, Request


api_router = APIRouter(
    prefix="/api",
    tags=["api"],
)


@api_router.get("/")
async def get_call(_: Request):
    """
    Handle GET requests to the root endpoint.

    Args:
        _: The request object.

    Returns:
        A dictionary with a success message.

    """
    return {"message": "You successfully GET called the API!"}


@api_router.post("/")
async def post_call(_: Request):
    """
    Handle POST requests to the API.

    Args:
        _: The request object.

    Returns:
        A dictionary with a success message.

    """
    return {"message": "You successfully POST called the API!"}

import json
from typing import List

from api.models import Product


def get_products(db:str)->List[dict]:
    result = []
    with open("db.json", "r") as file:
        data = json.load(file)
        for product in data:
            result.append(product)
    return result

def get_product_by_id(product_id:str)-> Product|None:
    assert type(product_id) is str
    assert product_id

    products:List[dict] = get_products("app/db.json")

    result = list(filter(lambda p: p["id"]==product_id, products))

    result = result.pop() if result else None
    
    return Product(**result) if type(result) is dict else None
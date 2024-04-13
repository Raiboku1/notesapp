import logging
from typing import Union


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from items import ItemManager
from notes import NoteManager


import mysql.connector


app = FastAPI()


db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="fastAPI_sample"
)
cursor = db.cursor()
item_manager = ItemManager(db)
note_manager = NoteManager(db)


class Item(BaseModel):
    id: Union[int, None] = None
    description: Union[str, None] = None
    name: str
   
class Note(BaseModel):
    note: Union[str, None] = None




# read
@app.get("/getItems", tags=["items"])
def read_items():
    return item_manager.read_items()
   
# create
# response_model=Item (as second parameter if you want to have the same model)
@app.post("/item")
def create_item(item: Item):
    return item_manager.create_item(item)
   
# update
# response_model=Item (as second parameter if you want to have the same model)
@app.put("/item/{item_id}")
def update_item(item_id: int, item: Item):
    return item_manager.update_item(item_id, item)


# delete
@app.delete("/item/{item_id}")
def delete_item(item_id: int):
    return item_manager.delete_item(item_id)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/notes/getItems", tags=["notes"])
def read_notes():
    return note_manager.read_items()


@app.post("/notes/item")
def create_item(item: Note):
    return note_manager.create_item(item)


@app.put("/notes/item/{item_id}")
def update_item(item_id: int, item: Note):
    return note_manager.update_item(item_id, item)


@app.delete("/notes/item/{item_id}")
def delete_item(item_id: int):
    return note_manager.delete_item(item_id)

from typing import Union


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


db = None
cursor = None
 
class Item(BaseModel):
    id: Union[int, None] = None
    description: Union[str, None] = None
    name: str


class ItemManager:
    def __init__(self, _db):
        global cursor, db
        db = _db
        cursor = db.cursor()
       
    def read_items(self):
        return read_items()


    def create_item(self, item: Item):
        return create_item(item)


    def update_item(self, item_id: int,item: Item):
        return update_item(item_id, item)


    def delete_item(self, item_id: int):
        return delete_item(item_id)
   
   
def read_items():
    try:
        print(cursor)
        cursor.execute("SELECT * FROM items ORDER BY createdAt DESC")
        items = [{"id": row[0], "name": row[1], "description": row[2] ,"createdAt": row[3], "updatedAt": row[4]} for row in cursor.fetchall()]
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")


def create_item(item: Item):
    try:
        query = "INSERT INTO items (name,description) values (%s,%s)"
        cursor.execute(query,[item.name, item.description])
        db.commit()
        # Get the ID of the newly inserted item
        item_id = cursor.lastrowid


        # Fetch the newly inserted item from the database
        cursor.execute("SELECT * FROM items WHERE id = %s", [item_id])
        new_item = cursor.fetchone()
        return {"id": new_item[0], "name": new_item[1], "description":new_item[2] ,"createdAt": new_item[3], "updatedAt": new_item[4]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")
   
# update
# response_model=Item (as second parameter if you want to have the same model)
def update_item(item_id: int, item: Item):
    try:
        query = "UPDATE items SET name=%s, description=%s WHERE ID=%s"
        cursor.execute(query,[item.name, item.description, item_id])
        db.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item not found")


        # Fetch the newly inserted item from the database
        cursor.execute("SELECT * FROM items WHERE id = %s", [item_id])
        new_item = cursor.fetchone()
        return {"id": new_item[0], "name": new_item[1], "description":new_item[2] ,"createdAt": new_item[3], "updatedAt": new_item[4]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")


# delete
def delete_item(item_id: int):
    try:
        query = "DELETE FROM items WHERE ID=%s"
        cursor.execute(query,[item_id])
        db.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item not found")


        return {"id": item_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")
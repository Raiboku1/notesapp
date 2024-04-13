from typing import Union


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel


db = None
cursor = None
 
class Item(BaseModel):
    note: Union[str, None] = None


class NoteManager:
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
        cursor.execute("SELECT * FROM notes ORDER BY createdAt DESC")
        items = [{"id": row[0], "note": row[1], "createdAt": row[2] ,"updatedAt": row[3]} for row in cursor.fetchall()]
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")


def create_item(item: Item):
    try:
        query = "INSERT INTO notes (note) values (%s)"
        cursor.execute(query,[item.note])
        db.commit()
        # Get the ID of the newly inserted item
        item_id = cursor.lastrowid


        # Fetch the newly inserted item from the database
        cursor.execute("SELECT * FROM notes WHERE id = %s", [item_id])
        new_item = cursor.fetchone()
        return {"id": new_item[0], "note": new_item[1], "createdAt": new_item[2], "updatedAt": new_item[3]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")
   
# update
# response_model=Item (as second parameter if you want to have the same model)
def update_item(item_id: int, item: Item):
    try:
        query = "UPDATE notes SET note=%s WHERE ID=%s"
        cursor.execute(query,[item.note, item_id])
        db.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item not found")


        # Fetch the newly inserted item from the database
        cursor.execute("SELECT * FROM notes WHERE id = %s", [item_id])
        new_item = cursor.fetchone()
        return {"id": new_item[0], "note": new_item[1], "createdAt": new_item[2], "updatedAt": new_item[3]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")


# delete
def delete_item(item_id: int):
    try:
        query = "DELETE FROM notes WHERE ID=%s"
        cursor.execute(query,[item_id])
        db.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item not found")


        return {"id": item_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database Error: {str(e)}")
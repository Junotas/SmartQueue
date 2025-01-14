from pydantic import BaseModel

class ComplaintCreate(BaseModel):
    user_id: int
    description: str

class ComplaintResponse(BaseModel):
    id: int
    user_id: int
    description: str
    status: str

    class Config:
        orm_mode = True

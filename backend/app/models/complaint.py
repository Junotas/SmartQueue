from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base

class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    description = Column(String, nullable=False)
    status = Column(String, default="pending")

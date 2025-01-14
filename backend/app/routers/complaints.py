from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.schemas.complaint import ComplaintCreate, ComplaintResponse
from app.models.complaint import Complaint

router = APIRouter()

@router.post("/complaint", response_model=ComplaintResponse)
def create_complaint(complaint: ComplaintCreate, db: Session = Depends(get_db)):
    new_complaint = Complaint(description=complaint.description, user_id=complaint.user_id)
    db.add(new_complaint)
    db.commit()
    db.refresh(new_complaint)
    return new_complaint

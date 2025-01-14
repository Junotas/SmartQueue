from fastapi import FastAPI
from app.routers import complaints

app = FastAPI()

# Include the complaints router
app.include_router(complaints.router, prefix="/api", tags=["Complaints"])

@app.get("/")
def root():
    return {"message": "Welcome to SmartQueue API"}

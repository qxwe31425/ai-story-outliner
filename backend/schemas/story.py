from typing import Optional, List, Dict
from datetime import datetime
from pydantic import BaseModel

class StoryOptionsSchema(BaseModel):
    text: str
    node_id: Optional[int] = None

class StoryNodeBase(BaseModel):
    content: str
    is_ending: bool = False
    is_winning_ending: bool = False

class CompleteStoryNodeResponse(StoryNodeBase):
    id: int
    options: List[StoryOptionsSchema] = []

    class Config:
        from_attributes = True 

class StoryBase(BaseModel):
    title: str
    session_id: Optional[str] = None
    
    class Config:
        from_attributes = True 

class StoryCreate(StoryBase):
    pass

class StoryUpdate(StoryBase):
    pass

class StoryResponse(StoryBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True 
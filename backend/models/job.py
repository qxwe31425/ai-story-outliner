from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from core.timeutil import now_beijing
from db.database import Base


class StoryJob(Base):
    __tablename__ = "story_jobs"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(String, index=True, unique=True)
    session_id = Column(String, index=True)
    theme = Column(String)
    status = Column(String)
    story_id = Column(Integer, nullable=True)
    error = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=now_beijing)
    completed_at = Column(DateTime(timezone=True), nullable=True)

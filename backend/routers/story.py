from fastapi import APIRouter

router = APIRouter(prefix="/user", tags=["users"])

@router.get("/list")
async def user_list():
    return {"users": ["acc", "abb"]}


@router.get("/{user_id}")
async def user_detail(user_id: int):
    return {"user_id": user_id}
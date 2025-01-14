from typing import List

def get_next_complaint(queue: List[dict]) -> dict:
    if queue:
        return queue.pop(0)
    return None

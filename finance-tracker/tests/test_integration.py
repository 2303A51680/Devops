import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app

def test_add_and_get_expense():
    client = app.test_client()

    # insert expense
    response = client.post("/expense", json={
        "amount": 500,
        "category": "Food"
    })
    assert response.status_code == 200

    # retrieve expenses
    response = client.get("/expenses")
    data = response.get_json()

    assert len(data) > 0
    assert data[0]["amount"] == 500
    assert data[0]["category"] == "Food"
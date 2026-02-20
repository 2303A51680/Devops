from flask import Flask, request, jsonify
from database import engine, SessionLocal, Base
from models import Expense

app = Flask(__name__)

# create tables
Base.metadata.create_all(bind=engine)

@app.route("/expense", methods=["POST"])
def add_expense():
    data = request.json
    db = SessionLocal()
    expense = Expense(amount=data["amount"], category=data["category"])
    db.add(expense)
    db.commit()
    return jsonify({"message": "Expense added"})

@app.route("/expenses", methods=["GET"])
def get_expenses():
    db = SessionLocal()
    expenses = db.query(Expense).all()
    return jsonify([{"amount": e.amount, "category": e.category} for e in expenses])

if __name__ == "__main__":
    app.run(debug=True)
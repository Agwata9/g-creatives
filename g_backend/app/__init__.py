from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    # ✅ Allow only the React frontend on localhost:3000
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

    with app.app_context():
        from . import routes
        db.create_all()

    return app
